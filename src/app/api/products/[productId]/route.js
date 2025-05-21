import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Product from "../../../../modules/Product";

export async function GET(req, { params }) {
  const { productId } =await params;
  await dbConnect();
  console.log(await params);
  
  const product = await Product.findOne({ id: Number(productId) });

  if (!product) {
    return NextResponse.json({ error: "محصول پیدا نشد" }, { status: 404 });
  }

  return NextResponse.json(product);
}