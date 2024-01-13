import {
    response_200,
    response_500,
} from '../utils/responseCodes.js';
import Form from '../models/form.model.js';
import nodemailer from 'nodemailer';
import User from '../models/user.model.js';

// Load environment variables
require('dotenv').config();

// Configure nodemailer using environment variables
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Assuming you are using Gmail as the email service
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL, // Your email address from environment variable
        pass: process.env.PASS // Your app password from environment variable
    }
});

// Verify transporter configuration
transporter.verify(function (err, success) {
    if (err) {
        console.error('Error verifying email transporter:', err);
        return;
    }
    console.log('Email transporter is ready to send emails');
});

export async function pendingPasses(req, res) {
    try {
        const pendingForms = await Form.find({ isAccepted: null });
        return response_200(res, 'Pending outpasses fetched successfully', pendingForms);
    } catch (error) {
        return response_500(res, 'Error fetching pending outpasses', error);
    }
}

export async function acceptedPasses(req, res) {
    try {
        const acceptedForms = await Form.find({ isAccepted: true });
        return response_200(res, 'Accepted outpasses fetched successfully', acceptedForms);
    } catch (error) {
        return response_500(res, 'Error fetching accepted outpasses', error);
    }
}

export async function rejectedPasses(req, res) {
    try {
        const rejectedForms = await Form.find({ isAccepted: false });
        return response_200(res, 'Rejected outpasses fetched successfully', rejectedForms);
    } catch (error) {
        return response_500(res, 'Error fetching rejected outpasses', error);
    }
}
