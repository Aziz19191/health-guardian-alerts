
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Server, Play } from 'lucide-react';

export function BackendConnect() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Server size={18} /> Connect to Django Backend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Connect to your local Django instance to start monitoring metrics, performance, and receive alerts.
        </p>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="host">
                Host
              </label>
              <Input id="host" placeholder="http://localhost:8000" defaultValue="http://localhost:8000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="api-key">
                API Key (Optional)
              </label>
              <Input id="api-key" type="password" placeholder="Enter your API key" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="metrics-path">
              Metrics Path
            </label>
            <Input id="metrics-path" placeholder="/metrics" defaultValue="/metrics" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Play className="mr-2 h-4 w-4" /> Start Monitoring
        </Button>
      </CardFooter>
    </Card>
  );
}
