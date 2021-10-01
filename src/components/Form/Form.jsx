import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {

  constructor(props) {
    super(props)

    this.urlToImage = React.createRef(); 
    this.texto = React.createRef();

    this.state = {
        news: {}
    }
}

  addProduct = (event) => {
  
    event.preventDefault();

    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const urlToImage  = this.urlToImage.current.value; 

    if (title && description  && urlToImage ) {

        const news = { title,description,urlToImage }
        // this.setState({ news })
        this.props.addNew(news)
    }

}



  render() {
    return (

      <div>
        <form onSubmit={this.addProduct} >

          <label>
            Title:
          </label>
          <input type="text" name="title"  /> 

          <label>
            Descripción:
          </label>
          <input type="text" name="description" />
          
          <label>
            URL img:
          </label>
          <input type="url" name="urlToImage" ref={this.urlToImage} />

          <input type="submit" value="Submit" />
        </form>

      </div>


    )
  }
}

export default Form;
