const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = 8080;

app.use(express.json());

mongoose
.connect('mongodb://0.0.0.0:27017/userApp')
.then(() => console.log("Connection with database established successfully"))
.catch((err) => console.log('ERROR CONNECTING WITH DATABASE', err));

app.use(userRoutes);

app.use(authMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
