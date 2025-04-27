
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Endpoint {
  id: string;
  name: string;
  status: 'healthy' | 'degraded' | 'down';
  responseTime: number;
  lastChecked: string;
}

interface EndpointStatusProps {
  endpoints: Endpoint[];
}

export function EndpointStatus({ endpoints }: EndpointStatusProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return (
          <Badge className="bg-health-good text-primary-foreground">Healthy</Badge>
        );
      case 'degraded':
        return (
          <Badge className="bg-health-warning text-primary-foreground">Degraded</Badge>
        );
      case 'down':
        return (
          <Badge className="bg-health-critical text-primary-foreground">Down</Badge>
        );
      default:
        return (
          <Badge className="bg-muted text-primary-foreground">Unknown</Badge>
        );
    }
  };

  const getResponseTimeClass = (time: number) => {
    if (time < 100) return 'text-health-good';
    if (time < 500) return 'text-health-warning';
    return 'text-health-critical';
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>API Endpoints</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {endpoints.map((endpoint) => (
            <div
              key={endpoint.id}
              className="flex items-center justify-between rounded-md border p-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      'h-2 w-2 rounded-full',
                      endpoint.status === 'healthy' && 'bg-health-good',
                      endpoint.status === 'degraded' && 'bg-health-warning',
                      endpoint.status === 'down' && 'bg-health-critical'
                    )}
                  />
                  <span className="font-medium">{endpoint.name}</span>
                  {getStatusBadge(endpoint.status)}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Last checked: {endpoint.lastChecked}
                </div>
              </div>
              <div className={cn('text-right font-mono text-sm font-bold', getResponseTimeClass(endpoint.responseTime))}>
                {endpoint.responseTime} ms
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
