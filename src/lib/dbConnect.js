import mongoose from 'mongoose';

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  // return mongoose.connect('mongodb://localhost:27017/next-app', {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default dbConnect;
