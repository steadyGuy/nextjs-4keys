import { setCookie, destroyCookie } from 'nookies';
import * as actionType from './actions';

export const rootReducer = (state, action) => {
  switch (action.type) {

    case actionType.AUTH:
      setCookie(null, 'auth_token', action.payload.access_token, {
        maxAge: 7 * 24 * 60 * 60,
        path: '/',
      });
      delete action.payload.access_token;
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, auth: action.payload }

    case actionType.LOGOUT:
      localStorage.removeItem('user');
      destroyCookie(null, 'auth_token');
      return { ...state, auth: null };

    case actionType.UPDATE_BALANCE:
      const user = JSON.parse(localStorage.getItem('user'));
      user.balance += action.payload;
      localStorage.setItem('user', JSON.stringify(user));
      return { ...state, auth: { ...user } };

    default:
      return state;
  }
};
