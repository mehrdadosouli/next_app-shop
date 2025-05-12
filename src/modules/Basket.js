import mongoose from 'mongoose';

const basketSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

export default mongoose.models.Basket || mongoose.model('Basket', basketSchema);