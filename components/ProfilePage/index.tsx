import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react'
import { UserApi } from '../../api/UserApi';
import { StoreContext } from '../../store/GlobalState';
import { Button } from '../Button';
import { EmailInput } from '../EmailInput';
import { PaymentDialog } from '../PaymentDialog';

import styles from './ProfilePage.module.scss';
import { Table } from './Table';

// ОБЯЗАТЕЛЬНО РЕАЛИЗОВАТЬ ПРОВЕРКУ EMAIL ЧЕРЕЗ ПОШТУ

export const ProfilePage = ({ user, orders }) => {

  const [openPayment, setOpenPayment] = useState(false);
  const { state } = useContext(StoreContext)
  return (
    <div className="container">
      <div className={styles.profile}>
        <div className={styles.profile__image}
          style={{ background: `url(${user.image || '/static/profile_img.png'})`, backgroundSize: "cover", backgroundPosition: "center center" }}
        />
        <div className={styles.profile__data}>
          <span className={styles.profile__id}>id <span>{user.id}</span></span>
          <span className={styles.profile__name}>{user.username}</span>
          <ul className={styles.profile__list}>
            <li>Покупок <span>{orders.length} шт.</span></li>
            <li>Куплено на суму: <span>{user.wastedBalance} рублей</span></li>
          </ul>
          <EmailInput email={user.email} />
        </div>
        <div className={styles.profile__balance}>
          <h3>{state.auth?.balance ? state.auth.balance : user.balance} ₽</h3>
          {openPayment && <PaymentDialog openDialog={openPayment} setOpenDialog={setOpenPayment} />}
          <Button type="filled" className={styles.button} clickHandler={() => setOpenPayment(true)}>Пополнить баланс</Button>
        </div>
      </div>
      <div className={styles.content}>
        {orders.length === 0 ? <h1 className={styles.content__titleEmpty}>У вас ещё нет покупок</h1> : <Table orders={orders} />}

      </div>
    </div >
  )
}

