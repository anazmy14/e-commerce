import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Product from './Product'
import styles from './style.module.css'
const ProductsList = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const filter = useSelector(state => state.filter)
    useEffect(
        () => fetchProducts(), [])

    useEffect(() =>{
         //setSelectedProducts( allProducts.filter(product => product.categoryId === filter.categoryId))
         console.log(filter)
         setSelectedProducts( allProducts.filter(filterProducts))
        }
        , [filter])

    async function fetchProducts() {
        try {
            const result = await axios.get('http://test-api.edfa3ly.io/product')
            setAllProducts(result.data)
            setSelectedProducts(result.data)
        } catch (error) {
            //handle error 
            console.log(error);
        }
    }
    function filterProducts(product){
        if(filter.categoryId &&  product.categoryId != filter.categoryId )
           return false
        if(filter.min && product.price < filter.min)
           return false      
        if(filter.max && product.price > filter.max)
           return false   
        if(filter.rating && product.rating < filter.rating)
           return false   
        if(filter.colors.size && !filter.colors.has(product.color))   
           return false              
        return true   
    } 
    return (
        <div className={styles[['product-list']]}>
            { filter.categoryId && selectedProducts.map(product => <Product key={product.id} {...product} />)}
        </div>
    )
}
export default ProductsList