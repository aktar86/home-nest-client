import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#f43f5e", "#3b82f6", "#10b981", "#f59e0b"];

const PropertyPieChart = ({ chartData }) => {
  const data = chartData?.length
    ? chartData
    : [
        { name: "Apartment", value: 400 },
        { name: "Luxury", value: 300 },
        { name: "Commercial", value: 200 },
      ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderCenterLabel = () => (
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      className="fill-gray-700"
    >
      <tspan x="50%" dy="-4" className="text-sm">
        Total
      </tspan>
      <tspan x="50%" dy="22" className="text-xl font-bold">
        {total}
      </tspan>
    </text>
  );

  return (
    <div className="w-full h-100 p-5">
      <h2 className="text-lg font-semibold text-gray-700  text-center">
        Property Distribution
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart className="py-5">
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={105}
            paddingAngle={6}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
            {renderCenterLabel()}
          </Pie>

          <Tooltip
            formatter={(value, name) => [
              `${value} (${((value / total) * 100).toFixed(1)}%)`,
              name,
            ]}
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
            }}
          />

          <Legend verticalAlign="bottom" iconType="circle" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PropertyPieChart;
