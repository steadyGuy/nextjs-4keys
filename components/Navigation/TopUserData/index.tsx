import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import { LOGOUT } from '../../../store/actions';
import { StoreContext } from '../../../store/GlobalState';

import styles from './TopUserData.module.scss';

export const TopUserData = ({ user, setUser }) => {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter();

  const handleLogOut = (e) => {
    const div = e.target.closest('div');
    if (div.dataset.close) {
      e.preventDefault();
      const isClose = confirm('Вы уверены что хотите выйти?');
      if (isClose) {
        dispatch({ type: LOGOUT, payload: null });
        setUser(null);
        router.push('/');
      }
    }
  }
  return (
    <div className={styles.userData}>
      <div className={styles.userData__balance}>{user.balance} руб.</div>
      <div className={styles.userData__btnAdd}>+</div>
      <Link href="/profile">
        <a onClick={handleLogOut}>
          <div className={styles.userData__userImage} style={{ background: `url(${user.image})`, backgroundSize: "cover" }}>
            <div data-close className={styles.btnClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3259 11.9326L23.7254 1.81056C24.0915 1.45419 24.0915 0.876408 23.7254 0.520084C23.3593 0.163761 22.7656 0.163715 22.3995 0.520084L12 10.6421L1.60046 0.520084C1.23432 0.163715 0.640697 0.163715 0.274605 0.520084C-0.091488 0.876453 -0.0915349 1.45424 0.274605 1.81056L10.6741 11.9326L0.274605 22.0546C-0.0915349 22.411 -0.0915349 22.9888 0.274605 23.3451C0.457651 23.5232 0.697603 23.6123 0.937556 23.6123C1.17751 23.6123 1.41741 23.5232 1.60051 23.3451L12 13.2231L22.3995 23.3451C22.5825 23.5232 22.8225 23.6123 23.0624 23.6123C23.3024 23.6123 23.5423 23.5232 23.7254 23.3451C24.0915 22.9887 24.0915 22.4109 23.7254 22.0546L13.3259 11.9326Z" />
              </svg>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
