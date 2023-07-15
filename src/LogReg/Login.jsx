import { Form } from "./Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/features/auth/authSlice";

import { useEffect } from "react";

export const Login = ({ isAuth }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (isAuth) {
      history("/");
    }
  }, [status, isAuth, history]);

  const handleLogin = (username, password) => {
    try {
      dispatch(loginUser({ username, password }));
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return <Form title="sign in" handleClick={handleLogin} />;
};
