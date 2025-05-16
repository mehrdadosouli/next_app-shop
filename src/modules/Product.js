import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  rating:{
    rate:Number
  }
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);