import React from 'react'
import starIcon from '../../assets/star.svg'
import styles from './style.module.css'
const Product = ({ image, name, price, color, rating }) => {
    
    return (
        <div className={`card ${styles.product} `}>
            <img className='card-img-top' src={image} />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">  {color} </p>
                <p className="card-text"> ${price} </p>
                { [...Array(rating)].map( _ => <img src={starIcon} width={20}/>)}
            </div>

        </div>
    )
}
export default Product