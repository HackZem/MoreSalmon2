import React from "react";
import styles from "./Input.module.css";

const Input = ({label, input}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input}></input>
    </div>
  );
};

export default Input;
