const LogIn = require("../app/user/loginUserTable");
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = new Router();

const privateKey = "stipe";

router.post("/login", (req, res) => {
  const { usernameMail, password } = req.body;
  LogIn.login(usernameMail, password)
    .then(resp => {
      if (resp.length === 0) {
        res.json({ message: "Auth failed" });
      } else {
        let token = jwt.sign(
          {
            username: resp[0].username
          },
          privateKey
        );

        res.json({ token, message: "Auth success" });
      }
    })
    .catch(err => console.error(err));
});

module.exports = router;
