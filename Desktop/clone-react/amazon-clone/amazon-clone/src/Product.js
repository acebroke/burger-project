import React from 'react'
import './Product.css'
function Product({title,img,price,rating}) {

    let ratingStar = '⭐';
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                <strong>{price}</strong>
                <small>€</small>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>{
                        return (
                            <p>{ratingStar}</p>
                        )
                    })
                    }
                </div>
            </div>
            <img src={img} alt=""/>
            <button>Ajouter au panier</button>
        </div>
    )
}

export default Product
