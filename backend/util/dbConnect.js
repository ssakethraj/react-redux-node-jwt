import dotenv from 'dotenv/config';
import mongoose from 'mongoose';

export default () => mongoose.connect(process.env.MONGO_HOST, {useNewUrlParser: true});
