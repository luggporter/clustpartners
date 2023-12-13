import { ApexBarChart, Card, Col, Row, SectionTitle } from "@doar/components";
import {
    RealTimeSalesData,
    recentEarnings,
} from "@doar/shared/data/dashboard-one";
import {
    StyledBody,
    StyledBodyStatus,
    StyledBodyText,
    StyledBodyTitle,
    StyledBullet,
    StyledChart,
    StyledHeader,
    StyledList,
    StyledListItem,
    StyledListText,
} from "./style";
import { StyledTD, StyledTDRate, StyledTH, StyledTable } from "./style2";
import {
    testDataHeaders,
    testDatas,
} from "@doar/shared/data/dashboard-one/recent-earnings";

import ApexCharts from "apexcharts";
import { MouseEvent } from "react";
import { flatDeep } from "@doar/shared/methods";
import { useAppSelector } from "../../../redux/hooks";

const RealTimeSales = () => {
    const { theme } = useAppSelector((state) => state.theme);
    const chartOptions = RealTimeSalesData.options;
    const chartToggle = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        target.classList.toggle("hidden");
        const id: string = chartOptions.chart.id;
        ApexCharts.exec(id, "toggleSeries", target.value);
    };
    const darkChartOptions = {
        ...chartOptions,
        xaxis: {
            ...chartOptions.xaxis,
            axisBorder: {
                color: "#ffffff0f",
            },
            axisTicks: {
                color: "#ffffff0f",
            },
            labels: {
                style: {
                    ...chartOptions.xaxis.labels.style,
                    colors: ["#ffffff78"],
                },
            },
        },
        grid: {
            ...chartOptions.grid,
            borderColor: "#ffffff0f",
        },
    };

    return (
        <Card height="100%">
            {/* <StyledHeader>
                <SectionTitle title="부가가치세 추정 납부세액" />
            </StyledHeader> */}
            <StyledBody>
                <SectionTitle title="부가가치세 추정 납부세액" />
                <StyledTable>
                    <thead>
                        <tr>
                            <StyledTH>{"구분"}</StyledTH>
                            {testDataHeaders?.map(
                                (item: any, index: number) => {
                                    return (
                                        <StyledTD fontWeight="250" key={index}>
                                            {item}
                                        </StyledTD>
                                    );
                                }
                            )}
                            {/* <StyledTH>{"2021"}</StyledTH>
                            <StyledTH>{"2022"}</StyledTH> */}
                        </tr>
                    </thead>
                    <tbody>
                        {testDatas?.map((ear: any) => (
                            <tr key={ear.date}>
                                <StyledTD color="text3">{ear.type}</StyledTD>
                                {ear?.data?.map((item: any, index: number) => {
                                    return (
                                        <StyledTD key={index}>
                                            {item?.value}
                                        </StyledTD>
                                    );
                                })}

                                {/* <StyledTD color="teal">
                                    + {ear.gross_earnings}
                                </StyledTD>
                                <StyledTD color="pink">
                                    - {ear.tax_withheld}
                                </StyledTD>
                                <StyledTD fontWeight="500">
                                    {ear.net_earinings.earning}{" "}
                                    <StyledTDRate
                                        color={
                                            ear.net_earinings.status === "up"
                                                ? "success"
                                                : "danger"
                                        }
                                    >
                                        {ear.net_earinings.status === "up" && (
                                            <i className="fa fa-arrow-up" />
                                        )}
                                        {ear.net_earinings.status ===
                                            "down" && (
                                            <i className="fa fa-arrow-down" />
                                        )}{" "}
                                        {ear.net_earinings.growth}
                                    </StyledTDRate>
                                </StyledTD> */}
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
                {/* <StyledChart>
                    <ApexBarChart
                        options={
                            theme !== "dark" ? chartOptions : darkChartOptions
                        }
                        series={RealTimeSalesData.series}
                        height="100%"
                    />
                </StyledChart> */}
            </StyledBody>
        </Card>
    );
};

export default RealTimeSales;
