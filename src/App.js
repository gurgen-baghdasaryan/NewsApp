import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


import { userContext } from './context/userContext';
import Main from './components/Main';
import Head from './components/Head'


class App extends Component {
  state = {

    user: ""
  }

  changeUserName = (userName) => {
    console.log("nameu", userName);
    this.setState({ user: userName })
    
  }

  render() {

    return (

      <userContext.Provider value={this.state.user} >
        <div className="App">
          <BrowserRouter>
            <Head />
            <Main changeUserName={this.changeUserName} />
          </BrowserRouter>
        </div>
      </userContext.Provider>
      

    );

  }



}

export default App;
