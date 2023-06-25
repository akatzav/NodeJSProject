import React, { useEffect, useState } from 'react'
import { List } from '../../components/list/List';
import axios from 'axios';
import data from '../../data/products';
import { Product } from '../productList/ProductList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddProduct = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [orginal_price, setOrginal_price] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [updateUI, setUpdateUI] = useState(true)


    const showToastMessage = () => {
        toast.success('Success Added !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    useEffect(() => {
        axios.get("http://localhost:3001/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data)
            })
    }, [])


    const addProduct = (e: any) => {
        e.preventDefault();

        const newProduct = {
            name,
            brand,
            category,
            orginal_price,
            price,
            image
        }

        fetch('http://localhost:3001/api/products/add', {
            method: 'POST',//or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
            
        }).then(res => res.json())
            .then(json => {
                // after server response
                console.log('json', json);

                showToastMessage();
                setProducts([...products, json])

            }).catch(e => console.log(e));

        //code?
    }


    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} placeholder='Name' /><br />
            <input type="text" value={brand} onChange={(e) => setBrand(e.currentTarget.value)} placeholder='Brand' /><br />
            <input type="text" value={category} onChange={(e) => setCategory(e.currentTarget.value)} placeholder='Category' /><br />
            <input type="text" value={orginal_price} onChange={(e) => setOrginal_price(e.currentTarget.value)} placeholder='Orginal Price' /><br />
            <input type="text" value={price} onChange={(e) => setPrice(e.currentTarget.value)} placeholder='Price' /><br />
            <input type="text" value={image} onChange={(e) => setImage(e.currentTarget.value)} placeholder='image' /><br />
            <button type='submit' onClick={addProduct} >
                Add Product
            </button>
            <ToastContainer />

            <ul>
                {products.map(p => (
                    <List key={p._id} id={p._id} product={p.name} setUpdateUI={setUpdateUI}/>
                )
                )}
            </ul>
        </div>
    )
}
