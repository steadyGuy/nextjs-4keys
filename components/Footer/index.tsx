import clsx from 'clsx';
import Link from 'next/link';
import React, { FC } from 'react'

import styles from './Footer.module.scss';

interface FooterProps {
  // title: string;
  // className?: string;
}

export const Footer: FC<FooterProps> = ({ }) => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.footer__wrapper, "container")}>
        <div className={styles.footer__logoData}>
          <img src="/static/logoFooter.svg" alt="Logo footer" />
          <p>
            Платформа для продажи цифровых товаров. Торговый агрегатор по
            оказанию услуг в сфере торговли. Все закупаемые ключи приобретаются
            у официальных поставщиков. Все названия продуктов, компаний и марок,
            логотипы и товарные знаки являются собственностью соответствующих
            владельцев.
          </p>
        </div>
        <div className={styles.footer__lists}>
          <ul>
            <li><Link href="/"><a>Новые продукты</a></Link></li>
            <li><Link href="/"><a>Контакты</a></Link></li>
            <li><Link href="/"><a>Оплата & доставка</a></Link></li>
            <li><Link href="/about"><a>О нас</a></Link></li>
            <li><Link href="/"><a>Другое</a></Link></li>
          </ul>
          <ul>
            <li><Link href="/"><a>Мои заказы</a></Link></li>
            <li><Link href="/cart"><a>Корзина</a></Link></li>
            <li><Link href="/"><a>Мой кабинет</a></Link></li>
            <li><Link href="/"><a>Мои возвраты</a></Link></li>
          </ul>
        </div>
        <div className={styles.footer__paymentMethods}>
          <img src="/static/footer/visa.png" alt="Visa" />
          <img src="/static/footer/masterCard.png" alt="MasterCard" />
          <img src="/static/footer/paypal.png" alt="PayPal" />
          <img src="/static/footer/qiwi.png" alt="QIWI" />
          <img src="/static/footer/webmoney.png" alt="WebMoney" />
        </div>
      </div>
      <div className={clsx(styles.footer__down, "container")}>
        <div />
        <span>2021 © 4keys</span>
      </div>
    </footer>
  )
}
