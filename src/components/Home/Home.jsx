import React, { Component } from "react";

import { userContext } from '../../context/userContext';

class Home extends Component {
 

  state = {

    userName: "",

  }


  render() {

    return (

      <div>
          <input type="text" value={this.state.userName} onChange={(e) => this.setState({ userName: e.target.value })} />
          <button type="button" onClick={()=> this.props.changeUserName(this.state.userName)}>Add User</button>
       
      </div>

    );
  }
}

export default Home;
