import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateExpense from "./create_expenses";

const ExpenseListing = (/*{ expense, budget }*/) => {
  const [epense, setExpense] = useState([]);
  const expense = {};

  const navigate = useNavigate();
  // useEffect(()=>{
  //   const expense = dis
  // })
  return (
    <div className='m-2'>
      <button
        className='w-full bg-blue-500 text-white font-bold py-4 px-8 mt-8 mb-8 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        onClick={() => {
          navigate("create-expense");
        }}
      >
        Create Expense
      </button>
      <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
        <h2 className='text-lg font-bold mb-2'>{expense.name}</h2>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-gray-600'>Category: {expense.category}</span>
          <span className='text-gray-600'>${expense.amount.toFixed(2)}</span>
        </div>
        <p className='text-gray-600 mb-2'>{expense.description}</p>
      </div>
      <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
        <h2 className='text-lg font-bold mb-2'>{expense.name}</h2>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-gray-600'>Category: {expense.category}</span>
          <span className='text-gray-600'>${expense.amount.toFixed(2)}</span>
        </div>
        <p className='text-gray-600 mb-2'>{expense.description}</p>
      </div>
    </div>
  );
};

export default ExpenseListing;
