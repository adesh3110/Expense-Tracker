import React, { useEffect, useState } from "react";
import { createExpense } from "../../services/create";
import { useNavigate } from "react-router-dom";
import { getAllCategory } from "../../services/display";
const CreateExpense = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: 0,
    categoryId: "",
  });
  const [category, setCategory] = useState();

  const fetchCategory = async () => {
    const data = await getAllCategory();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add additional code here to handle form submission, e.g., sending data to an API
    await createExpense(formData);
    navigate("/expenses");
  };

  return (
    <div className='flex items-center justify-center min-h-screen '>
      <form
        onSubmit={handleSubmit}
        className='max-w-lg w-full p-4 bg-white  border shadow-md rounded-md '
      >
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
            Title:
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='description'
            className='block text-gray-700 font-bold mb-2'
          >
            Description:
          </label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='amount'
            className='block text-gray-700 font-bold mb-2'
          >
            Amount:
          </label>
          <input
            type='number'
            id='amount'
            name='amount'
            value={formData.amount}
            onChange={handleChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='categoryId'
            className='block text-gray-700 font-bold mb-2'
          >
            Category ID:
          </label>
          <select
            onChange={handleChange}
            name='categoryId'
            id='categoryID'
            className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
          >
            {category &&
              category.map((e) => {
                return <option value={e["_id"]}>{e["title"]}</option>;
              })}
          </select>
          {/* <input
            type='text'
            id='categoryId'
            name='categoryId'
            value={formData.categoryId}
            onChange={handleChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          /> */}
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateExpense;
