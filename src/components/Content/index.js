import React, { Component } from "react";
import '@/components/Content/content.scss'

import Aside from "@/components/Aside/";
import Main from "@/components/Main/";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Aside />
        <main className="content__main">
          <Main />
        </main>
      </div>
    );
  }
}
export default Content;