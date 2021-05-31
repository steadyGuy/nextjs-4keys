import clsx from 'clsx';
import React, { FC, useContext } from 'react'
import { CHOOSE_CASE } from '../../store/actions';
import { StoreContext } from '../../store/GlobalState';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import styles from './Case.module.scss';

interface CaseProps {
  title: string;
  className?: string;
  price: number;
  imgIndex: number;
}

export const Case: FC<CaseProps> = ({ title, price, imgIndex }) => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <a href='#cases_open_section'>
      <div className={styles.case} onClick={() => dispatch({ type: CHOOSE_CASE, payload: { price, id: imgIndex - 1 } })}>
        <div className={styles.case__imageWrap}>
          <img src={`./images/cases/case-${imgIndex}.png`} alt={title} />
        </div>
        <div className={styles.case__delim}></div>
        <h3>{title}</h3>
        <b className={styles.case__price}>{price}₽</b>
      </div>
    </a>
  )
}
