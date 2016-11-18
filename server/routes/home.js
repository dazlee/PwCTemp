const express = require("express");
const router = express.Router();

const templates = require("../../views/inputs");

router.get("/", (req, res) => {
    res.render("home", {
        title: "可用inputs",
        sheet: [
            {
                type: "table",
                title: "一般表格",
                editable: false,
                width: 12,
            },
            {
                type: "table",
                title: "可修改表格",
                editable: true,
                width: 12,
            },
            {
                type: "text",
                title: "單行文字",
                width: 6,
                key: "key",
                value: "你好嗎",
            },
            {
                type: "date-picker",
                title: "日期",
                width: 6,
            },
            {
                type: "number",
                title: "數字",
                width: 12,
            },
            {
                type: "date-range-picker",
                title: "日期區間",
                width: 12,
            },
            {
                type: "datetime-picker",
                title: "日期時間",
                width: 12,
            },
            {
                type: "checkbox",
                title: "多選盒",
                width: 12,
            },
            {
                type: "radio-button",
                title: "單選按鈕",
                width: 12,
            },
            {
                type: "select",
                title: "下拉選單",
                width: 12,
            },
            {
                type: "multiple-select",
                title: "多重下拉選單",
                width: 12,
            },
            {
                type: "text-area",
                title: "多行文字",
                width: 12,
            },
            {
                type: "file",
                title: "檔案上傳",
                width: 12,
            }
        ]
    });
});
router.post("/", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

router.get("/loss", (req, res) => {
    res.render("home", {
        title: "損失事件管理",
        sheet: [
            {
                type: "date-picker",
                title: "事件發生日期",
                width: 8,
            },
            {
                type: "date-picker",
                title: "事件發現日期",
                width: 4,
            },
            {
                type: "select",
                title: "事件名稱",
                width: 8,
            },
            {
                type: "text",
                title: "其他",
                width: 4,
            },
            {
                type: "text-area",
                title: "事件說明",
                width: 12,
            },
            {
                type: "select",
                title: "風險成因",
                width: 12,
            },
            {
                type: "text",
                title: "事件發生單位",
                width: 8,
            },
            {
                type: "select",
                title: "個人金融部",
                width: 4,
            },
            {
                type: "table",
                title: "相關行員",
                editable: true,
                width: 12,
            },
            {
                type: "number",
                title: "估計損失金額",
                width: 4,
            },
            {
                type: "radio-button",
                title: "是否重大偶發事件",
                width: 12,
            },
            {
                type: "select",
                title: "事件發生方式",
                width: 12,
            },
            {
                type: "select",
                title: "事件發生地區",
                width: 12,
            },
            {
                type: "radio-button",
                title: "是否違反法令或內部規定",
                width: 12,
            },
            {
                type: "text-area",
                title: "改善方式",
                width: 12,
            },
            {
                type: "text-area",
                title: "其他說明與備註",
                width: 12,
            },
            {
                type: "datetime-range-picker",
                title: "系統中斷時間起迄",
                width: 12,
            },
            {
                type: "number",
                title: "刷卡設備滅失數量",
                width: 12,
            },
            {
                type: "table",
                title: "附件",
                width: 12,
            },
        ]
    });
});

module.exports = router;
