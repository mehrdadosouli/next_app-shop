import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // دیگر فیلدها بر اساس فایل جیسون
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);