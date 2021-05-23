import clsx from 'clsx';
import React, { FC } from 'react'
import { Case } from '../Case';
import { SectionWrapper } from '../SectionWrapper';

import styles from './CasesListSection.module.scss';

interface CasesListSectionProps {
  // title: string;
  // className?: string;
}

export const CasesListSection: FC<CasesListSectionProps> = ({ title, children, className }) => {
  return (
    <div className="container">
      <SectionWrapper title="Выбор ключей кейсов">
        <div className={styles.cases}>
          <Case />
          <Case />
          <Case />
          <Case />
        </div>
      </SectionWrapper>
    </div>
  )
}
