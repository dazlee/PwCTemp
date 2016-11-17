const express = require("express");
const router = express.Router();

const templates = require("../../views/inputs");

router.get("/", (req, res) => {
    res.render("home", {
        sheet: [
            {
                type: "text",
                title: "vvv",
            },
            {
                type: "text",
                title: "kkk",
            }
        ]
    });
});

module.exports = router;
