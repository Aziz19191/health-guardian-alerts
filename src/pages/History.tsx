
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { history } from 'lucide-react';

const historyItems = [
  {
    id: 1,
    event: 'High CPU Usage Alert',
    status: 'Resolved',
    duration: '2h 15m',
    date: '2025-04-27',
  },
  {
    id: 2,
    event: 'Memory Usage Warning',
    status: 'Resolved',
    duration: '45m',
    date: '2025-04-26',
  },
  {
    id: 3,
    event: 'Database Connection Issue',
    status: 'Resolved',
    duration: '30m',
    date: '2025-04-26',
  },
];

const History = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Event History</h1>
          <p className="text-muted-foreground">Past system events and their resolutions</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <history className="h-5 w-5" />
              Historical Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {historyItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div className="space-y-1">
                    <p className="font-medium">{item.event}</p>
                    <p className="text-sm text-muted-foreground">Duration: {item.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-health-good">{item.status}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default History;
