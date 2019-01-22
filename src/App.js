import React, { Component } from 'react';
import UsersComponent from './users/usersComponent';

import './App.css';

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <React.Fragment>
        <h1>List of Users</h1>
        <UsersComponent></UsersComponent>
      </React.Fragment>
    );
  }
}

export default App;
