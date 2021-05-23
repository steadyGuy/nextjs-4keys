import React, { Component, FC, useContext, useState } from "react";
// import { GreenButton } from "../GreenButton/GreenButton";
import styles from "./ReceivedItemModal.module.scss";
import { SettingsContext } from "../../contexts/SettingsContext";
import { ItemType } from "../../helpers/";
import { IGameItem } from '../CaseOpeningSection/RandomItem';
import { Dialog } from '../Dialog';
import { Button } from '../Button';

interface ReceivedItemModalProps {
  item: IGameItem;
  onTryAgainBtnClick: () => void;
  onSubmit: () => void;
  isModalOpen: boolean;
}

export const ReceivedItemModal: FC<ReceivedItemModalProps> = ({ item, onTryAgainBtnClick, onSubmit, isModalOpen }) => {
  const { volume, caseOpeningTime } = useContext(SettingsContext);

  const tryAgainClose = () => {
    onTryAgainBtnClick();
  };

  const demoOffClose = () => {
    onSubmit();
  };

  // this.caseOpeningAudioBaseDrop = React.createRef();
  // this.caseOpeningAudioBlueDrop = React.createRef();
  // this.caseOpeningAudioPurpleDrop = React.createRef();
  // this.caseOpeningAudioPinkDrop = React.createRef();
  // this.caseOpeningAudioRedDrop = React.createRef();

  // switch (this.props.type) {
  //   case ItemType.GREY:
  //     this.state = {
  //       receivedItemModalBgClass: styles.receivedItemModal_consumerGrade,
  //     };

  //     break;
  //   case ItemType.LIGHTBLUE:
  //     this.state = {
  //       receivedItemModalBgClass: styles.receivedItemModal_lightBlue,
  //     };

  //     break;
  //   case ItemType.BLUE:
  //     this.state = {
  //       receivedItemModalBgClass: styles.receivedItemModal_blue,
  //     };

  //     break;
  //   case ItemType.PURPLE:
  //     this.state = {
  //       receivedItemModalBgClass: styles.receivedItemModal_purple,
  //     };

  //     break;
  //   case ItemType.PINK:
  //     this.state = {
  //       receivedItemModalBgClass: styles.receivedItemModal_pink,
  //     };

  //     break;
  //   case ItemType.RED:
  //     this.state = {
  //       receivedItemModalBgClass: styles.receivedItemModal_red,
  //     };

  //     break;
  //   case ItemType.GOLD:
  //     this.state = {
  //       receivedItemModalBgClass: styles.receivedItemModal_special,
  //     };

  //     break;
  //   case ItemType.GREY | ItemType.LIGHTBLUE:
  //     this.state = {
  //       receivedItemModalBgClass: styles.receivedItemModal_consumerGrade,
  //     };

  //   default:
  //     break;
  // }


  // componentDidMount() {
  // this.caseOpeningAudioBaseDrop.current.volume = this.context.volume;
  // this.caseOpeningAudioBlueDrop.current.volume = this.context.volume;
  // this.caseOpeningAudioPurpleDrop.current.volume = this.context.volume;
  // this.caseOpeningAudioPinkDrop.current.volume = this.context.volume;
  // this.caseOpeningAudioRedDrop.current.volume = this.context.volume;

  // switch (this.props.type) {
  //   case ItemType.GREY:
  //   case ItemType.LIGHTBLUE:
  //     this.caseOpeningAudioBaseDrop.current.play();
  //     break;
  //   case ItemType.BLUE:
  //     this.caseOpeningAudioBlueDrop.current.play();
  //     break;
  //   case ItemType.PURPLE:
  //     this.caseOpeningAudioPurpleDrop.current.play();
  //     break;
  //   case ItemType.PINK:
  //     this.caseOpeningAudioPinkDrop.current.play();
  //     break;
  //   case ItemType.RED:
  //     this.caseOpeningAudioRedDrop.current.play();
  //     break;
  //   case ItemType.GOLD:
  //     this.caseOpeningAudioRedDrop.current.play();
  //     break;

  //   default:
  //     break;
  // }
  // }

  return (
    <div>
      {isModalOpen && (
        <Dialog
          id='modal'
          isOpen={isModalOpen}
          onClose={tryAgainClose}
          title={"Поздравляем! Ваш выигрыш"}
        >
          <div className={styles.data}>
            <h4 className={styles.data__title}>{item.title}</h4>
            <div className={`${styles.data__image}`}>
              <img src={item.image} alt='Полученая игра' />
            </div>
            <h4 className={styles.data__key}>Ваш ключ: <span>{item.key}</span></h4>
            <Button type="filled" className={styles.data__btn} clickHandler={tryAgainClose}>Продолжить</Button>
            <span className={styles.data__delim}>или</span>
            <span className={styles.data__demoOff} onClick={demoOffClose}>отключить DEMO-режим</span>
          </div>

        </Dialog>
      )}
    </div>
    // <div
    //   className={`${styles.receivedItemModal} ${this.state.receivedItemModalBgClass}`}
    // >
    //   {/* <audio ref={this.caseOpeningAudioBaseDrop}>
    //       <source src='/sound/drop1.mp3' type='audio/mp3' />
    //     </audio>
    //     <audio ref={this.caseOpeningAudioBlueDrop}>
    //       <source src='/sound/drop2.mp3' type='audio/mp3' />
    //     </audio>
    //     <audio ref={this.caseOpeningAudioPurpleDrop}>
    //       <source src='/sound/drop3.mp3' type='audio/mp3' />
    //     </audio>
    //     <audio ref={this.caseOpeningAudioPinkDrop}>
    //       <source src='/sound/drop4.mp3' type='audio/mp3' />
    //     </audio>
    //     <audio ref={this.caseOpeningAudioRedDrop}>
    //       <source src='/sound/drop5.mp3' type='audio/mp3' />
    //     </audio> */}
    //   <h1 className={styles.itemTitle}>
    //     {item.title}
    //   </h1>
    //   <div className={`${styles.imageWrap}`}>
    //     <img src={item.image} alt='' />
    //   </div>
    //   <div className={styles.bottomWrap}>
    //     <span>You got a new item!</span>
    //     <div className={styles.btnRowWrap}>
    //       <button >Continue</button>
    //       {/* <GreenButton
    //           onClick={() => {
    //             this.props.onSubmit();
    //           }}
    //           text='Continue'
    //         /> */}
    //       {/* <GreenButton
    //           onClick={() => {
    //             this.props.onTryAgainBtnClick();
    //           }}
    //           text='Try again'
    //         /> */}
    //       <button onClick={() => {
    //         this.props.onTryAgainBtnClick();
    //       }}>Try Again</button>
    //     </div>
    //   </div>
    // </div>
  );
}
