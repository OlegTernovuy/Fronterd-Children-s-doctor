import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { Declaration } from "./pages/Declarations/Declaration";
import { AddVac } from "./pages/addVac/AddVac";
import { Home } from "./pages/Home/Home";
import { AddPrice } from "./pages/price/AddPrice";
import { LoginPage } from "./pages/Login/LoginPage";
import { Register } from "./pages/Register/Register";
import { Appointments } from "./pages/onlineAppo/onlineappoint";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Components/Header";
import Footer from "./Components/footer";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./Redux/features/auth/authSlice";
import {
  checkIsAuth,
  isAdmin,
  isDoctor,
} from "./Redux/features/auth/authSlice";
import Statistics from "./pages/statistics/statistics";

// export const url = "http://localhost:5005";
export const url = "https://doctor-backend-6upw.onrender.com";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(checkIsAuth);
  const isAdministrator = useSelector(isAdmin);
  const isSetDoctor = useSelector(isDoctor);

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <div className="wrapper">
      <Header
        isAuth={isAuth}
        isAdministrator={isAdministrator}
        isSetDoctor={isSetDoctor}
      />
      <main className="main">
        <Routes>
          <Route index element={<Home isAuth={isAuth} />} />
          <Route
            path="addVac"
            element={<AddVac isAdministrator={isAdministrator} />}
          />
          <Route path="declaration" element={<Declaration />} />
          <Route
            path="price"
            element={<AddPrice isAdministrator={isAdministrator} />}
          />
          <Route path="loginPage" element={<LoginPage isAuth={isAuth} />} />
          <Route path="Register" element={<Register />} />
          {isAdministrator && (
            <>
              <Route path="onlineappoint" element={<Appointments />} />
              <Route path="statistics/*" element={<Statistics />} />
            </>
          )}
          {isSetDoctor && (
            <>
              <Route path="onlineappoint" element={<Appointments />} />
            </>
          )}
        </Routes>
        <ToastContainer position="bottom-right" theme="dark" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
