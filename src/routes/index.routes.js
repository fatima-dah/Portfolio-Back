const router = require("express").Router();

const homeRouter = require("./home.routes.js");

 

router.use("/homes", homeRouter);



module.exports = router;
