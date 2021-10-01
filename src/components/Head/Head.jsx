import React, { Component } from "react";
import { userContext } from "../../context/userContext";

import Nav from '../Nav'

class Head extends Component {

  static contextType = userContext

  render() {
    return (

      <div>
        <Nav />
      <p>{this.context}</p>
      </div>



    )
  }
}

export default Head;
