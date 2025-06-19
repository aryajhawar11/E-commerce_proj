import multer from "multer";

//function for add product 
const addProduct = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

//function to list product
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json({ success: true, products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// function to remove product
const removeProduct = async (req, res) => { }

// function for single product information
const singleProduct = async (req, res) => { }


export {
    addProduct,
    listProducts,
    removeProduct,
    singleProduct
};