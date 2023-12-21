import { Schema, model } from 'mongoose';

const formSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
    },
    sem: {
      type: String,
      required: true,
    },
    where: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    transport: {
      type: String,
      required: true,
    },
    outtime: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    ownResponsibility: {
      type: Boolean,
      default: false,
    },
    isUsed: {
      type: Boolean,
      default: false,
    },
    isAccepted: {
      type: Boolean,
    },
    otp: {
      type: String
    },
    rejectReason: {
      type: String
    }

  },
  { timestamps: true },
);

const Form = model('form', formSchema);

export default Form;
