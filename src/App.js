import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Haeder/Header";
import Shop from "./Component/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Contact from "./Component/Contact/Contact";
import Faq from "./Component/Faq/Faq";
import Blog from "./Component/Blog/Blog";
import OrderPage from "./Component/OrderPage/OrderPage";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
