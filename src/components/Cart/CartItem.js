import React from 'react'
import styles from "./CartItem.module.css"

const CartItem = ({name, price, amount, onIncrement, onDecrement}) => {
    
    const fixedPrice = `${parseFloat(price).toFixed(2)} UAH`
  return (
    <li className={styles["cart-item"]}>
        <div>
            <h2>{name}</h2>
            <div className={styles.summary}>
                <span className={styles.price}>{fixedPrice}</span>
                <span className={styles.amount}>x {amount}</span>
            </div>
        </div>
        <div className={styles.actions}>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    </li>
  )
}

export default CartItem