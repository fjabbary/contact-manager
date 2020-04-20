import React, { Component } from 'react';
import { Consumer } from '../context';

class Contact extends Component {

    state = {
        expand: false
    }

    toggle = () => {
        this.setState(() => {
            return {
                expand: !this.state.expand
            }
        })
    }

    onDelete = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    }


    render() {
        const { id, name, email, phone } = this.props.contact
        const { expand } = this.state;

        return (

            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (

                        <div className="card card-body mb-3">
                            <h4>{name}
                                <i className={expand ? 'fa fa-minus ml-3' : 'fa fa-plus ml-3'} style={icon} onClick={this.toggle}></i>
                                <i className="fa fa-trash float-right text-danger" style={icon} onClick={this.onDelete.bind(this, id, dispatch)}></i>
                            </h4>
                            {expand ?
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                                : null}

                        </div>
                    )
                }}
            </Consumer>

        );
    }
}

const icon = {
    cursor: 'pointer'
}


export default Contact;


