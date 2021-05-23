import clsx from 'clsx';
import React, { FC } from 'react'

import styles from './SectionWrapper.module.scss';

interface SectionWrapperProps {
  title: string;
  className?: string;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({ title, children, className }) => {
  return (
    <section className={clsx(className, styles.section)}>
      <h2 className={styles.section__title}>{title}</h2>
      {children}
    </section>
  )
}
