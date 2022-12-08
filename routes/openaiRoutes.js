const express = require("express");
const { generateImage } = require('../controller/openaiController')
const router = express.Router();

router.post("/generateimage", generateImage);
router.post("/test", (req, res) => {
    res.status(200).json({
        success: true
    })
})

module.exports = router;
