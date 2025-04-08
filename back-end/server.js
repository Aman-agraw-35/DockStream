import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import { foodRouter } from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

import client from 'prom-client'; // 🔥 Prometheus client

const app = express();
const port = process.env.PORT || 4000; // Always use capitalized PORT in env

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// Prometheus setup
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics(); // Collect default Node.js metrics

// Custom metric example (count total requests)
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
});

app.use((req, res, next) => {
  httpRequestCounter.inc(); // Increment on each request
  next();
});

// API endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.get('/', (req, res) => {
  res.send("API working!");
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://0.0.0.0:${port}`);
});
