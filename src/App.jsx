import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import TransactionForm from './Components/TranscationForm';
import TransactionList from './Components/TransactionList';
import Balance from './Components/Balance';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <Header />
      <Balance transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;

