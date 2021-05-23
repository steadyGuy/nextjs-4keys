import React, { FC, useContext, useState } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext';
import { containerTypes, Storage } from '../../helpers';
import { getRandomType } from './RandomCaseItem';
import { getItemFromCaseByType, IGameItem } from './RandomItem';
import { Cases } from "../../public/cases.js";
import { Knives } from "../../public/knives.js";
import ItemLine from '../ItemLine';
import { useRouter } from 'next/router';
import { ReceivedItemModal } from '../ReceivedItemModal';
import { CaseOpeningConfirmation } from '../CaseOpeningConfirmation';
import { UnlockingContainerNotification } from '../UnlockingContainerNotification';

import styles from "./CaseOpeningSection.module.scss";
import clsx from 'clsx';
import { Switch } from '../Switch';
import { SectionWrapper } from '../SectionWrapper';

// interface CaseOpeningSectionProps {

// }

export const CaseOpeningSection: FC<any> = ({ specialItems, items, containerType = containerTypes[0], caseImage, caseTitle }) => {
  const router = useRouter();
  const { volume, caseOpeningTime } = useContext(SettingsContext);
  const [lineOfItems, setLine] = useState(null);
  const [receivedItem, setReceivedItem] = useState<IGameItem>(null);
  const [openingInProgress, setOpeningInProgress] = useState(false);
  const [receivedItemModalVisible, setReceivedItemModalVisible] = useState(false);


  const generateItem = () => {
    let item;
    switch (containerType) {
      case containerTypes[0]:
        item = selectRandomItem();
        break;
      // case containerTypes[1]:
      //   item = selectRandomSouvenir();
      //   break;
      default:
        item = selectRandomItem();
        break;
    }
    return item;
  };

  const generateLine = () => {
    let elements = [];
    let actItem = generateItem();
    setReceivedItem(actItem);
    Storage.saveReceivedItem(actItem);
    for (let index = 0; index < 30; index++) {
      if (index === 25) {
        elements.push(actItem);
      } else {
        elements.push(generateItem());
      }
    }
    return <ItemLine items={elements} />;
  };

  const selectRandomItem = () => {
    const type = getRandomType();
    const item = getItemFromCaseByType(items, specialItems, type);
    return item;
  };

  // const selectRandomSouvenir = () => {
  //   let randomItem = new RandomItem();
  //   let randomSouvenir = new RandomSouvenir();
  //   const type = randomSouvenir.getRandomSouvenirTypeByItems(props.items);
  //   const item = randomItem.getSouvenirItemByType(props.items, type);
  //   return item;
  // };

  const openCase = () => {
    setLine(generateLine());
    setOpeningInProgress(true);
    setTimeout(() => {
      setReceivedItemModalVisible(true);
    }, caseOpeningTime + 100);
  };

  const onReceivedItemConfirmation = () => {
    router.push('/');
  };

  const onTryAgainBtnClick = () => {
    setReceivedItemModalVisible(false);
    setOpeningInProgress(false);
  };

  return (
    <>
      <SectionWrapper title="Ваша игра" className={clsx(styles.caseOpeningSection, "container")}>
        {/* {openingInProgress && <CaseOpeningAudio />} */}
        <div className={styles.demo}>
          <b>Demo-режим</b>
          <Switch label="main-switch" className={styles.demo__switch} />
        </div>
        {receivedItemModalVisible && (
          <ReceivedItemModal
            item={receivedItem}
            isModalOpen={receivedItemModalVisible}
            onTryAgainBtnClick={() => onTryAgainBtnClick()}
            onSubmit={() => onReceivedItemConfirmation()}
          />
        )}

        <div className={styles.caseOpeningSection__headWrap}>
          {!openingInProgress && (
            <CaseOpeningConfirmation
              items specialItems type
              onSubmit={() => openCase()}
            />
          )}
          {openingInProgress && (
            <>
              <div className={styles.caseOpenerBg} >
                <hr className={styles.middleLine} />
                <div className={styles.caseOpener}>{lineOfItems}</div>
              </div>
            </>
          )}
        </div>
        {openingInProgress && <UnlockingContainerNotification />}
      </SectionWrapper>
    </>
  )
}
