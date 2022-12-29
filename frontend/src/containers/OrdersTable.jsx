import { useEffect } from 'react';
import { useState } from 'react';
import OrderCard from '../components/OrderCard';
import styles from './OrdersTable.module.css';

import blueHandShake from '../assets/blueHandShake.svg'

function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      const url = 'http://localhost:3001/orders';
      const response = await fetch(url);
      const result = await response.json();
      setOrders(result);
    };
    fetchAllOrders();
  }, []);

  const tableHeaders = [
    'NOTA FISCAL',
    'SACADO',
    'CEDENTE',
    'EMISSÃO',
    'VALOR',
    'STATUS',
    ' ',
  ];

  return (
    <div className={styles.main_container}>
      <header className={styles.header}></header>
      <div className={styles.table_container}>
        <h3 className={styles.title}>
          <img className={styles.handIcon} src={blueHandShake} alt="handshake" />
          Notas fiscais
        </h3>
        <p className={styles.subTitle}> Visualize as notas fiscais que você tem. </p>
        { orders.length === 0
        ? <h3> Carregando... </h3>
        :(
          <table className={styles.orders_table}>
            <thead>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={`${header}-${index}`}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                orders.map((order, index) => (
                  <OrderCard
                    key={`${order.orderNumber}-${index}`}
                    orderNumber={order.orderNumber}
                    buyer={order.buyer.name}
                    provider={order.provider.name}
                    emissionDate={order.emissionDate}
                    value={order.value}
                    status={order.orderStatusBuyer}
                  />
                ))
              }
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default OrdersTable;
