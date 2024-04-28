const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.listen(3000, () => {
//     console.log('Server is running on port 3000')
// });


//routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
     res.send("Hello from Node API Server Updated");
});

// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/products/:id', async (req,res) => {

//     try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })

// // app.post('/api/products', async(req, res) => {
// //     // res.send("Data Received");
// //     // console.log(req.body);
// //     // res.send(req.body);   //used to show the data in the thunder client

// //     try {
// //         const product = await Product.create(req.body);
// //         res.status(200).json(product);
// //     } catch (error) {
// //         res.status(500).json({message: error.message});
// //     }
// // });
// app.post('/api/products', async (req, res) => {
//     try {
//         const { name, quantity, price } = req.query; // Extract data from query parameters
//         const product = await Product.create({ name, quantity, price }); // Create new product with extracted data directly through query section of thunder client
//         res.status(201).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });



// //update a product: using PUT command
// app.put('/api/products/:id', async (req,res) => {
//     try {
//         const {id} = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if (!product) {
//             return res.status(404).json({message: "Product not found"});
//         }
      

//         const updatedProduct = await Product.findById(id);

//         res.status(200).json(product);


//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

//delete a product

// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;

//         const product = await Product.findByIdAndDelete(id);

//         if (!product) {
//             return res.status(404).json({message: "Product not found"});

//         }

//         res.status(200).json({message: "Product deleted successfully"});


//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })

mongoose.connect("mongodb+srv://trueaashi:EAqrqEvurWdEtVy5@cluster0.ujsar7l.mongodb.net/")
.then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection Failed");
});
