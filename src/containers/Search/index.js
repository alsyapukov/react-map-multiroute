import React, { Component } from "react";
import './search.scss'
import TextBox from '../../components/base/TextBox'

import SortSearch from '../SortSearch'

class Search extends Component {

  state = {
    value: "",
    searchArray: [],
    multiRoute: null
  }

  changeValue = (val) => {
    this.setState({ value: val });
  }

  geocoderSearch = (val) => {
    ymaps
      .geocode(val, {
        results: 1,
      })
      .then(res => {
        let firstGeoObject = res.geoObjects.get(0);

        let searchValue = {
          address: firstGeoObject.getAddressLine(),
          coords: firstGeoObject.geometry.getCoordinates()
        }
        this.setState({
          searchArray: [...this.state.searchArray, searchValue]
        })
        this.buildRoute(this.state.searchArray);
        this.setCenter();
      });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.geocoderSearch(this.state.value);
    }
  }

  removeSearchItem = (i) => {
    let newArray = this.state.searchArray;
    newArray = newArray.filter((item, index) => index !== i);
    this.setState({
      searchArray: newArray
    })
    this.buildRoute(newArray);
  }

  editor = (multiRoute) => {
    this.setState({
      multiRoute: multiRoute.editor.start()
    })
  }

  setCenter = () => {
    this.props.myMap.setCenter(
      this.state.searchArray[this.state.searchArray.length - 1].coords
    );
  }

  addBalloon = () => {
    this.state.searchArray.map((item, i) => {

      let yandexWayPoint = this.state.multiRoute.getWayPoints().get(i);

      ymaps.geoObject.addon.balloon.get(yandexWayPoint);
      yandexWayPoint.options.set({
        balloonContentLayout: ymaps.templateLayoutFactory.createClass(
          `${item.address}`
        )
      });
    })
  }

  changeSearchArray = () => {
    this.state.multiRoute.model.getJson().properties.waypoints
      .map((point, i) => {

        let newCoords = point.coordinates.reduceRight(
          (acc, coord) => acc = [...acc, coord], []
        )

        if (this.state.searchArray[i].coords != newCoords) {
          ymaps
            .geocode(newCoords, {
              results: 1,
            })
            .then(res => {
              let firstGeoObject = res.geoObjects.get(0);

              let newArray = this.state.searchArray.map((item, index) => {
                if (index == i) {
                  return {
                    address: firstGeoObject.getAddressLine(),
                    coords: newCoords
                  }
                } else {
                  return item
                }
              })

              this.setState({
                searchArray: newArray
              })
            });
        }
      })
  }

  buildRoute = (val) => {

    val = val.map(item => item.coords);

    if (
      this.state.multiRoute
      && this.state.multiRoute.getWayPoints()
    ) {

      this.state.multiRoute.model.setReferencePoints(val);

    } else {

      let multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: val,
      },
        {
          routeActiveStrokeWidth: 8,
          routeActiveStrokeStyle: 'solid',
          routeActiveStrokeColor: "#2d2d2d",
        })

      multiRoute.editor.start();
      this.props.myMap.geoObjects.add(multiRoute);

      this.setState({
        multiRoute: multiRoute
      })

    }

    this.state.multiRoute.model.events.add("requestsuccess", () => {

      this.changeSearchArray();
      this.addBalloon();
      
    })
  }

  sort = (val) => {
    this.setState({
      searchArray: val
    })
    this.buildRoute(val);
  }

  render() {
    return (
      <div className="search" >
        <div className="search__textbox">
          <TextBox changeValue={this.changeValue} onKeyPress={this.handleKeyPress} />
        </div>
        <div className="search__list">
          <SortSearch items={this.state.searchArray} sort={(e) => this.sort(e)} removeSearchItem={(e) => this.removeSearchItem(e)} />
        </div>
      </div>
    );
  }
}
export default Search;