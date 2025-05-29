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
    return new NextResponse(
      JSON.stringify({ error: "حطا در گرفتن محصولات" }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    await dbConnect();

    const lastProduct = await Product.findOne().sort({ id: -1 });
    const newId = lastProduct ? lastProduct.id + 1 : 1;
    data.id = newId;

    const newData = new Product(data);
    await newData.save();

    console.log("ذخیره با موفقیت انجام شد:", newData);
    return NextResponse.json({ status: 201, product: newData });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ status: 500, error: error.message });
  }
}
