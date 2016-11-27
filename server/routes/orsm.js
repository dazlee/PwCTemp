const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("sheet", {
        title: "損失事件管理",
        sheet: [
            {
                type: "two-layer-selection",
                title: "2 layer selection",
                key: "mainKey",
                subKey: "subKey",
                value: "staff_cheat",
                subValue: "wrong_account1",
                width: 12,
                options: [
                    {
                        name: "人員舞弊",
                        value: "staff_cheat",
                    },
                    {
                        name: "信託基金作業錯帳",
                        value: "wrong_account",
                    },
                ],
                subOptions: {
                    staff_cheat: [
                        {
                            name: "人員舞弊1",
                            value: "staff_cheat1",
                        },
                        {
                            name: "信託基金作業錯帳1",
                            value: "wrong_account1",
                        },
                        {
                            name: "匯款作業疏失1",
                            value: "wire_transfer_wrong1",
                        },
                        {
                            name: "偽冒開戶1",
                            value: "fake_create_account1",
                        }
                    ],
                    wrong_account: [
                        {
                            name: "人員舞弊2",
                            value: "staff_cheat2",
                        },
                        {
                            name: "信託基金作業錯帳2",
                            value: "wrong_account2",
                        },
                        {
                            name: "匯款作業疏失2",
                            value: "wire_transfer_wrong2",
                        },
                        {
                            name: "偽冒開戶2",
                            value: "fake_create_account2",
                        }
                    ]
                }
            },
            {
                type: "modal",
                title: "地點",
                key: "location",
                value: "taipei",
                sheet: [
                    {
                        type: "tabs",
                        tabs: [
                            {
                                tabId: "north",
                                name: "北部",
                            },
                            {
                                tabId: "central",
                                name: "中部",
                            },
                            {
                                tabId: "south",
                                name: "南部",
                            },
                            {
                                tabId: "east",
                                name: "東部",
                            }
                        ],
                        tabSheet: {
                            north: [
                                {
                                    type: "radio-button",
                                    title: "地點",
                                    key: "location",
                                    value: "taipei",
                                    options: [
                                        {
                                            name: "台北市",
                                            value: "taipei",
                                        },
                                        {
                                            name: "新竹市",
                                            value: "hsinchu",
                                        }
                                    ],
                                    width: 8,
                                },
                            ],
                            central: [
                                {
                                    type: "radio-button",
                                    title: "地點",
                                    key: "location",
                                    value: "taipei",
                                    options: [
                                        {
                                            name: "彰化市",
                                            value: "chaunghua",
                                        },
                                        {
                                            name: "台中市",
                                            value: "taichung",
                                        }
                                    ],
                                    width: 8,
                                },
                            ],
                            south: [
                                {
                                    type: "radio-button",
                                    title: "地點",
                                    key: "location",
                                    value: "taipei",
                                    options: [
                                        {
                                            name: "台南市",
                                            value: "tainan",
                                        },
                                        {
                                            name: "高雄市",
                                            value: "kao",
                                        }
                                    ],
                                    width: 8,
                                },
                            ],
                            east: [
                                {
                                    type: "radio-button",
                                    title: "地點",
                                    key: "location",
                                    value: "taipei",
                                    options: [
                                        {
                                            name: "台東市",
                                            value: "taitung",
                                        },
                                        {
                                            name: "花蓮市",
                                            value: "hualiang",
                                        }
                                    ],
                                    width: 8,
                                },
                            ],
                        }
                    },
                ],
                width: 8,
            },
            {
                type: "date-picker",
                title: "事件發生日期",
                key: "happened_date",
                value: "2016/06/07",
                width: 8,
            },
            {
                type: "date-picker",
                title: "事件發現日期",
                key: "found_date",
                value: "2016/08/07",
                width: 4,
            },
            {
                type: "select",
                title: "事件名稱",
                key: "name",
                value: "fake_create_account",
                options: [
                    {
                        name: "人員舞弊",
                        value: "staff_cheat",
                    },
                    {
                        name: "信託基金作業錯帳",
                        value: "wrong_account",
                    },
                    {
                        name: "匯款作業疏失",
                        value: "wire_transfer_wrong",
                    },
                    {
                        name: "偽冒開戶",
                        value: "fake_create_account",
                        selected: true,
                    }
                ],
                width: 8,
            },
            {
                type: "text",
                title: "其他",
                key: "other",
                value: "身高168的男子",
                width: 4,
            },
            {
                type: "text-area",
                title: "事件說明",
                key: "event_description",
                value: "一六八公分的男子，進到銀行說要開戶，確認身份後發現是假冒帳戶",
                width: 8,
            },
            {
                type: "select",
                title: "風險成因",
                key: "risk_reason",
                value: "system_risk",
                options: [
                    {
                        value: "inner_operational_risk",
                        name: "內部作業風險"
                    },
                    {
                        value: "staff_risk",
                        name: "人員風險"
                    },
                    {
                        selected: true,
                        value: "system_risk",
                        name: "系統風險"
                    },
                    {
                        value: "outer_event_risk",
                        name: "外部事件風險"
                    }
                ],
                width: 12,
            },
            {
                type: "modal",
                title: "事件發生單位",
                key: "event_happened_unit",
                value: "003_chung",
                sheet: [
                    {
                        type: "tabs",
                        tabs: [
                            {
                                tabId: "event_happened_unit_north",
                                name: "北部",
                            },
                            {
                                tabId: "event_happened_unit_central",
                                name: "中部",
                            },
                            {
                                tabId: "event_happened_unit_south",
                                name: "南部",
                            },
                            {
                                tabId: "event_happened_unit_east",
                                name: "東部",
                            }
                        ],
                        tabSheet: {
                            event_happened_unit_north: [
                                {
                                    type: "radio-button",
                                    title: "事件發生單位",
                                    key: "event_happened_unit",
                                    value: "003_chung",
                                    options: [
                                        {
                                            name: "003中和分行",
                                            value: "003_chung",
                                        },
                                        {
                                            name: "004永和分行",
                                            value: "004_young",
                                        }
                                    ],
                                    width: 8,
                                },
                            ],
                            event_happened_unit_central: [
                                {
                                    type: "radio-button",
                                    title: "事件發生單位",
                                    key: "event_happened_unit",
                                    value: "003_chung",
                                    options: [
                                        {
                                            name: "005台中分行",
                                            value: "005_taichung",
                                        },
                                        {
                                            name: "006北屯分行",
                                            value: "006_peitung",
                                        }
                                    ],
                                    width: 8,
                                },
                            ],
                            event_happened_unit_south: [
                                {
                                    type: "radio-button",
                                    title: "事件發生單位",
                                    key: "event_happened_unit",
                                    value: "003_chung",
                                    options: [
                                        {
                                            name: "007台南分行",
                                            value: "007_tainan",
                                        },
                                        {
                                            name: "008東區分行",
                                            value: "008_dongs",
                                        }
                                    ],
                                    width: 8,
                                },
                            ],
                            event_happened_unit_east: [
                                {
                                    type: "radio-button",
                                    title: "事件發生單位",
                                    key: "event_happened_unit",
                                    value: "003_chung",
                                    options: [
                                        {
                                            name: "009台東分行",
                                            value: "009_taitung",
                                        },
                                        {
                                            name: "010花蓮分行",
                                            value: "010_hualiang",
                                        }
                                    ],
                                    width: 8,
                                },
                            ],
                        }
                    },
                ],
                width: 8,
            },
            {
                type: "select",
                title: "業務主管單位",
                key: "manager_unit",
                value: "unit2",
                options: [
                    {
                        name: "總務處",
                        value: "unit1",
                    },
                    {
                        name: "個人金融部",
                        value: "unit2",
                        selected: true,
                    },
                    {
                        name: "信託部",
                        value: "unit3",
                    },
                    {
                        name: "國外部",
                        value: "unit4",
                    }
                ],
                width: 4,
            },
            {
                type: "table",
                title: "相關行員",
                editable: true,
                key: "staff",
                headers: [
                    {
                        name: "行員姓名",
                        value: "name",
                        type: "text",
                        colspan: 1,
                    },
                    {
                        name: "員工編號",
                        value: "id_code",
                        type: "text",
                        colspan: 1,
                    },
                    {
                        name: "科/組/課別",
                        value: "department",
                        type: "text",
                        colspan: 1,
                    },
                    {
                        name: "年齡",
                        value: "age",
                        type: "text",
                        colspan: 1,
                    },
                    {
                        name: "性別",
                        value: "gender",
                        type: "text",
                        colspan: 1,
                    },
                    {
                        name: "進行日期",
                        value: "date",
                        type: "text",
                        colspan: 1,
                    },
                    {
                        name: "職稱",
                        value: "position",
                        type: "text",
                        colspan: 1,
                    },
                    {
                        name: "工作項目",
                        value: "job_description",
                        type: "text",
                        colspan: 1,
                    },
                    {
                        name: "任本職務期間",
                        value: ["job_duration_from", "job_duration_to"],
                        type: ["text", "text"],
                        colspan: 2,
                    },
                ],
                value: [
                    [
                        {
                            type: "text",
                            key: "name",
                            value: "王ＸＸ",
                        },
                        {
                            type: "text",
                            key: "id_code",
                            value: "1234",
                        },
                        {
                            type: "text",
                            key: "department",
                            value: "000",
                        },
                        {
                            key: "age",
                            type: "text",
                            value: 28,
                        },
                        {
                            key: "gender",
                            type: "text",
                            value: "女",
                        },
                        {
                            key: "date",
                            type: "text",
                            value: "2011/05/06",
                        },
                        {
                            key: "position",
                            type: "text",
                            value: "高辦"
                        },
                        {
                            key: "job_description",
                            type: "text",
                            value: "協助客戶進行開戶及存款業務",
                        },
                        {
                            key: "job_duration_from",
                            type: "text",
                            value: "2014/01/01",
                        },
                        {
                            key: "job_duration_to",
                            type: "text",
                            value: "迄今",
                        }
                    ]
                ],
                width: 12,
            },
            {
                type: "number",
                title: "估計損失金額",
                front: "台幣",
                tail: "元",
                key: "loss_amount",
                value: 2200.0,
                width: 4,
            },
            {
                type: "radio-button",
                title: "是否重大偶發事件",
                key: "serious_occational_event",
                value: "no",
                options: [
                    {
                        value: "yes",
                        name: "是",
                    },
                    {
                        value: "no",
                        name: "否",
                        remark: {
                            key: "serious_occational_event_remark",
                            value: "非重大偶發"
                        },
                    },
                ],
                width: 12,
            },
            {
                type: "select",
                title: "事件發生方式",
                key: "happened_method",
                value: "inside_foundout",
                options: [
                    {
                        name: "行內自行發現",
                        value: "inside_foundout",
                        selected: true,
                    },
                    {
                        name: "內部稽核人員發現",
                        value: "auditing",
                    },
                    {
                        name: "顧客抱怨/投訴",
                        value: "customer_complain",
                    },
                    {
                        name: "經媒體揭露",
                        value: "via_media",
                    },
                    {
                        name: "其他",
                        value: "other",
                    }
                ],
                width: 6,
            },
            {
                type: "text",
                title: "其他",
                key: "other_other",
                value: "無",
                width: 4,
            },
            {
                type: "text",
                title: "事件發生地區",
                key: "happened_area",
                value: "台北市",
                width: 12,
            },
            {
                type: "radio-button",
                title: "是否違反法令或內部規定",
                key: "is_against_law",
                value: "no",
                options: [
                    {
                        name: "是",
                        value: "yes",
                    },
                    {
                        name: "否",
                        value: "no",
                        selected: true,
                    }
                ],
                width: 12,
            },
            {
                type: "text-area",
                title: "改善方式",
                key: "approve_way",
                value: "阿就老師講要好好聽課啊。",
                width: 12,
            },
            {
                type: "text-area",
                title: "其他說明與備註",
                key: "other_description_way",
                value: "呵呵呵",
                width: 12,
            },
            {
                type: "datetime-range-picker",
                title: "系統中斷時間起迄",
                key: "step_duration",
                value: {
                    from: "2016/07/07 12:00",
                    to: "2016/07/12 12:00",
                },
                width: 12,
            },
            {
                type: "number",
                title: "刷卡設備滅失數量",
                key: "missing_amount",
                value: 12,
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
router.post("/", (req, res) => {
    console.log(req.body);
    res.end();
});

module.exports = router;
