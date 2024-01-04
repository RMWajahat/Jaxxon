import { Icon } from "@iconify/react";
import logo from "../assets/logo.svg";
import axios from "axios"
import { useRef, useState } from "react";
import { PaymentElement } from '@stripe/react-stripe-js';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const PaymentCheckout = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const stripePromise = loadStripe('pk_test_51NSNJfK5jFmIR9ElOjj4STpJI0aVKMH0i03dG5KM4cuLUvpV31hc8UMpE1DlJiYPxip50pLsl3hbezYSMipsdXJU007BaEo7ni');
  const paybtn=useRef(null);
  const handleSubmission=async(e)=>{
    e.preventDefault();
    paybtn.current.disabled = true;
    try{
      const config = {
        withCredentials: true, 
        headers: {
          "Content-Type": "application/json"
        }
      }
      const totalAmount={
        amount:5000
      };
      const { data } = await axios.post(`http://localhost:3000/api/v1/payment/create`, totalAmount, config);
      const client_secret = data.clientSecret;
      if (!stripe || !elements) {
        return;
      }
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: firstname,
            email: email,
            address: {
              line1: address,
              country: "US"
            }
          }
        }
      })
      
      if (result.error) {
        paybtn.current.disabled = false;
        console.log(result.error.message)
        alert(result.error.message)
      } else {
        alert("Payment Successfull & Order Placed ✔️  ")
      }

    }catch(error){
    
    }
  }
  return (
      <div className="paymentcheckout">
        <form action="#" className="paymentstripe">
          <div className="payhead">
            <img src={logo} alt="company logo" />
            <small>Cart <Icon className="nextis" icon="maki:arrow" /> Payment</small>
          </div>
          <div className="contactarea">
            <h1 className="contacttag">Contact</h1>
            <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
            <div className="keepuptodate">
              <input type="checkbox" name="uptodate" id="" />
              <small>Keep me up to date on news and exclusive offers</small>
            </div>
          </div>


          <div className="cardinfo">
            <h1 className="cardinfotag">Card Information</h1>
            <CardNumberElement
              className="CardNumberElement"
            />
            <div className="keepuptodate carddata">
              <CardCvcElement
                className="card-cvc-element"
              />
              <CardExpiryElement
                className="card-expiry-element"

              />
            </div>
          </div>

          <div className="shipping_details">
            <h1 className="contacttag">Shipping address</h1>
            <input
            type="text"
            name="fname"
            id="firstname"
            placeholder="First name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            autoComplete="off"
          />
          <input
            type="text"
            name="lname"
            id="lastname"
            placeholder="Last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            autoComplete="off"
          />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            autoComplete="off"
          />
            <input type="text" name="number" id="number" pattern="[0-9]+" placeholder="Mobile Phone Number" required autoComplete="off" />
            <div className="keepuptodate">
              <input type="checkbox" name="savedata" id="" />
              <small>Save information for next time</small>
            </div>
            <div className="keepuptodate">
              <input type="checkbox" name="notify" id="" required />
              <small>Yes, I would like to recieve shipment notifications.</small>
            </div>
          </div>
          <button
  style={{
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }}
  onClick={handleSubmission}
  ref={paybtn}
>
  Place Order
</button>

        </form>
      </div>
  )
}

export default PaymentCheckout
