import jwt from 'jsonwebtoken'

const authUser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, login again' })
  }

  try {
    const token_decode= jwt.verify(token, process.env.JWT_SECRET)
    req.body.userId = token_decode.id
    next()
    
  } catch (error) {
    console.log(error)
    res.status(401).json({ success: false, message: error.message })
  }
  
  }

  export default authUser;

