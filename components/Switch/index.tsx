import clsx from 'clsx';
import React, { FC } from 'react'

import styles from './Switch.module.scss';

// Camel Case Formatter
const toCamelCase = (str) => {
  return str.replace(/^([A-Z])|\s(\w)/g, (match, p1, p2, offset) => {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
};

interface SwitchProps {
  className?: string;
  theme?: 'success' | 'failure';
  label: string;
  noText?: boolean;
  large?: boolean;
}

export const Switch: FC<SwitchProps> = ({ className, theme, label, noText = false, large = false }) => {
  let switchClass = className;
  let id = toCamelCase(label);

  return (
    <div
      aria-label={label}
      className={clsx(switchClass, styles.switch,
        large && styles['switch--large'],
        noText && styles['switch--no-text'],
        theme == 'success' ? styles['switch--success'] : null
      )}
    >
      <label className={styles.switch__label} htmlFor={id}>
        <input role="switch" type="checkbox" className={styles.switch__input} id={id} />
        <span className={styles.switch__text} data-on="ON" data-off="OFF"></span>
        <span className={styles.switch__handle}></span>
      </label>
    </div >
  );
};
