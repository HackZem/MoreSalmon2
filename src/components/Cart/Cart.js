import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import FoodItem from "../Food/FoodItem/FoodItem";

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);

  const incrementHandler = (item) => {
    cartCtx.addItem({ ...item, amount: "1" });
  };
  const decrementHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onDecrement={decrementHandler.bind(null, item.id)}
            onIncrement={incrementHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const recommendedCartItem = (
    <>
        <p className={styles.recommend}>Рекомендуем:</p>
        <ul>
        <FoodItem
            key={"f3"}
            id={"f3"}
            name={"Креветки в словочно-чесночном соусе"}
            description={"Креветки, сливки, лук репчатий, чеснок, масло растительное, перец чорний, петрушка"}
            price={"492.99"}
            amount={"1"}
            />
        </ul>
    </>
  );

  return (
    <Modal onClose={onHideCart}>
      {console.log(cartItems.length)}
      {cartCtx.items.length > 0 ? cartItems : (<p className={styles.text}>Корзина пустая</p>)}
      {cartCtx.items.length <= 0 ? recommendedCartItem : ""}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{parseFloat(cartCtx.totalPrice).toFixed(2)} ₴</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["btn-alt"]} onClick={onHideCart}>
          Закрить
        </button>
        {cartCtx.items.length > 0 ? (
          <button className={styles.btn}>Заказать</button>
        ) : (
          ""
        )}
      </div>
    </Modal>
  );
};

export default Cart;
