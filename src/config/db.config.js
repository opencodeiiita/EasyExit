import mongoose from 'mongoose';

export default function connDB() {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log('connected to db');
    });
}
