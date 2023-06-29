import React, { useEffect, useState } from 'react'
import { Product } from '../productList/ProductList';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router';
import { warn } from 'console';
import css from './EditProduct.module.scss'
import { Footer } from '../../components/Footer/Footer';
import { NavLinks } from '../../components/NavBar/NavLinks';
export const EditProduct = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [inPage, setInPage] = useState('')
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [orginal_price, setOrginal_price] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [updateUI, setUpdateUI] = useState(true)
    const { id } = useParams();

    const updateProduct = () => {
        console.warn(name, brand, category, orginal_price, price, price, image)
    }

    useEffect(() => {
        getProductDetails(id);
    }, [])

    const getProductDetails = async (id: any) => {
        console.warn("id:", id)
        /* let result = await fetch(`http://localhost:3001/api/products/${params._id}`);
            
        
        result = await result.json();
        console.warn(result)
 */
    }


    /* const saveProduct = async () => {
        await axios.put(`http://localhost:3001/api/products/${id}`, {
            data: {
                name,brand,category,orginal_price,price,image
            }
        }).then(res => {
            console.log(res);
            setUpdateUI((prevState: any) => !prevState)
            setProducts([...products])
        });
    } 

    const onClickEdit = (product: any) => {
        console.log(product)
        setName(product.name)
        setBrand(product.brand)
        setCategory(product.category)
        setOrginal_price(product.orginal_price)
        setPrice(product.price)
        setImage(product.image)
    } */

    return (
        <>
            <NavLinks />
            <div className={css.update}>
                <h1 className={css.title}>
                    Update Product
                </h1>
                <input className={css.input} type="text" value={inPage} onChange={(e) => setInPage(e.currentTarget.value)} placeholder='Show the product on the Home?' /><br />
                <input className={css.input} type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} placeholder='Name' /><br />
                <input className={css.input} type="text" value={brand} onChange={(e) => setBrand(e.currentTarget.value)} placeholder='Brand' /><br />
                <input className={css.input} type="text" value={category} onChange={(e) => setCategory(e.currentTarget.value)} placeholder='Category' /><br />
                <input className={css.input} type="text" value={orginal_price} onChange={(e) => setOrginal_price(e.currentTarget.value)} placeholder='Orginal Price' /><br />
                <input className={css.input} type="text" value={price} onChange={(e) => setPrice(e.currentTarget.value)} placeholder='Price' /><br />
                <input className={css.input} type="text" value={image} onChange={(e) => setImage(e.currentTarget.value)} placeholder='image' /><br />
                <button type='submit' className={css.button}>
                    Update Product
                </button>
                <ToastContainer />
                <Footer />
            </div>
        </>
    )
}
