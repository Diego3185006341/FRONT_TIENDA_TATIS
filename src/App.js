import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./compontents/Register";
import Login from "./compontents/Login";
import Home from "./compontents/Home";
import Cart_class from "./compontents/Cart_class";
import Authorizedproducts from "./compontents/Authorizedproducts"
function App() {
  return (
    <div>
           <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
              <Route path="/Cart_class" element= { <Cart_class/>} />
              <Route path="/Authorizedproducts" element= { <Authorizedproducts/>} />
        
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
