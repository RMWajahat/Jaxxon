import { Routes, Route, Navigate } from "react-router-dom";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Checkout from "../pages/Checkout";
import PaymentCheckout from "../pages/PaymentCheckout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Routers = () => {
  const stripekey = "pk_test_51NSNJfK5jFmIR9ElOjj4STpJI0aVKMH0i03dG5KM4cuLUvpV31hc8UMpE1DlJiYPxip50pLsl3hbezYSMipsdXJU007BaEo7ni";
  const stripePromise = loadStripe(stripekey);

  return (
    <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/" element={<Navigate to={"products"} />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="checkout/:productid" element={<Checkout />} />
        <Route path="payment" element={<PaymentCheckout />} />
      </Routes>
    </Elements>
  );
};

export default Routers;
