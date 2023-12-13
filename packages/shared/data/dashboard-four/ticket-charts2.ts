import { generateDayWiseTimeSeries } from "../../methods";

const data = {
    options: {
        chart: {
            height: 180,
            type: "line",
            zoom: {
                enabled: false,
            },
            stacked: true,
            toolbar: {
                show: false,
            },
            dropShadow: {
                enabled: true,
                color: "#000",
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2,
            },
        },

        dataLabels: {
            enabled: false,
        },
        // stroke: {
        //     curve: "straight",
        // },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: ["1분기", "2분기", "3분기", "4분기"],
        },
        legend: {
            show: true, // legend를 표시합니다.
            position: "top", // legend의 위치를 지정할 수 있습니다.
            horizontalAlign: "right", // legend의 수평 정렬을 지정할 수 있습니다.
            onItemClick: {
                toggleDataSeries: true, // 데이터 시리즈를 토글할 수 있도록 설정합니다.
            },
        },
    },

    series: [
        {
            name: "2022",
            data: [10, 41, 15, 51],
        },
        {
            name: "2023",
            data: [20, 11, 55, 51],
        },
    ],
};

export default data;
