const data = {
    options: {
        chart: {
            height: 180,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "75%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 7,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["1분기", "2분기", "3분기", "4분기"],
            labels: {
                show: true,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            tickAmount: 6,
            min: 0,
            max: 200,
            forceNiceScale: true,
            labels: {
                style: {
                    colors: ["#8392a5"],
                    fontSize: "10px",
                },
            },
        },
        fill: {
            opacity: 1,
        },
        colors: ["#66a4fb", "#65e0e0"],
        grid: {
            show: true,
            borderColor: "#ebeef3",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        // responsive: [
        //     {
        //         breakpoint: 1199,
        //         options: {
        //             stroke: {
        //                 width: 3,
        //             },
        //         },
        //     },
        //     {
        //         breakpoint: 575,
        //         options: {
        //             stroke: {
        //                 width: 3,
        //             },
        //         },
        //     },
        // ],
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
            data: [150, 110, 90, 115],
        },
        {
            name: "2023",
            data: [180, 140, 120, 135],
        },
    ],
};

export default data;
