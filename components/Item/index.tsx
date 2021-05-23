import React, { Component, useEffect, useState } from "react";
import styles from "./Item.module.scss";
import { ItemType } from "../../helpers";
import clsx from "clsx";

interface ItemProps {
  type: string;
}

export const Item = ({ type, inventoryStyles, weapon, showSkinTitle, skin, image }) => {
  const [gunCardBorderName, setGunCardBorderName] = useState(null);
  const [modalInfoVisible, setModalInfoVisible] = useState(false);
  const [withModalInfo, setWithModalInfo] = useState(false);

  useEffect(() => {
    switch (type) {
      case ItemType.GREY:
        setGunCardBorderName(styles.item_consumerGrade);
        break;
      case ItemType.LIGHTBLUE:
        setGunCardBorderName(styles.item_baseGrade);
        break;
      case ItemType.BLUE:
        setGunCardBorderName(styles.item_blue);
        break;
      case ItemType.PURPLE:
        setGunCardBorderName(styles.item_purple);
        break;
      case ItemType.PINK:
        setGunCardBorderName(styles.item_pink);
        break;
      case ItemType.RED:
        setGunCardBorderName(styles.item_red);
        break;
      case ItemType.GOLD:
        setGunCardBorderName(inventoryStyles ? styles.item_red : styles.item_special);
        break;

      default:
        setGunCardBorderName(styles.item_consumerGrade);
        break;
    }
  }, [])

  return (
    <div
      onMouseOver={() => setModalInfoVisible(true)}
      onMouseLeave={() => setModalInfoVisible(false)}
      className={clsx(styles.item, inventoryStyles, styles.item_inInventory)}
      style={{ background: "url(./static/items/example.png)", backgroundSize: "cover" }}
    >
      {modalInfoVisible && withModalInfo && (
        <div className={styles.modalInfo}>
          <span className={styles.modalInfo__title}>
            {weapon}{" "}
            {showSkinTitle && (
              <span className={styles.skintitle}>{skin}</span>
            )}
          </span>
          <hr className={styles.modalInfo__line} />
        </div>
      )}

      {/* <div className={styles.imageWrap}>
        <img
          src={image}
          className={`${styles.img} ${inventoryStyles && styles.img_inInventory
            }`}
          alt=''
        />
      </div> */}

      {/* <div className={`${styles.bottom} ${gunCardBorderName}`}>
        <span className={styles.itemTitle}>
          {weapon}
        </span>
        {showSkinTitle && (
          <span className={styles.skintitle}>{skin}</span>
        )}
      </div> */}
    </div>
  );
}
