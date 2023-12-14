import { Schema, model } from 'mongoose';

const formSchema = new Schema(
  {
    
  },
  { timestamps: true },
);

const Form = model('form', formSchema);

export default Form;