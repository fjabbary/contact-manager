import React, { Component } from 'react';
import Contact from './Contact'
import { Consumer } from '../context'

export default class Contacts extends Component {
    render() {

        return (
            <Consumer>
                {value => {
                    return (
                        <div>
                            {value.contactList.map((contact) => {
                                return <Contact key={contact.id} contact={contact} />
                            })}
                        </div>
                    )
                }}
            </Consumer>
        )


    }
}
