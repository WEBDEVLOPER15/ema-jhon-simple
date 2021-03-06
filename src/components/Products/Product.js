import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props.product.name);
    //  function add(a,b){
    //      return a+b;
    //  }
    //  function abc(){
    //      return add(2,3)

    //  }
    //  abc()

    const { img, name, seller, price, stock } = props.product;
    
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by:{seller} </small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} left in stock Order soon</small></p>
                <button 
                className="main-button" 
                 onClick={props.handleAddProduct}
                >

                     <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;