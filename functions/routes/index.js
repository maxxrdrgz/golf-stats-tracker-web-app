var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    // res.send("Hello from Firebase!");
    res.render("index")
})

module.exports = router;
