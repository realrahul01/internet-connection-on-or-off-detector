import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const errorHandler1 = () => {
    setTimeout(() => {
      setEmailError("");
    }, 2000);
  };
  const errorHandler2 = () => {
    setTimeout(() => {
      setPasswordError("");
    }, 2000);
  };

  const navigate = useNavigate()

  const regexEmail = /^\S+@\S+\.\S+$/
  let value = JSON.parse(localStorage.getItem("data"));
  const loginHandler = () => {
    if (!email) {
      setEmailError("*Please enter the email");
      errorHandler1();
      return;
    }
    if(!regexEmail.test(email)){
        setEmailError('*Please enter a valid email')
        errorHandler1();
        return;
    }
    if (!password) {
      setPasswordError("*Please enter the password");
      errorHandler2();
      return;
    }
    if (value.email === email) {
      alert("Successfully Login");
      navigate('/')
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="cont-inp">
        <label htmlFor="">Email</label>
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className="errorSty">{emailError}</p>
      </div>
      <div className="cont-inp">
        <label htmlFor="">Password</label>
        <div>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="errorSty">{passwordError}</p>
      </div>
      <button className="btn" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
};
export default Login;
