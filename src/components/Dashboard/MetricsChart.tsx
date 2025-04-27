
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

interface MetricsChartProps {
  title: string;
  data: { name: string; value: number }[];
  color: string;
  unit?: string;
  fill?: string;
}

export function MetricsChart({ title, data, color, unit = '', fill }: MetricsChartProps) {
  const isMobile = useIsMobile();

  return (
    <Card className="col-span-full xl:col-span-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="name"
              tick={{ fill: '#888', fontSize: 12 }}
              tickLine={{ stroke: '#888' }}
              axisLine={{ stroke: '#888' }}
              tickMargin={10}
              tickCount={isMobile ? 4 : 8}
            />
            <YAxis
              tick={{ fill: '#888', fontSize: 12 }}
              tickLine={{ stroke: '#888' }}
              axisLine={{ stroke: '#888' }}
              tickMargin={10}
              tickFormatter={(value) => `${value}${unit}`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-md">
                      <p className="text-sm font-medium">{`${payload[0].payload.name}`}</p>
                      <p className="text-sm monospace">{`${payload[0].value}${unit}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fill={fill || `${color}33`}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
