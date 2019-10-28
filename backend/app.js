const express = require('express');
const connectDb = require('./config/db');
const app = express();
const articles = require('./routes/api/articles');

var cors = require('cors');

// Connect Database
connectDb();
app.get('/', (req, res) => res.send('Welcome to my Blog'));
// cors
app.use(cors({ origin: true, credentials: true}));

// Init Middleware
app.use(express.json({ extended: false}));

app.use('/api/articles', articles);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));