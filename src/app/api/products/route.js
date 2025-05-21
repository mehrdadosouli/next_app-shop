import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Product from "../../../modules/Product";

export async function GET(req) {
  const url = new URL(req.url);
  const searchTerm = url.searchParams.get("category");
  
  try {
    await dbConnect();
    let products;
    if (!searchTerm || searchTerm === "undefined") {
      products = await Product.find({});
    } else {
      products = await Product.find({ category: searchTerm });
    }
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new NextResponse(
      JSON.stringify({ error: "حطا در گرفتن محصولات" }),
      { status: 500 }
    );
  }
}