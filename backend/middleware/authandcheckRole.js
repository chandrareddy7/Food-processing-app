import jwt from "jsonwebtoken"

export default function authandcheckRole(role) {
  return function (req, res, next) {
    const token = req.cookies.token;
    console.log(req.headers['authorization']);
    
    
    if (!token) {
      return res.status(401).json({ message: "Please signin to view this page" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (decoded.role && decoded.role.includes(role)) {
        req.user = decoded;
        next();
      } else {
        res.status(403).json({ message: "Forbidden" });
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      res.status(403).json({ message: "Forbidden" });
    }
  };
}