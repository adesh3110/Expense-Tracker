import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import RegistrationPage from "./pages/register";
import AuthLayout from "./layouts/auth_layout";
import Profile from "./pages/profile";
import MainLayout from "./layouts/main_layout";
import ExpenseListing from "./pages/expenses/expense_listing";
import CreateExpense from "./pages/expenses/create_expenses";
import CategoryListing from "./pages/category/category_listing";
import CreateCategory from "./pages/category/create_category";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path='/' element={<Login />}></Route>
            <Route path='register' element={<RegistrationPage />}></Route>
          </Route>
          <Route element={<MainLayout />}>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='expenses' element={<ExpenseListing />}></Route>
            <Route path='categories' element={<CategoryListing />}></Route>
            <Route
              path='expenses/create-expense'
              element={<CreateExpense />}
            ></Route>
            <Route
              path='categories/create-category'
              element={<CreateCategory />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
