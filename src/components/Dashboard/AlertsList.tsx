
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Clock, AlertTriangle, AlertCircle } from 'lucide-react';

type AlertPriority = 'high' | 'medium' | 'low';

interface Alert {
  id: string;
  message: string;
  timestamp: string;
  priority: AlertPriority;
}

interface AlertsListProps {
  alerts: Alert[];
}

export function AlertsList({ alerts }: AlertsListProps) {
  const priorityIcon = (priority: AlertPriority) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="h-4 w-4 text-health-critical" />;
      case 'medium':
        return <AlertTriangle className="h-4 w-4 text-health-warning" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-health-info" />;
    }
  };

  const priorityClass = (priority: AlertPriority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/10 text-health-critical';
      case 'medium':
        return 'bg-amber-500/10 text-health-warning';
      default:
        return 'bg-blue-500/10 text-health-info';
    }
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className={cn(
                  'flex items-start justify-between rounded-lg border p-3',
                  priorityClass(alert.priority)
                )}
              >
                <div className="flex gap-2">
                  {priorityIcon(alert.priority)}
                  <div>
                    <p className="text-sm">{alert.message}</p>
                    <div className="mt-1 flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{alert.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-24 items-center justify-center rounded-lg border border-dashed text-muted-foreground">
              No alerts to display
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
