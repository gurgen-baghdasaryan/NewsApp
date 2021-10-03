import React, { Component } from "react";
import { userContext } from "../../context/userContext";

import Nav from '../Nav'
import Footer from '../Footer'

class Head extends Component {

  static contextType = userContext

  render() {
    return (

      <div className="head">
        <h3>FN</h3>
        <Nav />
        <Footer />
        <p>{this.context}</p>
      </div>
    )
  }
}

export default Head;
