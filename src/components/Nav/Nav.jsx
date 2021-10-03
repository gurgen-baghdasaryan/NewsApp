import React, { Component } from "react";

import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Create News</Link></li>
        <li><Link to="/list">News</Link></li>
      </ul>
    )
  }
}

export default Nav;
