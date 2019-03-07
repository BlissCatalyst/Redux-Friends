import React from 'react';
import { connect } from 'react-redux';

export default class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
           />
           <input
            type="text"
            name="username"
            value={this.state.credentials.password}
            onChange={this.handleChanges} 
           />
        </form>
      </div>
    );
  };
}