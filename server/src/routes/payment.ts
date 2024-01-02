import express=require("express");
const app = express.Router();
import {createPaymentIntent} from "../controllers/payment.js"
app.post("/create", createPaymentIntent);
export default app;