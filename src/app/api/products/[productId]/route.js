import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Product from "../../../../modules/Product";

export async function GET(req, { params }) {
  await dbConnect();
  const { productId } = params; 
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    return NextResponse.json({ error: "محصول پیدا نشد" }, { status: 404 });
  }

  return NextResponse.json(product);
}
