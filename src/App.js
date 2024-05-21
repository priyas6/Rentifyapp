import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Components/Register';
import MyProperties from './Components/SellerHome';
import Home from './Components/Home';
import BuyerHome from "./Components/BuyerHome";
import NewProperty from './Components/NewProperty';
import Login from './Components/Login'
function App() {
  return (
    <>
          <BrowserRouter>
              <Routes>
                <Route exact path="/"element={<Home />}/>
                <Route exact path="/login"element={<Login />}/>
                  <Route exact path="/register" element={<Register />}/>
                  <Route exact path="/NewProperty" element={<NewProperty/>}/>
                  <Route exact path="/Buyer/Properties" element={<BuyerHome/>}/>
                  <Route exact path="/MyProperties" element={<MyProperties/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
