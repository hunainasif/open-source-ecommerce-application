 import connectToDb from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import Order from "@/models/Order"; // Adjust the path as necessary

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request:NextRequest,response:NextResponse, { params }:{params:{orderId:string}}) {
  const { orderId } = params;

  await connectToDb();

  try {
    const order = await Order.findById(orderId);

    if (order) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: order.totalAmount * 100, // Use order.totalAmount instead of order.price
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

       order.intent_id = paymentIntent.id;
      await order.save();

      return new NextResponse(
        JSON.stringify({ clientSecret: paymentIntent.client_secret }),
        { status: 200 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Order not found!" }),
      { status: 404 }
    );
  } catch (error:any) {
    return new NextResponse(
      JSON.stringify({ message: "Error processing payment", error: error.message }),
      { status: 500 }
    );
  }
}
