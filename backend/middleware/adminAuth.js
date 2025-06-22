import jwt from 'jsonwebtoken';


const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers;
        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ success: false, message: "Access denied" });
        }

        next();
    } catch (error) {
        console.error("Admin authentication error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
export default adminAuth;

