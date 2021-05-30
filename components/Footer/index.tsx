import clsx from 'clsx';
import Link from 'next/link';
import React, { FC, useState } from 'react'
import { AboutUsDialog } from '../AboutUsDialog';
import { ContactsDialog } from '../ContactsDialog';
import { GuaranteesDialog } from '../GuaranteesDialog';

import styles from './Footer.module.scss';

interface FooterProps {
  // title: string;
  // className?: string;
}

export const Footer: FC<FooterProps> = ({ }) => {
  const [aboutUs, setAboutUs] = useState(false);
  const [contacts, setContacts] = useState(false);
  const [guarantees, setGuarantees] = useState(false);

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
            {/* <li><Link href="/"><a>Последние поступления</a></Link></li> */}
            <ContactsDialog openDialog={contacts} setOpenDialog={setContacts} />
            <li onClick={() => setContacts(true)}>Контакты</li>
            <AboutUsDialog openDialog={aboutUs} setOpenDialog={setAboutUs} />
            <li onClick={() => setAboutUs(true)}>О проекте</li>
            {/* <li><Link href="/"><a>Другое</a></Link></li> */}
          </ul>
          <ul>
            <li><Link href="/profile"><a>Мои покупки</a></Link></li>
            <GuaranteesDialog openDialog={guarantees} setOpenDialog={setGuarantees} />
            <li onClick={() => setGuarantees(true)}>Гарантии</li>
            <li><Link href="/profile"><a>Мой кабинет</a></Link></li>
            {/* <li><Link href="/"><a>Мои возвраты</a></Link></li> */}
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
