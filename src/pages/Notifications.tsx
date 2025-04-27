
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'System Update Available',
    message: 'A new system update is available for installation',
    timestamp: '2025-04-27 16:00:00',
    isRead: false,
  },
  {
    id: 2,
    title: 'Backup Completed',
    message: 'Daily backup has been completed successfully',
    timestamp: '2025-04-27 15:30:00',
    isRead: true,
  },
  {
    id: 3,
    title: 'Memory Usage Alert',
    message: 'Memory usage has returned to normal levels',
    timestamp: '2025-04-27 15:00:00',
    isRead: true,
  },
];

const Notifications = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">System notifications and updates</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start space-x-4 border-b pb-4 last:border-0 ${
                    !notification.isRead ? 'bg-accent/10 -mx-4 px-4' : ''
                  }`}
                >
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                  </div>
                  {!notification.isRead && (
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Notifications;
