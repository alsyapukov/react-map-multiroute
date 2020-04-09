import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './ads.scss';


function mapStateToProps(state) {
  return {
    ads: state.ads,
    searchActive: state.searchActive
  }
}

class Ad extends Component {
  state = {
    imgUrl: "https://cache3.youla.io/files/images/780_780/5c/62/5c6266d962e1c6940369bd42.jpg"
  }

  render() {
    return (
      <div className="ads">
        {
          this.props.ads
            .filter(ad => this.props.searchActive.length > 0 ? ad.title == this.props.searchActive : ad)
            .map(ad => {
              return (
                <div className="ads__item" key={ad.id}>
                  <div className="ads__wrap">
                    <div className="ads__img">
                      <img src={this.state.imgUrl} />
                    </div>
                    <div className="ads__content">
                      <div className="ads__title">{ad.title}</div>
                      <div className="ads__description">{ad.description}</div>
                    </div>
                  </div>
                </div>
              )
            })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Ad)