import React, { Component } from 'react';
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contactList: state.contactList.filter((contact) => contact.id !== action.payload)
            }

        case 'ADD_CONTACT':
            return {
                ...state,
                contactList: [...state.contactList, action.newContact]
            }

        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contactList: [
            {
                id: 0,
                name: 'John Doe',
                email: 'john@gmail.com',
                phone: '123-324-5300'
            },
            {
                id: 1,
                name: 'Jane Miller',
                email: 'jane@gmail.com',
                phone: '321-874-2301'
            },
            {
                id: 2,
                name: 'Scott Lynn',
                email: 'miller@gmail.com',
                phone: '217-898-7048'
            }
        ],

        dispatch: (action) => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
