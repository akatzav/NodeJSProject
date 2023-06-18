import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'

export const CreateProduct = () => {


    const url ='http://localhost:3001/api/products';

    useEffect(()=>{
        
    })

    const [name,setName]=useState('');
    const [category, setCategorty] = useState('');
    const [brand, setBrand] = useState(''); 
    const [orginal_price, setOrginal_price] = useState('');
    const [price, setPrice] = useState(''); 
    const [image, setImage] = useState(''); 

    const handleName=(e:any)=>{
        setName(e.currentTarget.value)
    }

    const handleCategory = (e: any) => {
        setCategorty(e.currentTarget.value)
    }
    
    const handleBrand = (e: any) => {
        setBrand(e.currentTarget.value)
    }
    
    const handleOrginal = (e: any) => {
        setOrginal_price(e.currentTarget.value)
    }
    
    const handlePrice = (e: any) => {
        setPrice(e.currentTarget.value)
    }
    
    const handleImage = (e: any) => {
        setImage(e.currentTarget.value)
    }


    return (
        
        <div> 
            <form action="">
                <input type="text" placeholder='Name' onChange={handleName}/>
                <input type="text" placeholder='Category' onChange={handleCategory} />
                <input type="text" placeholder='Brand' onChange={handleBrand} />
                <input type="text" placeholder='Orginal price' onChange={handleOrginal} />
                <input type="text" placeholder='price' onChange={handlePrice}/>
                <input type="text" placeholder='Image' onChange={handleImage}/>

            <input type="submit" value='Create Product'/>
            </form>
        </div>
    )
}
