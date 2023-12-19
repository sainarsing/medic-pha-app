import React from 'react';
import Closednav from '../../Navbar/closednav';
import image from "../Assets/Images/myriam-zilles-KltoLK6Mk-g-unsplash.jpg";
import styles from "./PastOrderPage.module.css";

function Pastorders() {
  let productHistory = JSON.parse(sessionStorage.getItem("orders")) || [];

  return (
    <div className={styles.container}>
      <Closednav />
      {productHistory.map((card) => (
        <div className={styles.card} key={card.id}>
          <h3>{card.id}</h3>
          <div>
            {card.products.map((val, index) => (
              <div key={index}>
                <p>Name: {val.name}</p>
                <p>Brand: {val.brand}</p>
                <img src={image} width={100} height={120} alt="product" />
                <p>Quantity: {val.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pastorders;

