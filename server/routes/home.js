const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home", {
    });
});
router.get("/loss", (req, res) => {
    res.render("sheet", {
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
                key: "kkask",
                value: "科科科科ㄎ",
                width: 4,
            },
            {
                type: "text-area",
                title: "事件說明",
                key: "kkk",
                value: "科科科科ㄎ",
                width: 12,
            },
            {
                type: "checkbox",
                title: "Checkbox",
                key: "kkkaaa",
                value: ["op1", "op2", "op3"],
                options: [
                    {
                        value: "op1",
                        name: "第一11"
                    },
                    {
                        value: "op2",
                        name: "第222"
                    },
                    {
                        value: "op3",
                        name: "第3333"
                    },
                    {
                        value: "op4",
                        name: "第4444"
                    }
                ],
                width: 12,
            },
            {
                type: "select",
                title: "風險成因",
                key: "kkk",
                value: "op1",
                options: [
                    {
                        value: "op1",
                        name: "第一"
                    },
                    {
                        value: "op2",
                        name: "第2"
                    },
                    {
                        value: "op3",
                        name: "第3"
                    },
                    {
                        value: "op4",
                        name: "第4"
                    }
                ],
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
                key: "keyy",
                value: "op4",
                options: [
                    {
                        value: "op1",
                        name: "第一"
                    },
                    {
                        value: "op2",
                        name: "第2"
                    },
                    {
                        selected: true,
                        value: "op3",
                        name: "第3"
                    },
                    {
                        value: "op4",
                        name: "第4"
                    }
                ],
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
                key: "number",
                value: 1234
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
