import React, { Component } from 'react';

import Title from '../components/Title/Title'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { msg: '' }
    }

    componentDidMount() {
        if(localStorage.getItem("auth-tokem") !== null) {
            this.props.history.replace('feed/husky');
        }
    }

    autentique() {
        const url_signup = 'https://api-iddog.idwall.co/signup';
        fetch(url_signup, {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                email: this.login.value 
            })
        })
        .then(response => {
            if(response.ok) {
               return response.json();
            } else {
                localStorage.removeItem('auth-tokem');
                throw new Error('Não foi possível fazer o login.');
            }
        })
        .then(result => {            
            const token = result.user.token;
            localStorage.setItem('auth-tokem',token);
            this.props.history.replace('feed/husky');
        })
        .catch(error => {
            this.setState({ msg:'Usuário Inválido' });
            console.log('Failed POST signup user',error.message);
        });
    }

    signup(event) {
        event.preventDefault();

        if(this.login.value !== '') {
            this.autentique();
        } else {
            this.setState({ msg:'Login Inválido' });
        }
    }

  render() {
    return (
      <div className="App">        
        <div className="grid-login">
            <Title />
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
