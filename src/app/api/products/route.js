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
export async function DELETE(req) {
  
  try {
    await dbConnect();
    
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ status: 400, message: 'شناسه محصول ارسال نشده' });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json({ status: 404, message: 'محصولی با این شناسه پیدا نشد' });
    }

    return NextResponse.json({ status: 200, message: 'محصول با موفقیت حذف شد', product: deletedProduct });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ status: 500, error: error.message });
  }
}

export async function PUT(req) {
  try {
    await dbConnect();

    const data = await req.json();
    const { id, ...updateFields } = data;

    if (!id) {
      return NextResponse.json({ status: 400, message: 'شناسه محصول ارسال نشده است' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedProduct) {
      return NextResponse.json({ status: 404, message: 'محصولی با این شناسه پیدا نشد' });
    }

    return NextResponse.json({ status: 200, message: 'محصول با موفقیت ویرایش شد', product: updatedProduct });
  } catch (error) {
    console.error('خطا در ویرایش محصول:', error);
    return NextResponse.json({ status: 500, error: error.message });
  }
}
