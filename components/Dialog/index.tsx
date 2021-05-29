import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import ReactDom from 'react-dom';

import styles from "./Dialog.module.scss";
import clsx from 'clsx';

interface DialogProps {
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  height?: string;
  className?: string;
}

export const Dialog = ({ isOpen, onClose, modalClass = null, modalSize = null, id, children, title }) => {
  const [fadeType, setFadeType] = useState(null);
  const [modalRoot, setModalRoot] = useState(null);
  const background = useRef();
  useEffect(() => {
    setModalRoot(document.getElementById("__next"));
    window.addEventListener("keydown", onEscKeyDown, false);
    setTimeout(() => setFadeType('in'), 30);
  }, []);

  useEffect(() => {
    if (!isOpen) setFadeType('out');
    return () => {
      window.removeEventListener("keydown", onEscKeyDown, false);
    }
  }, [isOpen]);


  const transitionEnd = e => {
    if (e.propertyName !== "opacity" || fadeType === "in") return;

    if (fadeType === "out") onClose();
  };

  const onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    setFadeType('out');
  };

  const handleClick = e => {
    e.preventDefault();
    setFadeType('out');
  };

  return modalRoot ? ReactDom.createPortal(
    <div
      id={id}
      className={clsx(styles.modal, styles[fadeType && `fade-${fadeType}`], modalClass)}
      role="dialog"
      onTransitionEnd={transitionEnd}
    >
      <div className={styles.boxDialog}>
        <img onClick={handleClick} src="/static/close.svg" alt="Close" className={styles.close} />
        <div className={styles.boxHeader}>
          <h4 className={styles.boxTitle}>{title}</h4>
        </div>
        <div className={styles.boxContent}>{children}</div>
        {/* <div className={styles.boxFooter}>
          <button onClick={handleClick} className="close">
            Close
            </button>
        </div> */}
      </div>
      <div
        className={styles.background}
        onMouseDown={handleClick}
        ref={background}
      />
    </div>,
    modalRoot
  ) : null;
}