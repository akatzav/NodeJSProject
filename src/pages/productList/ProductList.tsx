import React from 'react'
import data from '../../data/products'
import css from './ProductList.module.scss'
import { Footer } from '../../components/Footer/Footer'

export const ProductList = () => {
    return (
        <>
            <div dir='rtl'>
                <h1>Featured Products</h1>
                {data.products.map((product)=>(
                    <div className={css.cardProduct}>
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                        <p>{product.brand}</p>
                        <p>{product.price}</p>
                    </div>
                ))}

            </div>
            <Footer />
        </>
    )
}
