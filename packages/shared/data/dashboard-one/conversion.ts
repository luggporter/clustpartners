import {
    conversionChart1,
    conversionChart2,
    conversionChart3,
    conversionChart4,
} from "./conversion-chart";

import { IConversion } from "../../types";

export const conversions: IConversion[] = [
    {
        id: 1,
        title: "분기 대비 매출",
        rate: "2,413,322",
        change: {
            percentage: "1.2%",
            growth: "up",
            time: "4분기",
        },
        chart: conversionChart1,
    },
    {
        id: 2,
        title: "연도 대비 매출",
        rate: "2,413,322",
        change: {
            percentage: "0.7%",
            growth: "down",
            time: "2022년",
        },
        chart: conversionChart2,
    },
    {
        id: 3,
        title: "분기 대비 손익",
        rate: "2,413,322",
        change: {
            percentage: "0.3%",
            growth: "down",
            time: "4분기",
        },
        chart: conversionChart3,
    },
    {
        id: 4,
        title: "연도 대비 손익",
        rate: "2,413,322",
        change: {
            percentage: "2.1%",
            growth: "up",
            time: "2022",
        },
        chart: conversionChart4,
    },
];
