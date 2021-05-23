import clsx from 'clsx';
import React, { FC } from 'react'

import styles from './Case.module.scss';

interface CaseProps {
  // title: string;
  // className?: string;
}

export const Case: FC<CaseProps> = ({ }) => {
  return (
    <div className={styles.case}>
      <div className={styles.case__imageWrap}>
        <img src="./images/cases/case-1.png" alt="" />
      </div>
      <div className={styles.case__delim}></div>
      <h3>Бесплатный ключ</h3>
      <b className={styles.case__price}>0₽</b>
    </div>
  )
}
