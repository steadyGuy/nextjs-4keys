import React from 'react'
import { Button } from '../Button';
import { Dialog } from '../Dialog';

import styles from './AboutUsDialog.module.scss';

export const AboutUsDialog = ({ openDialog, setOpenDialog }) => {

  const handleOnOpenDialog = () => {
    setOpenDialog(false);
  }

  return (openDialog &&
    <Dialog
      id='modal_about'
      isOpen={openDialog}
      onClose={handleOnOpenDialog}
      title={'О проекте'}
      modalClass={styles.about}
    >
      <div className={styles.about__content}>
        <img src="/static/about.jpg" alt="О нас" />
        <div className={styles.about__data}>
          <h2>Кто мы?</h2>
          <p>
            <b>4keys</b> – это уникальная система, которая позволяет Вам открывать кейсы, и получать интересные
            продукты по <i>Steam, Origin, Uplay</i> играм и аккаунтам. На нашем сайте доступен демо режим по открытию кейсов,
            что позволит вам понять механизм работы сайта лучше.
            Мы постарались отобрать только лучшие игры!
          </p>
          <br />
          <p>
            Каждый продукт составлен профессиональным геймером, в них они постарались описать все самое важное, что должен знать каждый профессиональный игрок о игре, которую он собирается купить.
            Открывайте наши кейсы, и будете знать все самые важные игровые хитрости!
          </p>
          <p>
            <b>Кейсы с играми</b> это реальная возможность получать крутые стим ключи к играм!
          </p>
          <br />
          <h2>Работа с балансом</h2>
          <p>
            В качестве платёжного агрегатора мы будем использовать Strapi.
            Поскольку хостинг бесплатный, то пополнение баланса будет в демо режиме
            Скоро, система будет позволять нам принимать платежи с практически любых платёжных систем, что облегчает Вам процесс взаимодействия с системой проекта.
          </p>
        </div>
      </div>
    </Dialog>)
}
