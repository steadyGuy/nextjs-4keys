import React, { Component } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext';
import { ItemType } from '../../helpers';
import { Item } from '../Item';

import styles from './ItemLine.module.scss'

export default class ItemLine extends Component {
  static contextType = SettingsContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  // static getDerivedStateFromProps(props, state) {
  //   // return {
  //   //   slider: getSlider(),
  //   // };
  // }

  render() {
    return (
      // slider={this.state.slider} time={this.context.caseOpeningTime
      <div className={styles.slider}>
        {this.props.items.map((value, index) => {
          if (value.type === ItemType.GOLD) {
            return (
              <Item
                key={index}
                type={this.props.ItemType.GOLD}
                image={"/images/specialitem1.png"}
                weapon={"★ Rare Special Item ★"}
              />
            );
          } else {
            return (
              <Item
                key={index}
                type={value.type}
                image={value.image}
                showSkinTitle
                weapon={value.weapon}
                skin={value.skin}
              />
            );
          }
        })}
      </div>
    );
  }
}