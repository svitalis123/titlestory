import React from 'react';
import styles from '../css/Home.module.css';
import MainTop from '../subcomponents/MainTop';
import MiddleTop from '../subcomponents/MiddleTop';

export default function Home() {
  return (
    <div className={styles.container_home}>
      <MainTop />
      <MiddleTop />
    </div>
  );
}
