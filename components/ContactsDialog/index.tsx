import React from 'react'
import { Button } from '../Button';
import { Dialog } from '../Dialog';

import styles from './ContactsDialog.module.scss';

export const ContactsDialog = ({ openDialog, setOpenDialog }) => {

  const handleOnOpenDialog = () => {
    setOpenDialog(false);
  }

  return (openDialog &&
    <Dialog
      id='modal_about'
      isOpen={openDialog}
      onClose={handleOnOpenDialog}
      title={'Контактная информация'}
      modalClass={styles.dialog}
    >
      <div className={styles.dialog__content}>
        <h3>E-mail адрес 4keys:</h3>
        <p className={styles.dialog__email}>4keys@gmail.com</p>
        <p className={styles.dialog__shortDescription}>
          Если Вы не нашли ответ на свой вопрос в разделе Помощь, мы будем рады ответить Вам ежедневно с 10:00 до 22:00 по МСК.
        </p>
      </div>
    </Dialog>)
}
