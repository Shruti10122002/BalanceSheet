import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description:</label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <div>
        <label>Amount (₹):</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
