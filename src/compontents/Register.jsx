import {  useState } from "react";
import axios from "axios";
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
          identificationNumber:identificationNumber,
          phone:phone
          });
          alert("Employee Registation Successfully");
        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>REGISTRARSE</h1>
    
    <form>
        <div class="form-group">
          <label>Nombre</label>
          <input type="text"  class="form-control" id="name" placeholder="Enter Name"
          
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
          <label>Apellido</label>
          <input type="text"  class="form-control" id="lastName" placeholder="Enter Name"
          
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
          <label>Direccion</label>
          <input type="text"  class="form-control" id="address" placeholder="Enter Name"
          
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
          <label>Identificacion</label>
          <input type="text"  class="form-control" id="identificationNumber" placeholder="Enter Name"
          
          value={identificationNumber}
          onChange={(event) => {
            setIdentificationNumber(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
          <label>Telofono</label>
          <input type="text"  class="form-control" id="phone" placeholder="Enter Name"
          
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>
        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;