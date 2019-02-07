import React, { Component, createContext } from 'react'

import bounties from './bounties.json';

const {Consumer, Provider} = createContext();

export default class BountyProvider extends Component {

    constructor() {
        super();
        this.state = {
            bounties
        }
        this.editBounty = this.editBounty.bind(this)

}

editBounty(id, updateBounty)
 {
     this.setState(ps => ({
         bounties: ps.bounties.map(bounty => bounty._id === id ? {...bounty, ...updateBounty} : bounty)
     }))
 }
    render() {
        const value = {
            ...this.state,
            editBounty: this.editBounty
        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }     
}

export const withBountyContext = C => props => (
    <Consumer>
            {value => <C {...value}{...props} />}
    </Consumer>
)