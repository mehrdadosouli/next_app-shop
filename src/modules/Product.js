import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  id: { type: Number, unique: true, required: true },  // customize as needed
  description: String,
  category: String,
  image: String,
  rating: {
    rate: { type: Number, default: 0 }
  }
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);