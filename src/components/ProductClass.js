import React from 'react'
import { Component } from 'react';

class ProductClass extends Component{
    constructor(props) {
        super(props);
        this.state = {selected: false}
      }

      SelectProduct() {
        this.setState({selected: !this.state.selected});
      }

    render(){
        let boxClass = ["product-box"];
        const imgSrc = "./images/" + this.props.product.img
        if(this.state.selected) {
            boxClass.push('selected');
            }

        return(
            <div className={boxClass.join(' ')} onClick={this.SelectProduct.bind(this)} >
                <img src={require(""+imgSrc)} className="product-image"></img>
                <div className="product-name">{this.props.product.name}</div>
            </div>
        )
    }
}

export default ProductClass