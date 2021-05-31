import clsx from 'clsx';
import React, { FC } from 'react'

import styles from './SectionWrapper.module.scss';

interface SectionWrapperProps {
  title: string;
  className?: string;
  id: string;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({ title, children, className, id }) => {
  return (
    <section id={id} className={clsx(className, styles.section)}>
      <h2 className={styles.section__title}>{title}</h2>
      {children}
    </section>
  )
}
