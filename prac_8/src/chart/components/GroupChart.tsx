import { tGroup } from "../groupdata";
import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import * as React from 'react';
import SettingChart from "./SettingChart";
import { LineChart } from '@mui/x-charts/LineChart';

interface props {
    data: tGroup
}

function GroupChart({ data }: props) {
    const [isBar, setIsBar] = React.useState(true);
    const [series, setSeries] = React.useState({
        'Максимальный разгон': true,
        'Минимальный объём двигателя': false,
        'Максимальный объём двигателя': false,
        'Минимальный разгон': false,
    });
    
    const toShowValue = Object.values(series).reduce((acc, cur) => Number(acc) + Number(cur), 0)
    let seriesY = Object.entries(series)
        .filter(item => item[1] === true)
        .map(item => {
            return { "dataKey": item[0], "label": item[0], "barLabel": toShowValue === 1 ? ('value' as const) : undefined, }
        });
    const chartSetting = {
        yAxis: [{ label: 'Разгон (с) / Объём двигателя (л)' }],
        height: 400,
    };
    return (

        <Container maxWidth="lg">
            {isBar ? (
                <BarChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={seriesY}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    {...chartSetting}
                />)
                :
                (
                    <LineChart
                        dataset={data}
                        xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                        series={seriesY}
                        slotProps={{
                            legend: {
                                position: { vertical: 'bottom', horizontal: 'center' },
                            },
                        }}
                        {...chartSetting}
                    />
                )
            }
            <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
        </Container>
    )
}

export default GroupChart;