import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Product from "../../../modules/Product";

export async function GET(req) {
  const url=new URL(req.url)  
  
  const query = url.searchParams;
  const searchTerm = query.get("category");  
  try {
    await dbConnect();
    let products 
    if (searchTerm) {
       products = await Product.find({category});
    }else{
       products = await Product.find({});
    }
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({error:"حطا در گرفتن محصولات"});
  }
}
