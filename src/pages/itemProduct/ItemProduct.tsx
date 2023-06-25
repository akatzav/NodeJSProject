import React, { useEffect, useState } from 'react'
import css from './ItemProduct.module.scss'
import { Product, ProductList } from '../productList/ProductList'
import logo from '../../logo.svg'
import { useParams } from 'react-router-dom'




export const ItemProduct = (prop: any) => {

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const url = `http://localhost:3001/api/products/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setProduct(json))
            .then(json => setLoading(false))
        console.log(prop);

    }, [])  // run after first render (mount)

    console.log('product', product)
    console.log('id', id)



    return (
        <>
            {product?.name ?? ''}
        </>
    )
}

