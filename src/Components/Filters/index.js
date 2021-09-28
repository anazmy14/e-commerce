import React, { useState, useEffect } from 'react'
import {useDispatch } from 'react-redux'
import setFilterAction from '../../actions/setFilter'
import styles from './styles.module.css'
import starIcon from '../../assets/star.svg'
import emptyStarIcon from '../../assets/empty-star.svg'

const Filters = () => {  
    const dispatch = useDispatch()
    const [filter, setFilter] = useState({
       min: 0,
       max:0,
       colors:new Set
    })
    const colors = ['black', 'white', 'cyan', 'silver', 'gold']
    useEffect(() => dispatch(setFilterAction(filter) )
    , [filter])
    const handleMinPriceChange = e => {
        setFilter((prevFilter) => {
            const newValue = Number(e.target.value)
            return {
                ...prevFilter,
                min: newValue,
                max: newValue > prevFilter.max ? newValue : prevFilter.max
            }
        })
    }
    const handleMaxPriceChange = e => {
        setFilter((prevFilter) => {
            const newValue = Number(e.target.value)
            return {
                ...prevFilter,
                max: newValue,
                min: newValue < prevFilter.min ? newValue : prevFilter.min
            }
        })
    }
    const handleColorsChange = e => {
        setFilter((prevFilter) => {
            const newColors = new Set(prevFilter.colors)
            if (filter.colors.has(e.target.value))
                newColors.delete(e.target.value)
            else
                newColors.add(e.target.value)
            return {
                ...prevFilter,
                colors: newColors
            }
        })
    }
    const handleRatinghange = e => {
        e.preventDefault()
        setFilter(prevFilter=>{
            return {
                ...prevFilter,
                rating : Number(e.currentTarget.value)
            }
        })        
    } 

    return (
        <div className={styles[['filters']]}>
            <div className={styles[['filters__price']]}>
                <p>Price range</p>
                <div>
                    <input type='number' min='0' placeholder="From ($)"
                        value={filter.min} onChange={handleMinPriceChange} />
                    <input type='number' max='10000' placeholder="To ($)"
                        value={filter.max} onChange={handleMaxPriceChange} />
                </div>
                <input type='range' max='10000' value={filter.min} onChange={handleMinPriceChange} />
                <input type='range' max='10000' value={filter.max} onChange={handleMaxPriceChange} />
            </div>
            <div className={styles[['filters__colors']]}>
                <p> Colors </p>
                {colors.map(color => <div key={color}>
                    <input type='checkbox' value={color} onChange={handleColorsChange} />
                    {color}
                </div>)}
            </div>

            <div className={styles[['filters__rating']]}>
                <p> Average rating </p>
                {[...Array(5)].map((_,i) => 
                  <button  className= {styles[['filters__rating-btn']]} type="submit" key={i} 
                  onClick={handleRatinghange} value={i+1} >
                    <img src={i < filter.rating? starIcon : emptyStarIcon}/>
                  </button>
               )}
            </div>           
                       

        </div>
    )

}
export default Filters