import React, { Component } from 'react';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';
import ChartConfig, { tooltipStyle, tooltipTextStyle } from '../constants/chart-config';

const data = [
	{ name: 'Time A', seriesA: 1000, seriesB: 2400 , goal: 2400 },
	{ name: 'Time B', seriesA: 3000, seriesB: 1398 , goal: 2400 },
	{ name: 'Time C', seriesA: 1500, seriesB: 4000 , goal: 2400 },
	{ name: 'Time D', seriesA: 2780, seriesB: 3908 , goal: 2400 },
	{ name: 'Time E', seriesA: 1890, seriesB: 4800 , goal: 2400 },
	{ name: 'Time F', seriesA: 2390, seriesB: 3800 , goal: 2400 },
	{ name: 'Time G', seriesA: 3490, seriesB: 4300 , goal: 2400 },
];

class LineChartComponent extends Component {
	render() {
		return (

			<ResponsiveContainer width='90%' height={300}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke={ChartConfig.axesColor} />
					<YAxis stroke={ChartConfig.axesColor} />
					<CartesianGrid vertical={false} stroke={ChartConfig.chartGridColor} />
					<Tooltip wrapperStyle={tooltipStyle} cursor={false} itemStyle={tooltipTextStyle} labelStyle={{ display: 'none' }} />
					<Legend />
					<Line type="monotone" dataKey="seriesB" stroke={ChartConfig.color.primary} activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="seriesA" stroke={ChartConfig.color.info} activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="goal" stroke={ChartConfig.color.warning} activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		);
	}
}

export default LineChartComponent;
