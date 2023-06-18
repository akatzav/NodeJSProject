import React, { useEffect, useState } from 'react'
import css from './ItemProduct.module.scss'


export const itemProduct = () => {

const [products,setProducts]=useState([])

    useEffect(() => {
    fetch('')
    }, [])
    
    return (
        <>
            <div className={css.page}>
                
            </div>
        </>
    )
}
