import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'

import ListNews from "../ListNews";
import Form from "../Form";
import Home from "../Home"
import Error from '../Error'





class Main extends Component {


  state = {
    news: []
  }

  async componentDidMount() {
    const res = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-09-03&pageSize=5&sortBy=publishedAt&apiKey=caa41b373abc4af58b84ad913d08eb19')
    const data = await res.data
    this.setState({ news: [...this.state.news, ...data.articles] })
  }


  addNew = (newsItem) => {

    this.setState({ news: [...this.state.news, newsItem] })
  }

  removeNews = (newsTitle) => {
    let data = this.state.news
    let newData = data.filter(e => e.title !== newsTitle)
    this.setState({ news: newData })


  }



  render() {
    return (

        <div className="main">
          <main>
            <Switch>
              <Route path="/" component={()=> <Home changeUserName={this.props.changeUserName}/>} exact />
              <Route path="/form" component={() => <Form addNew={this.addNew} />} />
              <Route path="/list" component={() => <ListNews noticias={this.state.news} remove={this.removeNews} />} />
              <Route component={Error} />
            </Switch>
          </main>
        </div>

    )

  }
}

export default Main;







