import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);