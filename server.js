const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const dnaRoutes = require('./routes/DnaRoutes');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/', dnaRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
