import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    
}, { timestamps: true });

const User = model('user', userSchema);

export default User;