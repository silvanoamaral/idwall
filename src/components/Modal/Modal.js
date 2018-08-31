import React, { Component } from 'react'
import Modal from 'react-modal'

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

class ModalCustomizado extends React.Component {

    render() {
        return (
            <Modal
                isOpen={this.props.state.modalIsOpen}
                onAfterOpen={this.props.afterOpenModal}
                onRequestClose={this.props.closeModal}
                style={customStyles}
                contentLabel="Modal IDDOOG"
                >

                <button onClick={this.props.closeModal} class="btn-fechar"></button>
                    <img src={ this.props.state.imagem } /> 
            </Modal>
        )
    }
}

export default ModalCustomizado