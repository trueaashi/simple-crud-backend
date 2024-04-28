const Product = require('../models/product.model');




const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createProduct = async (req, res) => {
    //     try {
    //     const product = await Product.create(req.body);
    //     res.status(200).json(product);
    // } catch (error) {
    //     res.status(500).json({message: error.message});
    // }
    try {
        const { name, quantity, price } = req.query; // Extract data from query parameters
        const product = await Product.create({ name, quantity, price }); // Create new product with extracted data
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }
      

        const updatedProduct = await Product.findById(id);

        res.status(200).json(product);


    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({message: "Product not found"});

        }

        res.status(200).json({message: "Product deleted successfully"});


    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getProducts, 
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};