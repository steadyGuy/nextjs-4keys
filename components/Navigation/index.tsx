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
import { AboutUsDialog } from '../AboutUsDialog';
import { ContactsDialog } from '../ContactsDialog';
import { GuaranteesDialog } from '../GuaranteesDialog';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';


export const Navigation = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
  const [user, setUser] = useState(null);

  const [isSignUp, setIsSignUp] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const { dispatch, state } = useContext(StoreContext);
  const [aboutUs, setAboutUs] = useState(false);
  const [contacts, setContacts] = useState(false);
  const [guarantees, setGuarantees] = useState(false);

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
      if (event.origin !== 'https://nestjsspecial.herokuapp.com') return;
      const user = event.data;
      dispatch({ type: AUTH, payload: user });
      setUser(JSON.parse(localStorage.getItem('user')));
    });
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [])

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [state.auth])

  return (
    <div className={styles.bordered}>
      <div className={clsx("container", styles.wrapper)}>
        <div className={styles.hiddenLg}>
          <BurgerMenu open={burgerMenuOpen} setOpen={setBurgerMenuOpen} />
        </div>
        <nav className={clsx(styles.navigation, !burgerMenuOpen && styles.navHidden)}>

          <Link href={'/'}>
            <a>Главная</a>
          </Link>

          <AboutUsDialog openDialog={aboutUs} setOpenDialog={setAboutUs} />
          <span onClick={() => setAboutUs(true)}>О проекте</span>

          <ContactsDialog openDialog={contacts} setOpenDialog={setContacts} />
          <span onClick={() => setContacts(true)}>Контакты</span>

          <GuaranteesDialog openDialog={guarantees} setOpenDialog={setGuarantees} />
          <span onClick={() => setGuarantees(true)}>Гарантии</span>

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
