import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Register.css'; // Asegúrate de tener el archivo de estilo

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [phone, setPhone] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/store/save", {
        name: name,
        email: email,
        password: password,
        lastName: lastName,
        address: address,
        identificationNumber: identificationNumber,
        phone: phone
      });
      alert("Employee Registration Successfully");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="register-container">
      <div className="register-box">
        {/* Logo y Título */}
        <div className="logo-container">
          <img src="https://cdn-icons-png.flaticon.com/512/8995/8995936.png" alt="Logo" className="logo" />
          <h2>Register Your Account</h2>
        </div>

        <form onSubmit={save}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Identification Number</label>
            <input
              type="text"
              className="form-control"
              id="identificationNumber"
              placeholder="Enter Identification Number"
              value={identificationNumber}
              onChange={(event) => setIdentificationNumber(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
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
          <button type="submit" className="btn btn-primary mt-4">Save</button>
        </form>

        <div className="login-link">
          <Link to="/">Already have an account? Login here</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;