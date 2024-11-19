import React, {useContext} from "react";
import styles from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";
import CartContext from "../../../store/cart-context";

const FoodItem = ({ name, description, price, id, amount }) => {
    const cartCtx = useContext(CartContext)

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: id,
            name: name,
            price: price,
            amount: amount
        })
    }

  return (
    <li className={styles.food}>
      <div className={styles["food-content"]}>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`${price} ₴`}</div>
      </div>
      <FoodItemForm onAddToCart={addToCartHandler}/>
    </li>
  );
};

export default FoodItem;
