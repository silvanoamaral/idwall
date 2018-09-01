import React, { Component } from 'react'
import Modal from 'react-modal'

import Loading from '../components/Loading/Loading'
import Navigation from '../main/Navigation/Navigation'
import Title from '../components/Title/Title'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

export default class Pud extends Component {
    constructor() {
        super();
        this.state = {
            msg: '',
            dogs: null,
            modalIsOpen: false,
            imagem: ''
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    getIDImagen(img) {
        var src = img.split('n').pop();
        var id =  src.split('_')[0];
        var categoria = this.props.location.pathname;
        categoria = categoria.split('/').pop();
        window.history.pushState(null, null, `/feed?category=${ categoria }&id=${ id } `);
    }

    openModal(event) {
        this.setState({ imagem: event.target.src });
        this.setState({ modalIsOpen: true });
        this.getIDImagen(event.target.src);       
    }
    
    afterOpenModal() {
        // references are now sync'd and can be accessed.
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
        window.history.pushState(null, null, this.props.match.path);
    }

    componentDidMount() {
        if(localStorage.getItem('auth-tokem') === null) {
           this.props.history.replace('/');
        } else {
            const token = localStorage.getItem('auth-tokem');

            const url = 'https://api-iddog.idwall.co/feed?category=pug';

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
                            <img src={ obj } onClick={this.openModal.bind(this)} />                   
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

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >

                    <button onClick={this.closeModal} className="btn-fechar"></button>
                       <img src={ this.state.imagem } /> 
                </Modal>
            </div>
        )
    }
}