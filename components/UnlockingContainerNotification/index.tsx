import React from "react";

import styles from './UnlockingContainerNotification.module.scss';

export const UnlockingContainerNotification = () => {
  return (
    <div className={styles.unlockingContainerNotification}>
      <span>Идет открытия кейса ...</span>
    </div>
  );
};
