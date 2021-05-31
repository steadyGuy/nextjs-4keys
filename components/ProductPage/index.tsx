import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useContext, useState } from 'react'
import { PaymentApi } from '../../api/PaymentApi';
import { UserApi } from '../../api/UserApi';
import { IComment } from '../../interfaces/Comment';
import { UPDATE_BALANCE, UPDATE_BALANCE_MINUSE } from '../../store/actions';
import { StoreContext } from '../../store/GlobalState';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { EmailInput } from '../EmailInput';
import { ProductItemBig } from '../ProductItemBig';
import { SectionWrapper } from '../SectionWrapper';
import { Comments } from './Comments';
import { DialogWarning } from './DialogWarning';

import styles from './ProductPage.module.scss';

interface ProductPageProps {
  randomProducts: any;
  product: any;
  comments: IComment[];
}

export const ProductPage: FC<ProductPageProps> = ({ randomProducts, product, comments: comm }) => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogtitle, setDialogTitle] = useState('Вы не авторизированы!');
  const [dialogContent, setDialogContent] = useState('error');
  const [keyOrAccount, setKeyOrAccount] = useState(product.data.type.keys > 0 ? 'key' : 'account');
  const [readyToPay, setReadyToPay] = useState(false);
  const [openInformal, setOpenInformal] = useState(false);
  const [informalMessage, setInformalMessage] = useState('');
  const { state, dispatch } = useContext(StoreContext)

  const handleOnOpenDialog = () => {
    setOpenDialog(!openDialog);
  }

  const handleOptions = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      return alert('Вы должны войти или зарегистрироваться для покупки');
    }

    if (!user?.email && !user?.steamid) {
      setOpenDialog(true);
      setDialogContent('error');
    }

    if (!user?.email) {
      setDialogTitle('Привяжите ваш email адрес для покупки')
      setOpenDialog(true);
      setDialogContent('warning');
      return;
    }

    setOpenDialog(false);
    setReadyToPay(true);

  }

  const handleInformalMessage = () => {
    setOpenInformal(false);
  }

  const handlePayment = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const confirmationPayment = confirm(`C вашего баланса будет снято ${product.data.price} ₽. Вы уверены что хотите купить этот предмет?`);
    let data = { message: 'Вы отменили покупку' };
    if (confirmationPayment) {
      data = await PaymentApi().execute(user.email, product.data.id, keyOrAccount);
    }
    setReadyToPay(false);
    setOpenInformal(true);
    // let userLocalS = JSON.parse(localStorage.getItem('user'));
    // userLocalS.balance = await UserApi().getBalance();
    // localStorage.setItem('user', JSON.stringify(userLocalS));
    const balance = await UserApi().getBalance();
    dispatch({ type: UPDATE_BALANCE_MINUSE, payload: balance });
    setInformalMessage(data.message);
  }

  return (
    <>
      {
        openDialog &&
        <DialogWarning title={dialogtitle} openDialog={openDialog} handleOnOpenDialog={handleOnOpenDialog}>
          {dialogContent === 'error' ?
            <b className="mt-30 mb-50 d-flex" style={{ color: '#EF3F3F', textAlign: 'center', lineHeight: '24px' }}>Для открытия кейса / покупки товара необходима авторизация.</b> :
            <EmailInput email='' className={styles.emailDialog} />}
        </DialogWarning>
      }

      {
        openInformal &&
        <Dialog
          id='choose_type'
          isOpen={openInformal}
          onClose={() => setOpenInformal(!openInformal)}
          title={'Уведомление'}
        >

          <div className={styles.dialogChoose}>
            <div className={styles.dialogChoose__wrapper}>

              <b style={{ color: '#EF3F3F', textAlign: 'center', lineHeight: '24px' }}>
                {informalMessage}
              </b>

            </div>
            <Button
              type="filled"
              className={clsx(styles.content__button, styles.dialogChoose__button)}
              clickHandler={handleInformalMessage}>
              Хорошо
            </Button>
          </div>

        </Dialog>
      }

      {
        readyToPay &&
        <Dialog
          id='choose_type'
          isOpen={readyToPay}
          onClose={() => setReadyToPay(!readyToPay)}
          title={'Выберите ключ или аккаунт'}
        >

          <div className={styles.dialogChoose}>
            <div className={styles.dialogChoose__wrapper}>

              {product.data.type.keys > 0 &&
                <div
                  className={clsx(styles.dialogChoose__item, keyOrAccount === 'key' && styles.dialogChoose__active)}
                  onClick={() => setKeyOrAccount('key')}
                >
                  <img src={`/static/key.svg`} alt={`Ключ}`} />
                </div>}

              {product.data.type.accounts > 0 &&
                <div
                  className={clsx(styles.dialogChoose__item, keyOrAccount === 'account' && styles.dialogChoose__active)}
                  onClick={() => setKeyOrAccount('account')}
                >
                  <img src={`/static/account.svg`} alt={`Аккаунт}`} />
                </div>}
            </div>
            <Button
              type="filled"
              className={clsx(styles.content__button, styles.dialogChoose__button)}
              clickHandler={handlePayment}>
              Выбрать
            </Button>
          </div>

        </Dialog>
      }

      <div className={clsx(styles.product, "container")}>
        <div className={styles.product__image}>
          <img src={product.data.photo} alt={product.data.title} />
        </div>
        <div className={styles.content}>
          <ul className={styles.content__breadcrumbs}>
            <Link href="/"><a><li>Главная</li></a></Link>
            <li><span>{'>'}</span>{product.data.title}</li>
          </ul>
          <h1>{product.data.title}</h1>
          <ul className={styles.content__list}>
            <li>Дата выхода: <b>{product.data.date}</b></li>
            <li>Жанр: <b>{product.data.genres.map(genre => genre.name + ' ')}</b></li>
            <li>Платформа: <b>{product.data.platform?.name}</b></li>
            <li>Тип: <b>{product.data.type.keys > 0 && 'КЛЮЧ'}{' '}{product.data.type.accounts > 0 && 'АККАУНТ'}</b></li>
            <li></li>
          </ul>
          <b className={styles.content__price}>{product.data.price} ₽</b>
          {
            product.data.type.keys === 0 && product.data.type.accounts === 0 ?
              <b className={styles.content__outOfStock}>Нет в наличии</b> :
              <Button type="filled" className={styles.content__button} clickHandler={handleOptions}>
                Купить сейчас
            </Button>
          }
          <div className={styles.content__description}>
            <h3>Описание</h3>
            {product.data.description}
          </div>
        </div>
      </div>
      <SectionWrapper title="Другие игры" className={clsx(styles.otherGamesSection, "container")}>
        <div className={styles.otherGames}>
          {randomProducts.data.map((item, i) => (
            <ProductItemBig
              type={item.type}
              price={item.price}
              image={item.photo}
              slug={item.slug}
              title={item.title}
              key={Math.random() + i}
            />
          ))}

        </div>
      </SectionWrapper>
      <Comments comments={comm} product={product.data} />
    </>
  )
}