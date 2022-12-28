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
      <td>
        {new Date(emissionDate)
          .toLocaleDateString('pt-BR')
        }
        </td>
      <td>
        {(Number(value)/100)
          .toLocaleString('pt-BR', { minimumFractionDigits: 2,  maximumFractionDigits: 2})}
      </td>
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
