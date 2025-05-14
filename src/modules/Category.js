import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  category: String,
});

export default mongoose.models.categories || mongoose.model('categories', categorySchema);