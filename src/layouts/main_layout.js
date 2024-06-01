import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-white text-lg font-bold'>Expense-Tracker</div>
          <ul className='flex space-x-4'>
            <li>
              <Link to='expenses' className='text-white hover:text-gray-400'>
                Expenses
              </Link>
            </li>
            <li>
              <Link
                to='create-expenses'
                className='text-white hover:text-gray-400'
              >
                Create
              </Link>
            </li>
            <li>
              <Link to='categories' className='text-white hover:text-gray-400'>
                Category
              </Link>
            </li>

            <li>
              <Link to='profile' className='text-white hover:text-gray-400'>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container mx-auto '>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
