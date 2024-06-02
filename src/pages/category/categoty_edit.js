import React, { useEffect, useState } from "react";
import { updateCategory } from "../../services/create";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryById } from "../../services/display";

export default function EditCategory() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCategory(id, formData);
    navigate("/categories");
  };

  const fetchCategory = async () => {
    const data = await getCategoryById(id);
    setFormData({
      title: data["title"],
      description: data["description"],
      imageUrl: data["imageUrl"],
    });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <div className='flex items-center justify-center min-h-screen '>
        <form
          onSubmit={handleSubmit}
          className='max-w-lg w-full p-4 bg-white  border shadow-md rounded-md '
        >
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-gray-700 font-bold mb-2'
            >
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
              htmlFor='categoryId'
              className='block text-gray-700 font-bold mb-2'
            >
              Image
            </label>
            <input
              type='text'
              id='imageUrl'
              name='imageUrl'
              value={formData.imageUrl}
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
