import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  let login, register;
  const [isLogin, setIsLogin] = useState(false);
  const [registerCreds, setRegisterCreds] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [logInCreds, setLogInCreds] = useState({
    email: "",
    password: "",
  });

  const handleFirstName = (event) => {
    setRegisterCreds((prevState) => {
      return { ...prevState, firstName: event.target.value };
    });
  };

  const handleLastName = (event) => {
    setRegisterCreds((prevState) => {
      return { ...prevState, lastName: event.target.value };
    });
  };

  const handleEmail = (event) => {
    setRegisterCreds((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const handlePassword = (event) => {
    setRegisterCreds((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };

  const onRegister = () => {
    sessionStorage.setItem('registerEmail', registerCreds.email);
    sessionStorage.setItem('registerPassword', registerCreds.password);
    setIsLogin(true)
    alert(`you have successfully register!
    Please LogIn to proceed.
    `);
  };

  const onLogIn = () => {
    let email, pass;
    email = sessionStorage.getItem('registerEmail');
    pass = sessionStorage.getItem('registerPassword');
    if(email === logInCreds.email && pass === logInCreds.password){
      sessionStorage.setItem('authToken', true)
      navigate('/home')
    } else {
      alert('Credentials are not matched!');
    }
  };

  login = (
    <>
      <input
        className="form-control"
        type="email"
        value={logInCreds.email}
        onChange={(e) => {
          setLogInCreds((prevState) => {
            return { ...prevState, email: e.target.value };
          });
        }}
        name="username"
        placeholder="E-mail Address"
      />
      <input
        className="form-control"
        type="password"
        value={logInCreds.password}
        onChange={(e) => {
          setLogInCreds((prevState) => {
            return {
              ...prevState,
              password: e.target.value,
            };
          });
        }}
        name="passworduser"
        placeholder="Password"
      />
      <div className="form-button">
        <button id="submit" type="submit" className="ibtn" onClick={onLogIn} disabled={logInCreds.email === '' || logInCreds.password === ''}>
          Login
        </button>
      </div>
    </>
  );
  register = (
    <>
      <input
        onChange={handleFirstName}
        className="form-control"
        type="text"
        value={registerCreds.firstName}
        placeholder="First Name"
        name="firstName"
      />
      <input
        className="form-control"
        type="text"
        value={registerCreds.lastName}
        placeholder="Last Name"
        name="lastName"
        onChange={handleLastName}
      />
      <input
        className="form-control"
        type="email"
        name="email"
        onChange={handleEmail}
        value={registerCreds.email}
        placeholder="E-mail Address"
      />
      <input
        className="form-control"
        type="password"
        name="password"
        onChange={handlePassword}
        value={registerCreds.password}
        placeholder="Password"
      />
      <div className="form-button">
        <button id="submit" type="submit" className="ibtn" onClick={onRegister} 
        disabled={registerCreds.firstName === '' || registerCreds.lastName === '' || registerCreds.email === '' || registerCreds.password === ''}>
          Register
        </button>
      </div>
    </>
  );
  return (
    <form className="form_wrapper" onSubmit={(e) => e.preventDefault()}>
      <div className="switch_wrap">
        <h2
          className={!isLogin ? "active" : ""}
          onClick={() => {
            setIsLogin(false);
          }}
        >
          Register
        </h2>
        <h2
          className={isLogin ? "active" : ""}
          onClick={() => {
            setIsLogin(true);
          }}
        >
          LogIn
        </h2>
      </div>
      {isLogin ? login : register}
    </form>
  
  );
};

export default LogIn;
