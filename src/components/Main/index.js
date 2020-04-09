import React, { Component } from "react";
import '@/components/Main/main.scss';

import Ads from '@/containers/Ads';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <Ads />
      </div>
    );
  }
}
export default Main;