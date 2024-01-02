
import { Request,Response,NextFunction } from "express";
import { stripe } from "../index.js";
export const createPaymentIntent = async (req:Request, res:Response, next:NextFunction) => {
   try{
    const { amount } = req.body;
  
    if (!amount) return next(new Error("Please enter amount"));
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
    });
  
    return res.status(201).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });
   }catch(error){
    console.log(error);
   }
  };
  