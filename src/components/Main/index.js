import React, { Component } from "react";
import '@/components/Main/main.scss'

import ads from '@/components/Main/ads.json'

class Main extends Component {
  
  state = {
    imgUrl: "https://cache3.youla.io/files/images/780_780/5c/62/5c6266d962e1c6940369bd42.jpg"
  }

  render() {
    return (
      <div className="main">
        <div className="main__ad">
          <div className="ad">
            {
              ads.map(ad => {
                return (
                  <div className="ad__item" key={ad.id}>
                    <div className="ad__wrap">
                      <div className="ad__img">
                        <img src={this.state.imgUrl} />
                      </div>
                      <div className="ad__content">
                        <div className="ad__title">{ ad.title }</div>
                        <div className="ad__description">{ ad.description }</div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
export default Main;