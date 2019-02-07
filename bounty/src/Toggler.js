import React, { Component } from 'react'

export default class Toggler extends Component {
    constructor() {
        super()
        this.state = {
            on: false
        }
        this.toggler = this.toggler.bind(this)
        }
        
     toggle() {
         this.setState(ps => ({ on: !ps.on}))
     }
     render() {
         const props = {
             toggle: this.toggle,
                ...this.state
         }
         return (
             this.props.children(props)
         )
    }
}

export const withToggler = C => props => (
    <Toggler>
        {toggleProps => <C {...toggleProps}{...props}/>}
    </Toggler>
)