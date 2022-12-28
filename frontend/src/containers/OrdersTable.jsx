import { useEffect } from 'react';
import { useState } from 'react';
import styles from './OrdersTable.module.css';

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

  console.log(orders);

  const tableHeaders = [
    'Nota Fiscal',
    'Sacado',
    'Cedente',
    'Emissão',
    'Valor',
    'Status',
    ' ',
  ];

  return (
    <div className={styles.main_container}>
      <header className={styles.header}></header>
      <div className={styles.table_container}>
        <h3> Notas Fiscais </h3>
        { orders.length === 0
        ? <h3> Carregando... </h3>
        :(
          <table>
            <thead>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={`${header}-${index}`}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* {
                orders.map((order) => (
                  <OrderCard
                    orderNumber={order.orderNumber}
                    buyer={order.buyerId}
                    provider={order.providerId}
                    emissionDate={order.emissionDate}
                    value={order.value}
                    status={order.status}
                  />
                ))
              } */}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default OrdersTable;
