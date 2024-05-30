import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import RegistrationPage from "./pages/register";
import AuthLayout from "./layouts/auth_layout";
import Profile from "./pages/profile";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path='/' element={<Login />}></Route>
            <Route path='register' element={<RegistrationPage />}></Route>
          </Route>
          <Route path='profile' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
