import clsx from 'clsx';
import Link from 'next/link';
import React, { FC, useState } from 'react'
import { Button } from '../Button';
import { Comment } from '../Comment';
import { ProductItemBig } from '../ProductItemBig';
import { SectionWrapper } from '../SectionWrapper';

import styles from './ProductPage.module.scss';

interface ProductPageProps {
  // title: string;
  // className?: string;
}

export const ProductPage: FC<ProductPageProps> = ({ }) => {

  return (
    <>
      <div className={clsx(styles.product, "container")}>
        <div className={styles.product__image}>
          <img src="/static/items/example.png" alt="Product image" />
        </div>
        <div className={styles.content}>
          <ul className={styles.content__breadcrumbs}>
            <Link href="/"><a><li>Главная</li></a></Link>
            <li><span>{'>'}</span>Ключ PUBG</li>
          </ul>
          <h1>Ключ PUBG</h1>
          <ul className={styles.content__list}>
            <li>Дата выхода: <b>17.04.2024</b></li>
            <li>Жанр: <b>STRATEGY</b></li>
            <li>Платформа: <b>STEAM</b></li>
            <li>Тип: <b>КЛЮЧ</b></li>
            <li></li>
          </ul>
          <b className={styles.content__price}>599 ₽</b>
          <Button type="filled" className={styles.content__button}>Купить сейчас</Button>
          <div className={styles.content__description}>
            <h3>Описание</h3>
            <p>Приобретая данный товар Вы моментально получаете лицензионный аккаунт Minecraft.
            <br />
              <br />
              <b>Minecraft</b> — компьютерная инди-игра в жанре песочницы с элементами симулятора выживания и открытым миром, разработанная шведским программистом Маркусом Перссоном, известным также как «Notch» и позже выпускаемая основанной Перссоном компанией Mojang.
            <ul>
                <li> Возможности товара:</li>
                <li>Возможность играть на Premium серверах</li>
                <li>Возможность смены ника на аккаунте</li>
                <li>Возможность смены скина на аккаунте</li>
                <li>Играть с модами на серверах</li>
              </ul>
              <br />
              <br />
          Вход осуществляется в официальном лаунчере. (Скачать Лаунчер: http://download.com)
          Пароль менять запрещено. Гарантия на смену пароля не распространяется.</p>
          </div>
        </div>
      </div>
      <SectionWrapper title="Другие игры" className={clsx(styles.otherGamesSection, "container")}>
        <div className={styles.otherGames}>
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
        </div>
      </SectionWrapper>
      <section className={styles.comments}>
        <div className="container">
          <h2 className={styles.comments__title}>Комментарии <span>(25)</span></h2>
          <div className={styles.comments__wrapper}>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
          <Button className={styles.comments__button}>
            Больше комментариев
          </Button>
          <form className={styles.comments__sender}>
            <h4>Ваш комментарий</h4>
            <textarea name="comment" placeholder="Введите ваш комментария..."></textarea>
            <div className={styles.comments__senderBottom}>
              <div className="captacha">Captcha</div>
              <Button type="filled">Отправить</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
