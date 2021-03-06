import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../Logo.png';
import markets from '../Markets.jpeg';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";

export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               {/* https://www.iconfinder.com

               */}
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                    <img src={markets} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                Stock Data
                </Link>
                </li>
                </ul>
                <button>Indexes</button>
                <button>Reasearch </button>
                <button>Retirement  </button>
                <Link to='/purchase' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                    </span>
                    Purchase Stock
                </ButtonContainer>
                
                </Link>
           </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize;
    }
`;






