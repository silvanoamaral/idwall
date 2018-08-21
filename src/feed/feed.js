import React, { Component } from 'react'

import Loading from '../components/Loading/Loading'

export default class feed extends Component {
    constructor() {
        super();
        this.state = {
            dogs: null
        }
    }

    componentDidMount() {
        if(localStorage.getItem('auth-tokem') === null) {
           // this.props.historry.replace('/App');
        } else {
            const token = localStorage.getItem('auth-tokem');

            const url = 'https://api-iddog.idwall.co/feed';

            fetch(url, {
                method: 'get', // opcional
                headers: new Headers({
                    'Authorization': token,
                    'Content-Type': 'application/json'
                })
            })
            .then(response => response.json()) // retorna uma promise
            .then(result => {
                console.log(result);
                /*
                const dogJSON = result.data;
                let listDog = dogJSON.results.map((obj) => {
                    return(
                        <li key={obj.id}>
                            <img src={obj.thumbnail.path+".jpg"} />
                            <label>{obj.name}</label>                                  
                        </li>                
                    )
                });

                this.setState({ dogs: listDog });
                */
            })
            .catch(error => {
                console.error('Failed retrieving information', error);
            });
        }
    }

    render() {
        return (
            <div className="content">
                <h2>Página de Feed</h2>
                <ul className="list-dog">
                    {!this.state.dogs
                        ? <Loading />
                        : dogs }
                </ul>
            </div>
        )
    }
}