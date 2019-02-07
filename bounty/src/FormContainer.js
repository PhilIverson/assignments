import React, { Component } from 'react'

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: props.inputs
        }
    }
    handleChange(e) {
        const {name, value, type, checked} = e.target;
        this.setState(ps => ({
            inputs: {
                ...ps.inputs,
                [name]: type === 'checkbox' ?
            }
        }))
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
