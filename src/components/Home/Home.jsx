import React, { Component } from "react";


class Home extends Component {

  state = {

    userName: "",

  }

  render() {

    return (

      <div className="home">
        <h1>Welcome To FirstNews</h1>
        <input type="text" value={this.state.userName} onChange={(e) => this.setState({ userName: e.target.value })} />
        <button className='button' esutton type="button" onClick={() => this.props.changeUserName("Profile " + this.state.userName)}>Add User</button>
      </div>

    );
  }
}

export default Home;
