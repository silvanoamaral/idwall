import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Loading from '../components/Loading/Loading'
import Navigation from '../Navigation/Navigation'
import Title from '../components/Title/Title'

export default class Hound extends Component {
    constructor() {
        super();
        this.state = {
            msg: '',
            dogs: null
        }
    }

    componentDidMount() {
        if(localStorage.getItem('auth-tokem') === null) {
           this.props.history.replace('/');
        } else {
            const token = localStorage.getItem('auth-tokem');

            const url = 'https://api-iddog.idwall.co/feed?category=hound';

            fetch(url, {
                method: 'get', // opcional
                headers: new Headers({
                    'Authorization': token,
                    'Content-Type': 'application/json'
                })
            })
            .then(response => {
                if(response.ok) {
                   return response.json() //retorna uma promise
                } else {
                    localStorage.removeItem('auth-tokem');

                    this.props.history.replace('/');
                    throw new Error('Não foi possível fazer o login.');
                }
            })
            .then(result => {
                const dogJSON = result.list;
                let listDog = dogJSON.map((obj) => {
                    return(
                        <li key={ obj }>
                            <img src={ obj } />          
                        </li>                
                    )
                });

                this.setState({ dogs: listDog });
               
            })
            .catch(error => {
                this.setState({ msg: error.message });
                console.error('Failed retrieving information', error);
            });
        }
    }

    render() {
        const { dogs } = this.state;
        
        return (
            <div className="content">
                <Navigation />
                <Title />
                <ul className="list-dog">
                    {!this.state.dogs
                        ? <Loading />
                        : dogs }
                </ul>
            </div>
        )
    }
}