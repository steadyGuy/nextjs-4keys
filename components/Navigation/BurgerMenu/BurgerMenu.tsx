import clsx from 'clsx';

import styles from './BurgerMenu.module.scss';

export const BurgerMenu = ({ open, setOpen }) => {
  console.log(open, open, open)
  return (
    <div className={styles.showMobile}>
      <div className={clsx(styles.menu, open && styles.menu__open)} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};