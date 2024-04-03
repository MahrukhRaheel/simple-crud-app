const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);


// Use dynamic port assignment
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Node API Server");
});

mongoose.connect("mongodb+srv://mahrukhraheel18:rzABj9XDEBMKYbjr@backenddb.srnxaqy.mongodb.net/Node-API")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Connection to MongoDB failed:", error);
    });
