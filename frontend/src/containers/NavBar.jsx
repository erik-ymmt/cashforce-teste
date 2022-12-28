import React from 'react';
import styles from './NavBar.module.css';

import logo from '../assets/cashforceLogo.png'
import { ReactComponent as Teste } from '../assets/favicon.svg'


function NavBar() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="cashforce logo" />
      <nav>
        <Teste />
        Notas fiscais
      </nav>
    </div>
  );
}

export default NavBar;
