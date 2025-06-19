import multer from "multer";

// Set up multer storage
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// Initialize multer
const upload = multer({ storage });

export default upload;
