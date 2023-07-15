import { Form } from "./Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/features/auth/authSlice";
import { toast } from "react-toastify";

import { useEffect } from "react";

export const SignUp = () => {
  const history = useNavigate();
  const { status, user } = useSelector((state) => state.auth);
  console.log(status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (status == "Користувач успішно створений") {
      history("/loginPage");
    }
  }, [status]);

  const handleRegister = (username, password) => {
    try {
      dispatch(registerUser({ username, password }));
    } catch (err) {
      console.log(err);
    }
  };
  return <Form title="register" handleClick={handleRegister} />;
};
