import React from 'react'
import styles from "./FoodItemForm.module.css"

const FoodItemForm = ({onAddToCart}) => {

    const submitHandler = (event) => {
        event.preventDefault()
        onAddToCart()
    }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
        <button type='submit'>Хочу</button>
    </form>
  )
}

export default FoodItemForm