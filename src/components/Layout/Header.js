import logo from "./../../assets/logoFood.jpeg";
import React from 'react'
import styles from "./Header.module.css"
import HeaderCartBtn from "./HeaderCartBtn";

const Header = ({onShowCart}) => {
  return (
    <React.Fragment>
        <header className={styles.header}>
            <h2>Кухня Лосося</h2>
            <HeaderCartBtn onClick={onShowCart}/>
        </header>
        <div className={styles.logo}>
            <img src={logo} alt="Хто його знає"></img>
        </div>
    </React.Fragment>  
    )
}

export default Header