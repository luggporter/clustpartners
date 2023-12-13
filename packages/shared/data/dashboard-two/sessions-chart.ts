const data = {
    options: {
        labels: [
            "세글계산서",
            "온라인",
            "카드",
            "계산서",
            "현금영수증",
            "제로페이",
        ],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "bottom",
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "60%",
                },
            },
        },
        colors: [
            "#FF6B6B",
            "#70C1B3",
            "#5E72E4",
            "#FDA085",
            "#48DBFB",
            "#FEB72B",
        ],
        stroke: {
            colors: ["#fff"],
        },
    },
    series: [20, 20, 30, 25, 30, 25],
};

export default data;
