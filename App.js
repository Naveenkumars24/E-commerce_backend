const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://naveenkumars2022ece:Naveen2418kumar_@mariocluster.69pxs.mongodb.net/E-commerce").then(() => {
    console.log("Connected to MongoDB");
});

app.use('/products',productRoutes);
app.use('/user',userRoutes);
app.use('/cart',cartRoutes);
app.use('/order',orderRoutes);

app.listen(3000,() => {
    console.log("App listening on port : 3000");
});