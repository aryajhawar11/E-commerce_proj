import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';


//App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());
connectDB()
connectCloudinary();



// Routes
app.use('/api/user',userRouter);
app.use('/api/product', productRouter); // Assuming admin routes are handled in the same router
app.use('/api/cart', cartRouter); 

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});