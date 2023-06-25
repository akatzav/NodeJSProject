import React, { useEffect, useState } from 'react'
import data from '../../data/products'
import css from './ProductList.module.scss'
import { Footer } from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { CallToActionSection } from '../../components/HomePage/CalltoActionSection/CallToActionSection'
import axios from 'axios'
import { Search } from '../../components/search/Search'
import { BiSearchAlt } from 'react-icons/bi'
import { Link, useNavigate, useParams } from 'react-router-dom'

const url = 'http://localhost:3001/api/products';

async function loadProducts() {
    const httpResponse = await fetch(url)
    const products: any[] = await httpResponse.json()
    console.log(products)
    return products;
}

export interface Product {
    _id: string;
    name: string;
    category: string;
    brand: string;
    orginal_price: string;
    price: string;
    image: string;
}

export const ProductList = ({ user }: any) => {
    const [products, setProducts] = useState<Product[]>([])
    const [search, setSearch] = useState('');
    const [card, setCard] = useState([]);
    const [status,setStatus]=useState('')
    const [updateUI, setUpdateUI] = useState(true)
    const { id } = useParams();
    console.log('id' ,id);
    
    console.log(search);

    const navigate = useNavigate();


    const handleClick = (item: any) => {
        console.log(item._id);

    }


    useEffect(() => {
        loadProducts().then(products => {
            setProducts(products);
        })
    }, []) // run after first render (mount)

    //if(user.isAdmin)

    const removeProduct = async ({ _id, product, setUpdateUI, IupdateMode }: any) => {
        await axios.delete(`http://localhost:3001/api/products/${_id}`).then(res => {
            console.log(res);
            setUpdateUI((prevState: any) => !prevState)
            setProducts([...products])
        })
    }

    return (
        <>
            <div className={css.productList}>
                <NavBar />

                <div className={css.search}>
                    <input type="text" onChange={(e) => setSearch(e.currentTarget.value)} placeholder=' &#xf002; Search' className={css.input} />
                </div>

                <div className={css.page}>
                    {products.filter((product) => {
                        return search.toLowerCase() === '' ? product : product.name.toLocaleLowerCase().includes(search)
                    }).map(p => {

                        return (
                            <div className={css.product} data-aos='zoom-in' key={p._id}>
                                <img src={p.image} alt={p.name} className={css.image} />
                                <div className={css.cardBody}>
                                    <Link to={`${p._id}`}>
                                        <h5 className={css.title}>{p.name}</h5>
                                        <p className={css.p}>
                                            <span className={css.brand}> {p.brand}</span> <br />
                                            <span className={css.orginal}>{p.orginal_price}</span><br />
                                            <span className={css.price}>{p.price}</span>
                                        </p>
                                    </Link>
                                </div>
                                <button className={css.add} onClick={handleClick}>Add To Card</button>
                                {!!user?.isAdmin && (<button onClick={removeProduct}>delete</button>)} 

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
