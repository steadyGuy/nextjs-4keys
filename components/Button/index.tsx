import React, { FC } from 'react'
import Link from 'next/link'

import styles from "./Button.module.scss";
import clsx from 'clsx';

interface ButtonProps {
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  height?: string;
  className?: string;
  type?: 'filled' | 'bordered';
  handleClick?: () => void;
  typeSend?: "submit" | "button" | "reset";
}

export const Button: FC<ButtonProps> =
  ({ type = 'bordered', children, clickHandler, width, height, className = null, typeSend = "button" }) => {
    return (
      <button
        style={{ width, height }}
        onClick={clickHandler}
        type={typeSend}
        className={clsx(className, styles.button, type === 'filled' && styles['filled'], type === 'bordered' && styles['bordered'])}
      >
        {children}
      </button>
    )
  }
