import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authandcheckRole from "./middleware/authandcheckRole.js";
import {
  userAuthRouter,
  userRouter,
  vendorRouter,
  foodItemsRouter,
} from "./routes/routes.js";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import Stripe from "stripe";


const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))

const startServer = async () => {
  await connectDB();
  const baseURL = "/api/v1";
  app.use(`${baseURL}/auth`, userAuthRouter);
  app.use(`${baseURL}/user`, authandcheckRole("user"), userRouter);
  app.use(`${baseURL}/vendor`, authandcheckRole("vendor"), vendorRouter);
  app.use(`${baseURL}/fooditems`, foodItemsRouter);
  app.post("/checkout-session", async (req, res) => {
    const { products } = req.body;
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          description: product.description
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }))
    const session = await Stripe.Checkout.session.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payments',
      success_url: "http://localhost:5173/successfullpayment",
      cancel_url: "http://localhost:5173/cancelpayment"
    })
    res.json({id: session.id})
  })

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT ${process.env.PORT}`);
  });
};

startServer();
