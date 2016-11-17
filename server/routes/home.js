const express = require("express");
const router = express.Router();

const templates = require("../../views/inputs");

router.get("/", (req, res) => {
    res.render("home", {
        title: "LB 風險",
        sheet: [
            {
                type: "text",
                title: "單行文字",
            },
            {
                type: "checkbox",
                title: "多選盒",
            },
            {
                type: "radio-button",
                title: "單選按鈕",
            },
            {
                type: "select",
                title: "下拉選單",
            },
            {
                type: "multiple-select",
                title: "多重下拉選單",
            },
            {
                type: "text-area",
                title: "多行文字",
            },
            {
                type: "file",
                title: "檔案上傳",
            }
        ]
    });
});

module.exports = router;
