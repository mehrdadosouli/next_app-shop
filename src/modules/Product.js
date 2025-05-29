import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: String,
  image: String,
  rating: {
    rate: { type: Number, default: 0 }
  }
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', productSchema);