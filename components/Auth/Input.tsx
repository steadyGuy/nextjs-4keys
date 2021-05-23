import React, { FC } from 'react'

import styles from './Auth.module.scss';

interface IInput {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
  name: string;
  id: string;
  autoFocus?: boolean
}

export const Input: FC<IInput> = ({ label, onChange, type = 'text', placeholder, name, id, autoFocus }) => {
  return (
    <div className={styles.register__item}>
      <label htmlFor={id}>{label}</label>
      <input autoFocus={autoFocus} required onChange={onChange} type={type} placeholder={placeholder} name={name} id={id} />
    </div>
  )
}
