import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    passwordHash:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required:true
    }
}, { timestamps: true });

const User = model('user', userSchema);

export default User;
