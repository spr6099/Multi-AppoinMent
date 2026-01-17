

import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, login again",
      });
    }

      const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"], // 🔐 enforce HS256
    });
// console.log("object",decoded)
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    next();
  } catch (error) {
    console.error("JWT ERROR:", error.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authUser;













// import jwt from 'jsonwebtoken'

// // user authentication middleware
// const authUser = async (req, res, next) => {
//     const { token } = req.headers
//     if (!token) {
//         return res.json({ success: false, message: 'Not Authorized Login Again' })
//     }
//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//         req.body.userId = token_decode.id
//         next()
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }

// export default authUser;
