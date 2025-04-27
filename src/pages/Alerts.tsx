
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { AlertsList } from '@/components/Dashboard/AlertsList';

const alerts = [
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

const Alerts = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">System Alerts</h1>
          <p className="text-muted-foreground">View and manage system alerts</p>
        </div>
        <AlertsList alerts={alerts} />
      </div>
    </MainLayout>
  );
};

export default Alerts;
