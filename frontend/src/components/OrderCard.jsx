import styles from './OrderCard.module.css';

function OrderCard({
  orderNumber,
  buyer,
  provider,
  emissionDate,
  value,
  status,
}) {
  const statusCode = [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida',
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado',
  ];
  return (
    <tr className={styles.card_container}>
      <td> {orderNumber} </td>
      <td> {buyer} </td>
      <td> {provider} </td>
      <td> {emissionDate} </td>
      <td> {value} </td>
      <td> {statusCode[status]} </td>
      <td>
        <div>
          Dados do cedente
        </div>
      </td>
    </tr>
  );
}

export default OrderCard;
