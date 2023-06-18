import React, { useEffect, useState } from 'react'
import data from '../../data/products'
import css from './ProductList.module.scss'
import { Footer } from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { CallToActionSection } from '../../components/HomePage/CalltoActionSection/CallToActionSection'
import axios from 'axios'
import { Search } from '../../components/search/Search'
import { BiSearchAlt } from 'react-icons/bi'

const url = 'http://localhost:3001/api/products';

async function loadProducts() {
    const httpResponse = await fetch(url)
    const products: any[] = await httpResponse.json()
    console.log(products)
    return products;
}

interface Product {
    _id: string;
    name: string;
    category: string;
    brand: string;
    orginal_price: string;
    price: string;
    image: string;
}

export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [search, setSearch] = useState('')
    console.log(search);


    useEffect(() => {
        loadProducts().then(products => {
            setProducts(products);
        })
    }, []) // run after first render (mount)


    return (
        <>
            <div className={css.productList}>
                <NavBar />

                <div className={css.search}>
                    <input type="text" onChange={(e) => setSearch(e.currentTarget.value)} placeholder=' &#xf002; Search' className={css.input}/>
                </div>

                <div className={css.page}>
                    {products.filter((product) => {
                        return search.toLowerCase() === '' ? product : product.name.toLocaleLowerCase().includes(search)
                    }).map(p => {
                        return (
                            <div className={css.product} key={p._id}>
                                <img src={p.image} alt={p.name} className={css.image} />
                                <div className={css.cardBody}>
                                    <h5 className={css.title}>{p.name}</h5>
                                    <p className={css.p}>
                                        <a className={css.brand}> {p.brand}</a> <br />
                                        <a className={css.orginal}>{p.orginal_price}</a><br />
                                        <a className={css.price}>{p.price}</a>
                                    </p>
                                </div>

                            </div>
                        )
                    })}
                </div>
                {/* <CallToActionSection /> */}
                <Footer />
            </div>
        </>
    )
}
