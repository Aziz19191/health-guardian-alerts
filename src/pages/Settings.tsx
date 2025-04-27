
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Configure system settings and preferences</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5" />
              System Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="alertThreshold">
                Alert Threshold (ms)
              </label>
              <Input
                id="alertThreshold"
                type="number"
                placeholder="500"
                className="max-w-xs"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="checkInterval">
                Check Interval (seconds)
              </label>
              <Input
                id="checkInterval"
                type="number"
                placeholder="60"
                className="max-w-xs"
              />
            </div>
            
            <div className="pt-4">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Settings;
