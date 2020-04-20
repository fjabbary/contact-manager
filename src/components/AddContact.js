import React, { Component } from 'react'
import { Consumer } from '../context';

export default class AddContact extends Component {
    constructor(props) {
        super(props)

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }


    static defaultProps = {
        name: 'Fred Smith',
        email: 'fred@gmail.com',
        phone: '333-222-1111'
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }

        dispatch({
            type: 'ADD_CONTACT',
            newContact: contact
        })
    }

    render() {
        const { name, email, phone } = this.props;

        return (
            <Consumer>
                {value => {
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
