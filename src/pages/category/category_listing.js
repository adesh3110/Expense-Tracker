import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllCategory } from "../../services/display";
import { deleteCategory } from "../../services/delete";

const CategoryListing = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const fetchCategory = async (pageNo) => {
    const data = await getAllCategory(pageNo);
    setCategories([...categories, ...data]);
  };

  const onDelete = async (id) => {
    await deleteCategory(id);
    removeById(id);
  };
  const removeById = (id) => {
    const filtered = categories.filter((e) => e._id !== id);
    setCategories(filtered);
  };
  useEffect(() => {
    fetchCategory(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
            const categoryId = category["_id"];
            return (
              <div
                className='max-w-sm bg-white rounded-lg shadow-md overflow-hidden  mr-4 w-64 items-center justify-center '
                key={categoryId}
              >
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
                    <a href='/' className='text-blue-500 hover:underline'>
                      Read more
                    </a>
                  }
                  <button
                    onClick={() => onDelete(categoryId)}
                    className='px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 m-2'
                  >
                    Delete
                  </button>
                  <Link
                    to={`/categories/${categoryId}/edit`}
                    className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-2'
                  >
                    Edit
                  </Link>
                </div>
              </div>
            );
          })}
      </div>

      <button
        onClick={() => {
          const newPage = page + 1;
          setPage(newPage);
          fetchCategory(newPage);
        }}
      >
        Load More
      </button>
    </>
  );
};

export default CategoryListing;
