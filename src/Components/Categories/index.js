import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Category from './Category';
import { CATEGORIES_API } from '../../constants/api';
import styles from './styles.module.css'

const CategoryList = () => {
    const [categories, setCategories] = useState([]); 
    useEffect( 
         () => fetchCategories()
    ,[])

    async function fetchCategories () {
        try {
            const result = await axios.get(CATEGORIES_API)
            setCategories(result.data) 
        }catch(error) {
            //handle error 
            console.log(error);
        }
    }
    
    return(
        <div className={styles[['categories-list']]}>
         {categories.map( category => <Category key={category.id} {...category}  /> )}
        </div>
    )    
} 
export default CategoryList
