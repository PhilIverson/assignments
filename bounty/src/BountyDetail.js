import React from 'react'
import EditForm from './EditForm'; 
import Toggler from './toggler';

function BountyDetail({name, price, alive}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Status: {alive ? 'Alive' : 'Dead'}</p>
            <button onClick={toggle}>Edit</button>
        </div>
    )
}