import styles from './OrderCard.module.css';

function OrderCard({
  orderNumber,
  buyer,
  provider,
  providerId,
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

  const showProviderData = async () => {
    const url = `http://localhost:3001/providers/${providerId}`;
    const response = await fetch(url);
    const providerData = response.json();
    console.log(providerData);
  };

  return (
    <tr className={styles.card_container}>
      <td> {orderNumber} </td>
      <td> {buyer} </td>
      <td> {provider} </td>
      <td>{new Date(emissionDate).toLocaleDateString('pt-BR')}</td>
      <td className={styles.value}>
        R${' '}
        {(Number(value) / 100).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </td>
      <td className={styles[`color_${status}`]}>
        {statusCode[status]}
        {styles[`color-${status}`]}
      </td>
      <td>
        <div onClick={showProviderData} className={styles.data_btn}>
          Dados do cedente
        </div>
      </td>
    </tr>
  );
}

export default OrderCard;
