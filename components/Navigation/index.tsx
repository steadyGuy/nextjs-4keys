import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'

import styles from "./Navigation.module.scss";
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Button } from '../Button';
import { TopUserData } from './TopUserData';
import { Auth } from '../Auth';
import { AUTH } from '../../store/actions';
import { StoreContext } from '../../store/GlobalState';

export const Navigation = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const [isSignUp, setIsSignUp] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const { dispatch } = useContext(StoreContext)

  const handleAuth = (type: 'login' | 'register') => {
    setOpenDialog(true);
    type === 'login' ? setIsSignUp(false) : setIsSignUp(true);
  }

  const handleSteamLogin = () => {
    if (localStorage.getItem('user')) return;
    let [x, y] = [screen.width / 2 - 500 / 2, screen.height / 2 - 350];
    const popupWindow = window.open(
      'https://nestjsspecial.herokuapp.com/api' + "/auth/steam", 'Auth via OpenID', `width=500,height=500,menubar=no,location=no,resizable=no,scrollbars=no,status=no,,left=${x},top=${y}`
    );
    if (window.focus) popupWindow.focus();
  }

  useEffect(() => {
    window.addEventListener("message", event => {
      if (event.origin !== 'https://nestjsspecial.herokuapp.com/') return;
      const user = event.data;
      dispatch({ type: AUTH, payload: user });
      setUser(JSON.parse(localStorage.getItem('user')));
    });
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [])

  return (
    <div className={styles.bordered}>
      <div className={clsx("container", styles.wrapper)}>
        <nav className={styles.navigation}>
          {Object.entries({
            'Главная': '/', 'Отзывы': '/o', 'О проекте': '/about', 'Обратная связь': '/svan', 'Гарантии': '/guaranti'
          })
            .map((item, i) => {
              return (<Link href={item[1]} key={(Math.random().toString() + i).toString()}>
                <a className={clsx(router.pathname === item[1] && styles.active)}>{item[0]}</a>
              </Link>);
            })}
        </nav>
        <div className={styles.logo} >
          <Link href="/">
            <a>
              <img src="/static/logo.svg" alt="Logo 4keys" />
            </a>
          </Link>
        </div>

        {!user ?
          (
            <div className={styles.btnsRight}>
              <p onClick={() => handleAuth('register')}>Регистрация</p>
              <Auth setUser={setUser} isSignUp={isSignUp} openDialog={openDialog} setOpenDialog={setOpenDialog} setIsSignUp={setIsSignUp} />
              <div className={styles.btns}>
                <Button clickHandler={handleSteamLogin}>Войти <img src="/static/steam.svg" alt="Logo 4keys" /></Button>
                {/* <img src="/static/facebook.svg" alt="Logo 4keys" /> */}
                <Button clickHandler={() => handleAuth('login')}>Войти</Button>
              </div>
            </div>
          )
          : <TopUserData user={user} setUser={setUser} />}
      </div>
    </div>
  )
}
