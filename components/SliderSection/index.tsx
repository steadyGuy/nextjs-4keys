import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick';
import clsx from 'clsx';

import styles from "./Slider.module.scss";
import tabTheme from './MyTabTheme.scss'
import { ProductItem } from '../ProductItem';

export const SliderSection = () => {

  const settings = {
    customPaging: (i) => {
      return (
        <a>
          <div className={styles.dot}></div>
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipe: false,
    // autoplaySpeed: 6000,
    // autoplay: true,
    // swipeToSlide: false,
    // touchMove: false,
    // draggable: false,
    // arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.wrapper} style={{ background: "linear-gradient(0deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(./static/home-bg.png)", backgroundSize: "cover" }}>
        <div className={clsx("container", styles.section)}>
          <div className={styles.sound}>
            <img src="./static/sound.svg" alt="Sound icon" />
            <span className="ml-10">Выключить звук</span>
          </div>
          <h1>Лента дропа</h1>
          <p>В ленте отображаются игры полученные <span>реальными</span> клиентами!</p>
          <div className={styles.slider}>
            <Slider  {...settings}>
              <ProductItem className={styles.indent} />
              <ProductItem className={styles.indent} />
              <ProductItem className={styles.indent} />
              <ProductItem className={styles.indent} />
              <ProductItem className={styles.indent} />
              <ProductItem className={styles.indent} />
              <ProductItem className={styles.indent} />
            </Slider>
            <style global jsx>{`
                .slick-dots {
                  position: relative;
                  bottom: 0;
                  margin-top: 20px;
                }
                .slick-dots li {
                  width: 11px;
                  height: 11px;
                }
                .slick-active a div {
                  background-color: #F0C419;
                  border-color: #F0C419;
                }
                .slick-slide {
                  overflow-x: hidden;
                  transform: translateX(-1px)
                }
      `}</style>
          </div>
        </div>
      </div>
    </>
  );
}
