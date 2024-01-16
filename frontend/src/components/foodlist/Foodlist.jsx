import React from 'react'
import Food from '../food/Food'
import styles from './FoodList.module.css';

const Foodlist = ({foods}) => {
 
  return (<ul className={styles.foodList}>
   {foods.map(((food)=>{
    return <Food  key={food._id} img={food.img} name={food.name} desc={food.desc} price={food.price}/>
   }))}
  </ul>
  )
}

export default Foodlist
