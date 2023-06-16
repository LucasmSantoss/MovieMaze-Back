import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(' ')[1]
  console.log({authHeader, token : req.headers})


  if (token == null) return res.sendStatus(401)
  

  jwt.verify(token, process.env.SECRET, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}
export default authenticateToken