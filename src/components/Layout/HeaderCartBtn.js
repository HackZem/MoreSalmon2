import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartBtn.module.css";

const HeaderCartBtn = ({onClick}) => {

    const [isBump, setIsBump] = useState(false);

    const cartCtx = useContext(CartContext)

    const cartItemsNum = cartCtx.items.reduce((currentNum, item) => {
        return currentNum + +item.amount
    } ,0)

    const headerCartBtnStyles = `${styles.btn} ${isBump ? styles.bump : ""}`

    useEffect(() => {
        if(cartCtx.items.length === 0){
            return
        }
        setIsBump(true)
        const timer = setTimeout(() => setIsBump(false), 300)
        return () => {
            clearTimeout(timer)
        };
    }, [cartCtx.items]);


  return (
    <button className={headerCartBtnStyles} onClick={onClick}>
      <div className={styles["btn-content"]}>
        <span className={styles["btn-icon"]}>
          <CartIcon />
        </span>
        <span className={styles["btn-text"]}>Корзина</span>
      </div>

      <span className={styles["btn-badge"]}>{cartItemsNum}</span>
    </button>
  ); 
};

export default HeaderCartBtn;
