import React, { useState } from 'react'

function Product(props){

    const [selected, SelectProduct] = useState(false)

    let boxClass = ["product-box"];
    const imgSrc = "./images/" + props.product.img

    if(selected) {
        boxClass.push('selected');
        }

    return(
        <div className={boxClass.join(' ')} onClick={() => SelectProduct(!selected)} >
            <img src={require(""+imgSrc)} className="product-image"></img>
            <div className="product-name">{props.product.name}</div>
        </div>
    )
}

export default Product