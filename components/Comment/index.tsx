import clsx from 'clsx';
import React, { FC } from 'react'
import { IComment } from '../../interfaces/Comment';

import styles from './Comment.module.scss';

interface CommentProps extends IComment {
  className?: string;
}

export const Comment: FC<CommentProps> = ({ className, userImage, description, created_at, userName }) => {
  return (
    <div className={clsx(className, styles.comment)}>
      <div
        className={styles.comment__itemImage}
        style={{ background: `url(${userImage})` }}
      />
      <div className={styles.comment__itemData}>
        <p className={styles.comment__text}>{description}</p>
        <p className={styles.comment__userAndTime}>{userName}<span>,</span> {(new Date(created_at)).toLocaleDateString()}</p>
      </div>
    </div>
  )
}
