import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./component/scrollTop/ScrollTop";
import CartPage from "./component/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./component/admin/UpdateProductPage";
import MyState from "./component/context/myState";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <MyState>
      <Router>
      <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo" element={<ProductInfo/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="user-dashboard" element={<UserDashboard/>}/>
          <Route path="admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="addproduct" element={<AddProductPage/>}/>
          <Route path="updateproduct" element={<UpdateProductPage/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </MyState>
  );
}

export default App;