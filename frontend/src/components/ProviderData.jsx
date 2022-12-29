import { useEffect, useState } from 'react';
import styles from './ProviderData.module.css';

function ProviderData({ display, setDisplayProviderData, providerId }) {
  const providerClass = display ? 'show' : 'hide';
  const [providerData, setProviderData] = useState({});

  useEffect(() => {
    const getProviderData = async () => {
      const url = `http://localhost:3001/providers/${providerId}`;
      const response = await fetch(url);
      const providerData = await response.json();
      setProviderData(providerData);
    };
    getProviderData();
  }, []);

  return (
    <div className={styles[providerClass]}>
      <div className={styles.data}>
        <h3> Dados do cedente: </h3>
        {!providerData ? (
          <div> Loading... </div>
        ) : (
          <ul>
            <li> Nome: {providerData.name} </li>
            <li> Razão Social: {providerData.tradingName} </li>
            <li> Site: {providerData.website || 'não informado' } </li>
          </ul>
        )}
        <button onClick={() => setDisplayProviderData(!display)}> Voltar </button>
      </div>
    </div>
  );
}

export default ProviderData;
