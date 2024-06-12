// pages/api/orders/[intentId].js
import connectToDb from "@/utils/db";
import Order from "@/models/Order"; // Adjust the path as necessary
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request:NextRequest, { params }:{params:{intentId:string}}) => {
  const { intentId } = params;

  await connectToDb();

  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { intent_id: intentId },
      { orderStatus: "Processing" },
      { new: true }
    );

    if (!updatedOrder) {
      return new NextResponse(
        JSON.stringify({ message: "Order not found!" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
