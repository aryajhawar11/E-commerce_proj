import multer from "multer";

import {v2 as cloudinary} from "cloudinary";
import productModel from "../models/productModel.js";


//function for add product 
const addProduct = async (req, res) => {
    try {


        const{ name, price, description, category, subcategory, sizes, bestseller } = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images=[image1, image2, image3, image4].filter((item)=> item!== undefined);
        
        let imagesurl= await Promise.all(
            images.map(async (image) => {
                const url = await cloudinary.uploader.upload(image.path, {resource_type: "image"});
            return url.secure_url;
            })
        );
        
        const productData = {
            name,
            description,
            category,
            subcategory,
            price: Number(price),
            bestSeller: bestseller === "true"? true : false,
            sizes: JSON.parse(sizes),
            image: imagesurl,
            date: Date.now()
        };

        console.log("Product Data:", productData);
        const newProduct = new productModel(productData);
        await newProduct.save();

        res.status(200).json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ success: false, message: error.message });

        
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
const removeProduct = async (req, res) => { 
    await productModel.findByIdAndDelete(req.body.id)
    .then(() => {
        res.status(200).json({ success: true, message: "Product removed successfully" });
    }).catch((error) => {
        console.error("Error removing product:", error);
        res.status(500).json({ success: false, message: error.message });
    });
}

// function for single product information
const singleProduct = async (req, res) => { 
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.status(200).json({ success: true, product });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}


export {
    addProduct,
    listProducts,
    removeProduct,
    singleProduct
};