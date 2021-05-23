import { setCookie } from 'nookies';
import React, { useContext, useState } from 'react'
import { UserApi } from '../../api/UserApi';
import { AUTH } from '../../store/actions';
import { StoreContext } from '../../store/GlobalState';
import { Button } from '../Button';
import { Dialog } from '../Dialog';

import styles from './Auth.module.scss';
import { Input } from './Input';

const initialUser = { username: '', password: '', email: '', password2: '' };

export const Auth = ({ isSignUp, setIsSignUp, openDialog, setOpenDialog, setUser }) => {

  const [formData, setFormData] = useState(initialUser);
  const [error, setError] = useState([]);
  const { dispatch } = useContext(StoreContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user;
    if (isSignUp) {
      user = await UserApi().register(formData);
    } else {
      user = await UserApi().loginJwt({ email: formData.email, password: formData.password });
    }

    if (user?.message) return setError(user?.message);

    dispatch({ type: AUTH, payload: user });

    delete user.access_token;
    setUser(user);
    setOpenDialog(false);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const switchMode = () => {
    setIsSignUp((prevState) => !prevState);
  }

  const handleOnOpenDialog = () => {
    setOpenDialog(false);
  }

  return (openDialog &&
    <Dialog
      id='modal_dialog'
      isOpen={openDialog}
      onClose={handleOnOpenDialog}
      title={isSignUp ? "Регистрация" : "Войти"}
    >
      <form className={styles.register} onSubmit={handleSubmit}>
        <p className={styles.register__error}>
          {typeof error === "string" ? error : (error.map((item, i) => <span key={Math.random() + i}>{item}</span>))}
        </p>

        {
          isSignUp &&
          <Input
            label="Имя пользователя:"
            onChange={handleChange}
            placeholder="Имя пользователя"
            name="username"
            id="user_id"
            type="text"
            autoFocus
          />
        }

        <Input
          label="Email пользователя:"
          onChange={handleChange}
          placeholder="Email пользователя"
          name="email"
          id="user_email"
          type="email"
          autoFocus={!isSignUp}
        />

        <Input
          label="Пароль:"
          onChange={handleChange}
          placeholder="Введите пароль"
          name="password"
          id="user_password"
          type="password"
        />

        {
          isSignUp &&
          <Input
            label="Повторите пароль:"
            onChange={handleChange}
            placeholder="Введите пароль ёще раз"
            name="password2"
            id="user_password2"
            type="password"
          />
        }

        <Button
          typeSend="submit"
          className={styles.register__button}
          type="filled">
          {isSignUp ? 'Зарегистрироваться' : 'Войти'}
        </Button>

        <span className={styles.register__alreadyAuth} onClick={switchMode}>
          {isSignUp ? 'Еще нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войти'}
        </span>
      </form>
    </Dialog>
  )
}
