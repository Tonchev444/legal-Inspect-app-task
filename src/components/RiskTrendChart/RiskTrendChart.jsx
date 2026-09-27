import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./RiskTrendChart.css";
import { DATA } from "../../consts/consts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const riskValue = payload.find((item) => item.dataKey === "risks")?.value;
    return (
      <div className="custom-tooltip-badge">Risk exposure: {riskValue}%</div>
    );
  }
  return null;
};

export default function RiskTrendChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3 className="chart-title">AI Risk Trend</h3>
        <div className="chart-legend">
          <span className="legend-pill pill-analyzed">Documents analyzed</span>
          <span className="legend-pill pill-risks">With risks</span>
        </div>
      </div>

      <div className="chart-body">
        <ResponsiveContainer width="100%" height={228}>
          <ComposedChart
            data={DATA}
            margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              dy={10}
              padding={{ left: 20, right: 20 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              ticks={[0, 10, 20, 30, 40]}
              domain={[0, 40]}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#e0f2fe",
                opacity: 0.6,
                strokeWidth: 35,
                strokeLinecap: "round",
              }}
            />

            <Line
              type="monotone"
              dataKey="analyzed"
              stroke="#287b97"
              strokeWidth={3}
              dot={false}
              activeDot={false}
            />

            <Line
              type="monotone"
              dataKey="risks"
              stroke="#b56869"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#fdf1f3",
                stroke: "#b56869",
                strokeWidth: 1,
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
