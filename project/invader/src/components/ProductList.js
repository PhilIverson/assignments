import React, { Component } from 'react';
import Stockpicks from './Stockpicks';
import Title from './Title';
import { ProductConsumer } from '../context';
import { storeProducts } from '../data';

export default class ProductList extends Component {
    state = {
        products: storeProducts
    };
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Stock" title="Data" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Stockpicks key={product.id} product={product} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            /* <div>
                <StockPicks />
            </div> */
        );
    }
}
