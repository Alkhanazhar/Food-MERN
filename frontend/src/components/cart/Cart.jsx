import React,{useContext} from 'react';
import styles from './Cart.module.css';
import CartContext from '../../store/context';

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <ul className={styles.cart}>
      <li>My Cart</li>
      {cart.map((item,idx) => {
            return <li key={idx}>
                  <p className={styles['item-name']}>{ item.name} <span className={styles['item-qty']}>x { item.qty}</span></p>
                  <p className={styles['item-desc']}>{ item.desc}</p>
                  <p className={styles['item-price']}>$ {item.price}</p>
                <button>-</button>
                <button>+</button>
                <button className={styles['remove-btn']}>remove</button>
              </li>
          })
      }
    <li >Total:  <span className={styles['place-order-btn']}><button>Place Order</button></span> </li>
</ul>
  )
}

export default Cart