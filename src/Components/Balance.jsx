import React from 'react';

const Balance = ({ transactions }) => {
  const totalBalance = transactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);

  return (
    <div className="balance">
      <h2>Current Balance: ₹{totalBalance.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
