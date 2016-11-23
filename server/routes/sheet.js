const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("sheet", {
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
                key: "date-picker",
                value: "2016/11/08",
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
                key: "date-range-picker",
                value: {
                    from: "2016/11/08",
                    to: "2016/11/20"
                },
                width: 12,
            },
            {
                type: "datetime-picker",
                title: "日期時間",
                key: "datetime-picker",
                value: "2016/11/08 10:55",
                width: 12,
            },
            {
                type: "datetime-range-picker",
                title: "日期時間區間",
                key: "datetime-range-picker",
                value: {
                    from: "2016/11/08 10:55",
                    to: "2016/11/20 10:55"
                },
                width: 12,
            },
            {
                type: "checkbox",
                title: "多選盒",
                key: "checkkkk",
                value: ["che1", "che2"],
                options: [
                    {
                        name: "選項一",
                        value: "che1",
                        selected: true,
                    },
                    {
                        name: "選項2",
                        value: "che2",
                        selected: true,
                    },
                    {
                        name: "選項3",
                        value: "ch3"
                    },
                    {
                        name: "選項4",
                        value: "che4"
                    }
                ],
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

module.exports = router;
