import React from "react";
import Card from "../UI/Card";
import FoodItem from "./FoodItem/FoodItem";
import styles from "./FoodList.module.css";

const foods = [
  {
    id: "f1",
    name: "Ролл Наоми",
    description: "Рис, помидор, огурець, сир фінлянський",
    price: "187.99",
    amount: "1"
  },
  {
    id: "f2",
    name: "Макарони \' Лосось в тарелке \'",
    description: "Макарони, лосось, соус сабака, tabasko, кетчуп",
    price: "87.39",
    amount: "1",
  },
  {
    id: "f3",
    name: "Креветки в словочно-чесночном соусе",
    description: "Креветки, сливки, лук репчатий, чеснок, масло растительное, перец чорний, петрушка",
    price: "492.99", 
    amount: "1",
  },
  {
    id: "f4",
    name: "Хачапури со шпинатом",
    description: "Тесто, микс грузинських сиров, шпинат, специи",
    price: "155", 
    amount: "1",
  },
  {
    id: "f5",
    name: "Спагетти карбонара",
    description: "Спагетти, бекон, сливки, соус соевий, сир пармезан, чеснок, яичний желток, куриний бульон",
    price: "186.25", 
    amount: "1",
  },
  {
    id: "f6",
    name: "Тартар из лосося",
    description: "Лосось, огурець, авокадо, красний лук, оливковое масло, соус конжутний, гуакамоле, сирние сухарі, рукола",
    price: "275", 
    amount: "1",
  },
  {
    id: "f7",
    name: "Куринний бульйон з домашней лапшой",
    description: "Куринний бульйон, лапша яичная, бедро куринное, яйцо перепелиное, петрушка",
    price: "95", 
    amount: "1",
  },
  {
    id: "f8",
    name: "Шефа",
    description: "Лосось",
    price: "8275.99", 
    amount: "1",
  },
  {
    id: "f9",
    name: "Пирог-по-Словянськи",
    description: "момоимовітмвомтвомт",
    price: "5463", 
    amount: "10",
  },
  
];

const FoodList = () => {
  return (
    <section className={styles["food-list"]}>
      <Card>
        <ul>
          {foods.map((item) => (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default FoodList;
