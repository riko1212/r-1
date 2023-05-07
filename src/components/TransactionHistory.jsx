export const TransactionHistory = ({ items }) => {
  console.log(items);
  const transactionItem = items.map(el => {
    return (
      <tr key={el.id}>
        <td>{el.type}</td>
        <td>{el.amount}</td>
        <td>{el.currency}</td>
      </tr>
    );
  });
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionItem}</tbody>
    </table>
  );
};
