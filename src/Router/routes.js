import { Routes, Route, Navigate } from "react-router-dom";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Checkout from "../pages/Checkout";
import PaymentCheckout from "../pages/PaymentCheckout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"products"} />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="payment" element={<PaymentCheckout />} />
    </Routes>
  )
}

export default Routers;
