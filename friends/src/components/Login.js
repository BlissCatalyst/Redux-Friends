import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
        }
      }
    )
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
           <button>Login</button>
        </form>
      </div>
    );
  };
}

export default connect(null, { login })(Login);