import jwt from "jsonwebtoken";

const authDoctor = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, login again",
      });
    }
    const dtoken = authHeader.split(" ")[1];

    const decoded = jwt.verify(dtoken, process.env.JWT_SECRET, {
      algorithms: ["HS256"], // 🔐 enforce HS256
    });

    // req.body.docId = token_decode.id;
    req.user = {
      id: decoded.id,
      //   role: decoded.role,
    };
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authDoctor;
