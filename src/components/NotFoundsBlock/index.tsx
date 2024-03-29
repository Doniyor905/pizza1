import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NoutFoundsBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😔</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.desc}>
        К сожалении данная страница отсутсвует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NoutFoundsBlock;
