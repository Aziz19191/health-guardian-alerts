
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { MetricsChart } from '@/components/Dashboard/MetricsChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const metricsData = [
  { name: '00:00', value: 150 },
  { name: '04:00', value: 230 },
  { name: '08:00', value: 310 },
  { name: '12:00', value: 190 },
  { name: '16:00', value: 250 },
  { name: '20:00', value: 120 },
  { name: '24:00', value: 90 },
];

const cpuData = [
  { name: '00:00', value: 45 },
  { name: '04:00', value: 42 },
  { name: '08:00', value: 65 },
  { name: '12:00', value: 78 },
  { name: '16:00', value: 54 },
  { name: '20:00', value: 43 },
  { name: '24:00', value: 40 },
];

const Metrics = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">System Metrics</h1>
          <p className="text-muted-foreground">Monitor your application performance metrics</p>
        </div>
        
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <MetricsChart
            title="Response Time (ms)"
            data={metricsData}
            color="#3b82f6"
            unit=" ms"
            fill="rgba(59, 130, 246, 0.1)"
          />
          <MetricsChart
            title="CPU Usage (%)"
            data={cpuData}
            color="#10b981"
            unit="%"
            fill="rgba(16, 185, 129, 0.1)"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Metrics;
