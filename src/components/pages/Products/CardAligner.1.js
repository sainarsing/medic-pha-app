import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productcontext } from "../../../App";
import image from "../Assets/Images/myriam-zilles-KltoLK6Mk-g-unsplash.jpg";
import styles from "./Productpage.module.css";

const CardData = ({ productdata }) => {
  const cart = useContext(productcontext);
  const cardsPerRow = 4;

  const rows = [];
  for (let i = 0; i < productdata.length; i += cardsPerRow) {
    const row = productdata.slice(i, i + cardsPerRow);
    rows.push(row);
  }

  const addtohandler = (card) => {
    cart.carthandler(card);
  };

  return (
    <div className={styles.cardContainer}>
      {rows.map((row, rowIndex) => (
        <div className={styles.cardRow} key={rowIndex}>
          {row.map((card) => (
            <div className={styles.cardCol} key={card.id}>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <div>
                    <img
                      src={image}
                      className={styles.cardImage}
                      alt="product"
                    />
                    <button className={styles.cardButton}>
                      View Product
                    </button>
                  </div>
                  <div className={styles.cardDetails}>
                    <h5 className={styles.cardTitle}>{card.name}</h5>
                    <h6 className={styles.cardTitle}>
                      By Brand: {card.brand}
                    </h6>
                    <p className={styles.cardText}>Price: {card.price}.</p>
                    <p className={styles.cardText}>
                      Quantity: {card.net_quantity}.
                    </p>
                    <button className={styles.cardButton}>
                      <Link
                        to={"/cart"}
                        className={styles.link}
                        onClick={() => addtohandler(card)}
                      >
                        Add to Cart
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardData;
