import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllExpense } from "../../services/display";
import { deleteExpense } from "../../services/delete";

const ExpenseListing = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);

  const fetchExpense = async () => {
    const data = await getAllExpense();
    setExpenses(data);
  };

  const onDelete = async (id) => {
    const reponse = await deleteExpense(id);
    fetchExpense();
  };

  useEffect(() => {
    console.log("Expense List useEffect");
    fetchExpense();
  }, []);

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
      {expenses &&
        expenses.map((expense) => {
          const id = expense["_id"];
          return (
            <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
              <h2 className='text-lg font-bold mb-2'>{expense.name}</h2>
              <div className='flex justify-between items-center mb-2'>
                <span className='text-gray-600'>Title: {expense.title}</span>
                <span className='text-gray-600'>${expense.amount}</span>
              </div>
              <p className='text-gray-600 mb-2'>{expense.description}</p>
              <button
                onClick={() => onDelete(id)}
                className='px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 m-2'
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ExpenseListing;
