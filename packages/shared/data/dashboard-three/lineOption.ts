import { generateDayWiseTimeSeries } from "../../methods";

const data = {
    series: [
        {
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
    ],
    options: {
        chart: {
            height: 350,
            type: "line",
            stacked: true,
            zoom: {
                enabled: false,
            },
            //     toolbar: {
            //         show: false,
            //     },
        },
        // chart: {
        //     type: "line",
        //     stacked: true,
        //     zoom: {
        //         enabled: false,
        //     },
        //     toolbar: {
        //         show: false,
        //     },
        // },
        colors: ["#e1e5ed", "#69b2f8", "#0168fa"],
        dataLabels: {
            enabled: true,
        },
        // stroke: {
        //     curve: "smooth",
        //     width: 1.5,
        // },
        // fill: {
        //     colors: ["#ffffff", "#69b2f8", "#0168fa"],
        //     opacity: [0.3, 0, 0.1],
        //     type: "solid",
        // },
        // legend: {
        //     show: false,
        // },
        // xaxis: {
        //     // type: "datetime",
        //     // tooltip: {
        //     //     enabled: false,
        //     // },
        //     // axisTicks: {
        //     //     show: false,
        //     // },
        //     // tickPlacement: "on",
        //     labels: {
        //         style: {
        //             colors: ["#8392a5"],
        //             fontSize: "10px",
        //             fontFamily: "Arial, sans-serif",
        //             fontWeight: 400,
        //             cssClass: "apexcharts-xaxis-label",
        //         },
        //     },
        // },
        // // xaxis: {
        // //     type: "datetime",
        // //     tooltip: {
        // //         enabled: false,
        // //     },
        // //     axisTicks: {
        // //         show: false,
        // //     },
        // //     tickPlacement: "on",
        // //     labels: {
        // //         style: {
        // //             colors: ["#8392a5"],
        // //             fontSize: "10px",
        // //             fontFamily: "Arial, sans-serif",
        // //             fontWeight: 400,
        // //             cssClass: "apexcharts-xaxis-label",
        // //         },
        // //     },
        // // },
        // // yaxis: {
        // //     tickAmount: 3,
        // //     min: 0,
        // //     max: 150,
        // //     decimalsInFloat: false,
        // //     labels: {
        // //         style: {
        // //             colors: ["#8392a5"],
        // //             fontSize: "10px",
        // //             fontFamily: "Arial, sans-serif",
        // //             fontWeight: 400,
        // //             cssClass: "apexcharts-yaxis-label",
        // //         },
        // //     },
        // // },
        // yaxis: {
        //     labels: {
        //         style: {
        //             colors: ["#8392a5"],
        //             fontSize: "10px",
        //             fontFamily: "Arial, sans-serif",
        //             fontWeight: 400,
        //             cssClass: "apexcharts-yaxis-label",
        //         },
        //     },
        // },
        grid: {
            // borderColor: "#485e9029",
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            column: {
                colors: "#485e9029",
                opacity: 1,
            },
        },
        tooltip: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 575,
                options: {
                    chart: {
                        height: 200,
                    },
                    xaxis: {
                        show: false,
                    },
                },
            },
        ],
    },
};

export default data;
