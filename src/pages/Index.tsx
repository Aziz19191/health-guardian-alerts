
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { StatusCard } from '@/components/Dashboard/StatusCard';
import { MetricsChart } from '@/components/Dashboard/MetricsChart';
import { AlertsList } from '@/components/Dashboard/AlertsList';
import { EndpointStatus } from '@/components/Dashboard/EndpointStatus';
import { BackendConnect } from '@/components/Dashboard/BackendConnect';

// Mock data for the dashboard
const responseTimeData = [
  { name: '00:00', value: 150 },
  { name: '04:00', value: 230 },
  { name: '08:00', value: 310 },
  { name: '12:00', value: 190 },
  { name: '16:00', value: 250 },
  { name: '20:00', value: 120 },
  { name: '24:00', value: 90 },
];

const errorRateData = [
  { name: '00:00', value: 0.2 },
  { name: '04:00', value: 0.5 },
  { name: '08:00', value: 1.8 },
  { name: '12:00', value: 0.8 },
  { name: '16:00', value: 0.4 },
  { name: '20:00', value: 0.3 },
  { name: '24:00', value: 0.2 },
];

const recentAlerts = [
  {
    id: '1',
    message: 'High response time detected on /api/users/ endpoint (745ms)',
    timestamp: '2025-04-27 14:32:05',
    priority: 'high' as const,
  },
  {
    id: '2',
    message: 'Error rate above threshold (1.8%) on /api/products/',
    timestamp: '2025-04-27 08:15:22',
    priority: 'medium' as const,
  },
  {
    id: '3',
    message: 'CPU usage spike detected (85%)',
    timestamp: '2025-04-26 23:42:11',
    priority: 'low' as const,
  },
];

const endpoints = [
  {
    id: '1',
    name: '/api/users/',
    status: 'healthy' as const,
    responseTime: 85,
    lastChecked: '2025-04-27 14:45:12',
  },
  {
    id: '2',
    name: '/api/products/',
    status: 'degraded' as const,
    responseTime: 320,
    lastChecked: '2025-04-27 14:45:10',
  },
  {
    id: '3',
    name: '/api/orders/',
    status: 'down' as const,
    responseTime: 1250,
    lastChecked: '2025-04-27 14:45:05',
  },
  {
    id: '4',
    name: '/api/auth/',
    status: 'healthy' as const,
    responseTime: 65,
    lastChecked: '2025-04-27 14:45:02',
  },
];

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">DjangoHealthBot Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage your Django application health</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatusCard
            title="Average Response Time"
            value="185 ms"
            status="good"
            footer="Stable since last check"
            trend={-5}
          />
          <StatusCard
            title="Error Rate"
            value="0.8%"
            status="warning"
            footer="Increased from last hour"
            trend={0.3}
          />
          <StatusCard
            title="Active Endpoints"
            value="9/10"
            status="critical"
            description="One endpoint is currently down"
          />
          <StatusCard
            title="Memory Usage"
            value="42%"
            status="info"
            footer="3.4 GB of 8GB"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <MetricsChart
            title="Response Time (ms)"
            data={responseTimeData}
            color="#3b82f6"
            unit=" ms"
            fill="rgba(59, 130, 246, 0.1)"
          />
          <MetricsChart
            title="Error Rate (%)"
            data={errorRateData}
            color="#ef4444"
            unit="%"
            fill="rgba(239, 68, 68, 0.1)"
          />
        </div>

        <BackendConnect />
        <EndpointStatus endpoints={endpoints} />
        <AlertsList alerts={recentAlerts} />
      </div>
    </MainLayout>
  );
};

export default Index;
