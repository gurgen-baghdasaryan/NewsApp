import React, { Component } from "react";

import Card from '../Card'

class ListNews extends Component {

  paintNews() {
    return this.props.noticias.map((news, i) => <Card key={i} data={news} remove={this.props.remove} />)
  }

  render() {
    return (
      <div className="listNews" >
        {this.paintNews()}
      </div>
    )
  }


}

export default ListNews;
