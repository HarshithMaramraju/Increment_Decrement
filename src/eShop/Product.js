import React from 'react'
import "./Product.css"
function Product() {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>Tittle</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus repellendus impedit doloremque tenetur cum, quos repudiandae itaque enim eos expedita? Quod, officiis adipisci! Ipsam explicabo et inventore ex aut!</p>
                <p className="product__price"> <small>$</small>500</p>
                <div className="product__rating">⭐⭐⭐</div>
            </div>
            <img src="https://m.media-amazon.com/images/I/71A2pUhxh0L._AC_UY1100_.jpg" alt="" className="product__img" />
            <button>Add to basket</button>
        </div>
    </div>
  )
}

export default Product