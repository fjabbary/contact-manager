import React, { Component } from 'react';
import Contact from './Contact'
import { Consumer } from '../context'

export default class Contacts extends Component {
    render() {

        return (
            <Consumer>
                {value => {
                    console.log(value)
                    return (
                        <div>
                            <h1 className="display-4"> <span className="text-danger">Contact</span> List ({value.contactList.length})</h1>
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
