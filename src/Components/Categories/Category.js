import React from 'react'
import {useDispatch} from 'react-redux'
import setFilterAction from '../../actions/setFilter'
import styles from './styles.module.css'

const Category = ({id, name, image}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch( setFilterAction( {categoryId : id}) )
    }
  
    return(
        <div onClick={handleClick} className={styles.category} style={{backgroundImage: `url(${image})` }} >
            <span> {name}</span>
        </div>
    )    
} 

export default Category
