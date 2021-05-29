import React, { useContext, useState } from 'react'
import { PaymentApi } from '../../api/PaymentApi';
import { UPDATE_BALANCE } from '../../store/actions';
import { StoreContext } from '../../store/GlobalState';
import { Button } from '../Button'
import { Dialog } from '../Dialog'

import styles from './PaymentDialog.module.scss';

export const PaymentDialog = ({ openDialog, setOpenDialog }) => {

  const [message, setMessage] = useState<string[]>(['']);
  const { dispatch } = useContext(StoreContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { message, balance } = await PaymentApi().popup(+e.target.sum.value);
    if (balance) {
      dispatch({ type: UPDATE_BALANCE, payload: balance });
      setTimeout(() => {
        setOpenDialog(false);
      }, 4000);
    }
    setMessage(message);
    e.target.sum.value = '';
  }

  return (
    <Dialog
      id='modal_dialog'
      isOpen={openDialog}
      onClose={() => setOpenDialog(false)}
      title={'Пополнения баланса'}
    >
      <div className={styles.dialog}>
        <p>
          Для того, чтобы была реальная возможность пополнить баланс, не тратя реальные деньги, было решено сделать Пополнения
          счета демонстративным
      </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.dialog__item}>
            <label htmlFor="payment-popup">{ }</label>
            <input autoFocus required type="text" placeholder="Введите суму (руб)" name="sum" id="payment-popup" />
          </div>

          <Button
            typeSend="submit"
            type="filled">
            Оплатить
        </Button>

          <b className={styles.dialog__error}>
            {typeof message === "string" ? message : (message.map((item, i) => <p key={Math.random() + i}>{item}</p>))}
          </b>

        </form>
      </div>
    </Dialog>
  )
}
