import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Category from "../../../modules/Category";

export async function GET() {
  try {
    await dbConnect();
    const category = await Category.find({});  
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({error:"حطا در گرفتن دسته بندی"});
  }
}
