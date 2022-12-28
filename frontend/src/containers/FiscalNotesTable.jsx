import React from 'react';
import styles from './FiscalNotesTable.module.css';

function FiscalNotesTable() {
  return (
    <div className={styles.main_container}>
      <header className={styles.header}></header>
      <div className={styles.table_container}>
        <h3> Notas Fiscais </h3>
      </div>
    </div>
  );
}

export default FiscalNotesTable;
