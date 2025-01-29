import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import * as Sentry from '@sentry/node'; // Correct import statement
import connectDB from './DB/db.js';
import adminAuthRoutes from './routes/admin/adminAuth.routes.js';
import './instrument.js'; // Setup Sentry for error handling

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/admin/auth', adminAuthRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('I am alive');
});

connectDB();

const port = process.env.PORT || 8000;
Sentry.setupExpressErrorHandler(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
