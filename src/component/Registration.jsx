import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [firstNameError, setFirstnameError] = useState("");
  const [lastNameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  //   let regxAlpha = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
  //   const a = regxAlpha.test(password)
  //   console.log(a)

  const errorHandler1 = () => {
    setTimeout(() => {
      setFirstnameError("");
    }, 2000);
  };
  const errorHandler2 = () => {
    setTimeout(() => {
      setLastnameError("");
    }, 2000);
  };
  const errorHandler3 = () => {
    setTimeout(() => {
      setEmailError("");
    }, 2000);
  };
  const errorHandler4 = () => {
    setTimeout(() => {
      setMobileError("");
    }, 2000);
  };
  const errorHandler5 = () => {
    setTimeout(() => {
      setPasswordError("");
    }, 2000);
  };
  const errorHandler6 = () => {
    setTimeout(() => {
      setConfirmPasswordError("");
    }, 2000);
  };

  const saveHandler = () => {
    if (!firstName) {
      setFirstnameError("*Please enter first name");
      errorHandler1();
      return;
    }
    if (!lastName) {
      setLastnameError("*Please enter last name");
      errorHandler2();
      return;
    }
    if (!email) {
      setEmailError("*Please enter your email");
      errorHandler3();
      return;
    }
    const regexEmail = /^\S+@\S+\.\S+$/;
    if (!regexEmail.test(email)) {
      setEmailError("*Please enter a valid email");
      errorHandler3();
      return;
    }
    if (!mobile) {
      setMobileError("*Please enter your mobile");
      errorHandler4();
      return;
    }
    if (!password) {
      setPasswordError("*Please enter your password");
      errorHandler5();
      return;
    }
    if (password.length < 8) {
      setPasswordError("*password must be minimum 8 digits");
      errorHandler5();
      return;
    }
    let regxPassword = /.*[\W_].*/;
    if (!regxPassword.test(password)) {
      setPasswordError("*Password should contain a special character");
      errorHandler5();
      return;
    }
    let regxAlpha = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
    if (!regxAlpha.test(password)) {
      setPasswordError("*Password must contain alphanumeric character");
      errorHandler5();
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("*Password are not matching");
      errorHandler6();
      return;
    }

    let user = {
      firstName,
      lastName,
      email,
      mobile,
      password,
      confirmPassword,
    };
    localStorage.setItem("data", JSON.stringify(user));
    navigate("/login");
  };

  return (
    <div className="container">
      <h1>Registration</h1>
      <div className="cont-inp">
        <label htmlFor="">First name</label>
        <div>
          <input
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <p className="errorSty">{firstNameError}</p>
      </div>
      <div className="cont-inp">
        <label htmlFor="">Last name</label>
        <div>
          <input
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <p className="errorSty">{lastNameError}</p>
      </div>
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
        <label htmlFor="">mobile</label>
        <div>
          <input
            type="text"
            placeholder="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <p className="errorSty">{mobileError}</p>
      </div>
      <div className="cont-inp">
        <label htmlFor="">password</label>
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
      <div className="cont-inp">
        <label htmlFor="">confirm password</label>
        <div>
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <p className="errorSty">{confirmPasswordError}</p>
      </div>
      <button className="btn" onClick={saveHandler}>
        Save
      </button>
    </div>
  );
};

export default Registration;
