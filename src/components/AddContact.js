import React, { Component } from 'react'
import { Consumer } from '../context';
import uuid from 'react-uuid'

export default class AddContact extends Component {
    constructor(props) {
        super(props)

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }


    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        let nameInput = this.nameInput.current.value
        let emailInput = this.emailInput.current.value
        let phoneInput = this.phoneInput.current.value

        const contact = {
            id: uuid(),
            name: nameInput,
            email: emailInput,
            phone: phoneInput
        }

        if (nameInput && emailInput && phoneInput) {
            dispatch({
                type: 'ADD_CONTACT',
                newContact: contact
            })
        }


        this.nameInput.current.value = ''
        this.emailInput.current.value = ''
        this.phoneInput.current.value = '';

        this.props.history.push('/')
    }

    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    console.log(value)
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                <h4>Add Contact</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Name..." defaultValue={name}
                                            ref={this.nameInput} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Email..." defaultValue={email} ref={this.emailInput} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">Phone</label>
                                        <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone..." defaultValue={phone} ref={this.phoneInput} />
                                    </div>

                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}
