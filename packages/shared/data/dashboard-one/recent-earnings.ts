import { IRecentEarning, testType } from "../../types";

export const testDataHeaders: any[] = ["2022", "2023"];
export const testDatas: any[] = [
    {
        type: "1분기",
        data: [
            { date: "2022", value: "40,000,000" },
            { date: "2023", value: "40,000,000" },
        ],
    },
    {
        type: "2분기",
        data: [
            { date: "2022", value: "40,000,000" },
            { date: "2023", value: "40,000,000" },
        ],
    },
    {
        type: "3분기",
        data: [
            { date: "2022", value: "40,000,000" },
            { date: "2023", value: "40,000,000" },
        ],
    },
    {
        type: "4분기",
        data: [
            { date: "2022", value: "40,000,000" },
            { date: "2023", value: "40,000,000" },
        ],
    },
];
export const recentEarnings: IRecentEarning[] = [
    {
        date: "03/05/2018",
        sales_count: "1,050",
        gross_earnings: "$32,580.00",
        tax_withheld: "$3,023.10",
        net_earinings: {
            earning: "$28,670.90",
            growth: "4.5%",
            status: "up",
        },
    },
    {
        date: "03/04/2018",
        sales_count: "980",
        gross_earnings: "$30,065.10",
        tax_withheld: "$2,780.00",
        net_earinings: {
            earning: "$26,930.40",
            growth: "0.8%",
            status: "down",
        },
    },
    {
        date: "04/04/2018",
        sales_count: "980",
        gross_earnings: "$30,065.10",
        tax_withheld: "$2,780.00",
        net_earinings: {
            earning: "$26,930.40",
            growth: "0.8%",
            status: "down",
        },
    },
    {
        date: "04/06/2018",
        sales_count: "980",
        gross_earnings: "$30,065.10",
        tax_withheld: "$2,780.00",
        net_earinings: {
            earning: "$26,930.40",
            growth: "0.8%",
            status: "down",
        },
    },
    {
        date: "04/06/2019",
        sales_count: "980",
        gross_earnings: "$30,065.10",
        tax_withheld: "$2,780.00",
        net_earinings: {
            earning: "$26,930.40",
            growth: "0.8%",
            status: "down",
        },
    },
];
