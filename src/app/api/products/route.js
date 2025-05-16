import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Product from "../../../modules/Product";

export async function GET(req) {
  const url=new URL(req.url)  
  
  const query = url.searchParams;
  const searchTerm = query.get("category");  
  console.log(req);
  
  try {
    await dbConnect();
    let products 
    if (searchTerm) {    
      console.log(searchTerm);
       
       products = await Product.find({category:searchTerm});
    }else{
       products = await Product.find({});
    }
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({error:"حطا در گرفتن محصولات"});
  }
}
