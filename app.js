// const dotenv = require('dotenv');
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
// const express = require('express');
// const cors = require('cors');

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

import connDB from './src/config/db.config.js';
// import User from '../models/user.model.js';
// const connDB = require('./config/db.config.js');
connDB();
// conn
// connDB();
// const authRoutes = require('authRoutes');
import authRoutes from './src/routes/auth.routes.js';
app.use('/', authRoutes);

// const studentRoutes = require('studentRoutes');
import studentRoutes from './src/routes/student.routes.js';
app.use('/student', studentRoutes);

// const adminRoutes = require('adminRoutes');
import adminRoutes from './src/routes/admin.routes.js';
app.use('/admin', adminRoutes);

// const guardRoutes = require('guardRoutes');
import guardRoutes from './src/routes/guard.routes.js';
app.use('/guard', guardRoutes);


app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}!`);
});