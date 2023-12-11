import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}!`);
});