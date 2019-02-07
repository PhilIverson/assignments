import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
             const {id,company,img,info,price,title,inCart} = value.products.find(product => product.id == this.props.match.params.id);
             return (
                 <div className="container py-5">
                    title
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>{title}</h1>    
                        </div>
                    </div>
                    {/* end title */}
                    {/* product info */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3" >
                        <img src={require("../" + img)} className="img-fluid" alt="product"/>
                        </div>
                        {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 
                            text-capitalize">
                        <h2>Chart: {title}</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        Data Provided By:Alphavantage : <span className="text-uppercase">
                        {company}</span>
                        </h4>
                        <h4 className="text-blue">
                        Stock Price : <span>$</span>
                        {price}
                        {/* buttons */}
                        <p className="text capitalize font-weight-bold mt-3 mb-0">
                        Stock Info</p>
                        <p className="text-muted lead">{info}</p>
                    <div>
                    <Link to='/'>
                            <ButtonContainer>
                                back to data
                            </ButtonContainer>
                            <ButtonContainer
                                cart
                                disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCart(id);
                                }}>
                                {inCart ? "inCart" : "add to cart"}
                            </ButtonContainer>
                            </Link>
                            </div>
                        </h4>
                        </div>
                    </div>
                </div>
                );
            }}
            </ProductConsumer>
        );
    }
}
