import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: ₹{transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
