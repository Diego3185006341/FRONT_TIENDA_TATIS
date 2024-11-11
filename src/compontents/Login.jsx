import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
import './Login.css'; // Asegúrate de tener el archivo de estilo

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/store/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res.data);
        if (res.data.message === "Email not exists") {
          alert("Email not exists");
        } else if (res.data.message === "Login Success") {
          navigate('/home');
        } else {
          alert("Incorrect Email and Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo y Título */}
        <div className="logo-container">
          <img src="https://cdn-icons-png.flaticon.com/512/8995/8995936.png" alt="Logo" className="logo" />
          <h2>Welcome to Your Store</h2>
        </div>
        
        <form onSubmit={login}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className="signup-link">
          <Link to="/Register">Don't have an account? Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;