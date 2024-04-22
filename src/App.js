import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./compontents/Register";
import Login from "./compontents/Login";
import Home from "./compontents/Home";
import Cart_class from "./compontents/Cart_class";

function App() {
  return (
    <div>
           <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
              <Route path="/Cart_class" element= { <Cart_class/>} />
        
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
