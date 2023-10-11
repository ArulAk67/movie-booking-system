
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";

dotenv.config();

const app = express();

app.use(express.json()); // You missed the parentheses here
app.use(cors());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.8jaj7iq.mongodb.net/?retryWrites=true&w=majority`, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
.then(() => {
    app.listen(5500, () => {
        console.log("Listening..");
    });
})
.catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error);
});

