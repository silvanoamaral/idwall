import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = { msg: '' }
  }

  componentDidMount() {
    if(localStorage.getItem("auth-tokem") !== null) {
      //this.props.history.replace('feed/feed');
    }
  }

  autentique() {
    const url_signup = 'https://api-iddog.idwall.co/signup';
    fetch(url_signup, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        'email': this.login.value
      })
    })
    .then(response => response.json())
    .then(result => {
      const decoded = jwt_decode(result.user.token);
      console.log('this.props.location',this);
      localStorage.setItem('auth-tokem',decoded);
      this.props.history.replace('feed/feed');
    })
    .catch(error => {
      console.log('Failed POST signup user',error.message);
    });
  }

  signup(event) {
    event.preventDefault();

    if(this.login.value !== '') {
      this.autentique();
    } else {
      this.setState({ msg:'Login e Senha Inválidos' });
    }
  }


  render() {
    return (
      <div className="App">        
        <div className="grid-login">
          <div className="login-box">
            <span>{ this.state.msg }</span>
            <form onSubmit={ this.signup.bind(this) } >
              <input type="text" ref={ (input) => this.login = input } />
              <input type="submit" value="login"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
