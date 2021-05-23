import React from "react";
import styles from "./CaseOpeningConfirmation.module.scss";
import { Item } from "../Item";
// import { GreenButton } from "../GreenButton/GreenButton";
import { ItemType } from "../../helpers";
import { getRandomType } from "../CaseOpeningSection/RandomCaseItem";
import { getItemFromCaseByType, IGameItem } from "../CaseOpeningSection/RandomItem";

import { Cases } from "../../public/cases.js";
import { Knives } from "../../public/knives.js";
import { Button } from '../Button';

export const CaseOpeningConfirmation = ({ onSubmit }) => {

  const getRandomItem = () => {
    const type = getRandomType();
    const item = getItemFromCaseByType(Cases[0].items, Knives[1].items, type);
    return item;
  };

  const handleOnSubmit = () => {
    onSubmit();
  }

  return (
    <div className={styles.caseOpeningConfirmation}>
      <div className={styles.itemsWrap}>
        {new Array(5).fill(1).map((v, i) => {
          let item = getRandomItem();
          return (<Item key={Math.random() + i} type={item.type} image={item.image} weapon={item.title} />)
        })}
      </div>
      <Button
        width="212px"
        height="53px"
        clickHandler={handleOnSubmit}
        className="m-auto mt-25"
      >
        Открыть 49.99₽
        </Button>
    </div>
  );
};