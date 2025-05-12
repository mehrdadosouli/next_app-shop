import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import Basket from '../../../modules/Basket';

export async function GET() {
  await dbConnect();
  const basketItem = await Basket.find({});
  return NextResponse.json(basketItem);
}