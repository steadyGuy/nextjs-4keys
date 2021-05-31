import clsx from 'clsx';
import React, { FC, useContext } from 'react'
import { StoreContext } from '../../store/GlobalState';
import { Case } from '../Case';
import { SectionWrapper } from '../SectionWrapper';

import styles from './CasesListSection.module.scss';

interface ICase {
  id: number;
  title: string;
  price: number;
  created_at: Date;
}

interface CasesListSectionProps {
  cases: ICase[];
}

export const CasesListSection: FC<CasesListSectionProps> = ({ cases }) => {

  const { state, dispatch } = useContext(StoreContext);

  return (
    <div className="container">
      <SectionWrapper title="Выбор ключей кейсов">
        <div className={styles.cases}>

          {
            cases.map((item, i) => (
              <Case
                // onClick={() => dispa}
                key={item.id}
                title={item.title}
                price={item.price}
                imgIndex={i + 1}
              />
            ))
          }
        </div>
      </SectionWrapper>
    </div>
  )
}
