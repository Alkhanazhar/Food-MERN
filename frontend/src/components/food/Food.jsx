import React, { useContext } from 'react'
import styles from './Food.module.css';
import CartContext from '../../store/context';

const Food = (props) => {
    const {cart,addToCart} = useContext(CartContext)
    const addToCartHandler=() => {
        addToCart({foodId:props._id,name:props.name, quantity:1, price:props.price,desc:props.desc})
    
    }
    
    return (
        <li className={styles.food}>
        <img src={props.img} className={styles.img} />
            <div>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.desc}>{props.desc}</p>
                <p className={styles.price}>${ props.price}</p>
            </div>
            <div>
                <label>Amount</label>
                <input
                    type="number"
                    min="1"
                    defaultValue={1} />
                <button className={styles.addBtn} onClick={addToCartHandler}>+ Add</button>
            </div>
        </li>
    )
}

export default Food