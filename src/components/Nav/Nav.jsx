import React, { Component } from "react";

import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Crear noticias</Link></li>
        <li><Link to="/list">Noticias</Link></li>
      </ul>
    )
  }
}

export default Nav;
