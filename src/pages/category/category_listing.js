import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategory } from "../../services/display";

const CategoryListing = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const fetchCategory = async () => {
    const data = await getAllCategory();
    setCategories(data);
    console.log(categories);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className>
      <button
        className='w-full bg-blue-500 text-white font-bold py-4 px-8 mt-8 mb-8 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        onClick={() => {
          navigate("create-category");
        }}
      >
        Create Category
      </button>
      <div className='flex  gap-[15px] flex-wrap  '>
        {categories &&
          categories.map((category) => {
            return (
              <div className='max-w-sm bg-white rounded-lg shadow-md overflow-hidden  mr-4 w-64 items-center justify-center '>
                <img
                  className='w-full h-48 object-cover'
                  src={category.imageUrl}
                  alt={category.title}
                />
                <div className='p-4'>
                  <h2 className='text-xl font-bold text-gray-900 mb-2'>
                    {category.title}
                  </h2>
                  <p className='text-gray-700 mb-4'>{category.description}</p>
                  {
                    <a href='#' className='text-blue-500 hover:underline'>
                      Read more
                    </a>
                  }
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryListing;
