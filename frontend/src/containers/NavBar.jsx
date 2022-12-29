import React from 'react';
import styles from './NavBar.module.css';

import logo from '../assets/cashforceLogo.svg';
import handShake from '../assets/handShake.svg';

function NavBar() {
  return (
    <div className={styles.container}>
      <a href="https://cashforce.com.br/" target="_blank">
        <img className={styles.logo} src={logo} alt="cashforce logo" />
      </a>
      <nav className={styles.navigation}>
        <img src={handShake} alt="handshake" />
        <span>Notas fiscais</span>
      </nav>
    </div>
  );
}

export default NavBar;
