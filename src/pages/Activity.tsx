
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity as ActivityIcon } from 'lucide-react';

const activities = [
  {
    id: 1,
    action: 'Server Restart',
    description: 'System maintenance completed successfully',
    timestamp: '2025-04-27 15:30:00',
  },
  {
    id: 2,
    action: 'Database Backup',
    description: 'Automated backup completed',
    timestamp: '2025-04-27 14:00:00',
  },
  {
    id: 3,
    action: 'Configuration Update',
    description: 'System settings updated',
    timestamp: '2025-04-27 12:45:00',
  },
];

const Activity = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Activity Log</h1>
          <p className="text-muted-foreground">Recent system activities and changes</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ActivityIcon className="h-5 w-5" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((item) => (
                <div key={item.id} className="flex flex-col space-y-1 border-b pb-4 last:border-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.action}</span>
                    <span className="text-sm text-muted-foreground">{item.timestamp}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Activity;
