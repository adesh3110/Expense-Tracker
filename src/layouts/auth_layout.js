import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      <div className='w-full h-screen flex'>
        <div className=' bg-indigo-600 w-6/12 h-full'>
          <p className=' text-5xl   justify-center text-center  bg-indigo-600  font-bold  mt-6'>
            Expense Manager
          </p>
          <div className='flex justify-center items-center mt-32 h-3/6 bg-red-200 relative'>
            <img src='expense_track.jpeg' alt='' className=' object-cover ' />
          </div>
        </div>
        <div className='w-6/12 h-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
