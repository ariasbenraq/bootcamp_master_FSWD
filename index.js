const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const bandRoutes = require("./routes/bands");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use('/api', bandRoutes);

//routes
app.get('/',(req, res) => {
    res.send('Bienvenido a mi API')
})

//mongodb connection
mongoose
    // .connect('mongodb+srv://bimintatel:benraq@cluster0.ket1vej.mongodb.net/?retryWrites=true&w=majority')
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(3000,() => console.log('Server listening on port', port));