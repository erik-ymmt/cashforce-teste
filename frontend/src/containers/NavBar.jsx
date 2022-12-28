import React from 'react';
import styles from './NavBar.module.css';

import logo from '../assets/cashforceLogo.png'
import handShake from '../assets/handShake.svg'

function NavBar() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="cashforce logo" />
      <nav>
        <img src={handShake} alt="handshake" />
        Notas fiscais
      </nav>
    </div>
  );
}

export default NavBar;
