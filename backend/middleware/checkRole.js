export default function checkRole(role) {
  return function (req, res, next) {
    if (req.user && req.user.roles.includes(role)) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };
}