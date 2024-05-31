import React from "react";

const ExpenseCard = (/*{ expense, budget }*/) => {
  const expense = {
    name: "Adesh",
    category: "Electronic",
    amount: 500,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur aperiam optio blanditiis magnam ipsam totam quis officiis, ipsa unde ratione perspiciatis tempora animi dolores ullam laboriosam laudantium esse expedita veritatis dolor impedit eaque facilis iure quibusdam earum. Numquam ipsum labore deserunt nulla esse modi, quas itaque, culpa nostrum, amet sint!",
  };
  return (
    <div className='m-2'>
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

export default ExpenseCard;
