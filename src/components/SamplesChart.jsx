import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
export const SamplesChart = ({ data, title = "Samples per Day" }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div 
          className="bg-white p-3 border border-secondary-200 rounded-lg shadow-lg"
          role="tooltip"
        >
          <p className="text-sm font-medium text-secondary-900">
            Date: {new Date(label).toLocaleDateString()}
          </p>
          {payload.map((entry, index) => (
            <p 
              key={index}
              className="text-sm"
              style={{ color: entry.color }}
            >
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              role="img"
              aria-label={`${title} line chart showing samples over time`}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="date" 
                stroke="#64748b"
                fontSize={12}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              />
              <YAxis 
                stroke="#64748b"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine 
                y={150} 
                stroke="#f59e0b" 
                strokeDasharray="5 5"
                label={{ value: "Target", position: "right" }}
              />
              <Line
                type="monotone"
                dataKey="samples"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4, fill: "#3b82f6" }}
                activeDot={{ r: 6, fill: "#2563eb" }}
                name="Samples"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};