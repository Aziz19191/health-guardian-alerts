
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, AlertTriangle, AlertCircle, Info } from 'lucide-react';

type StatusType = 'good' | 'warning' | 'critical' | 'info';

interface StatusCardProps {
  title: string;
  value: string | number;
  status: StatusType;
  description?: string;
  footer?: string;
  trend?: number;
}

export function StatusCard({ 
  title, 
  value, 
  status, 
  description, 
  footer, 
  trend 
}: StatusCardProps) {
  const statusConfig = {
    good: {
      icon: <CheckCircle2 className="text-health-good" />,
      color: 'text-health-good',
      bg: 'bg-health-good/10'
    },
    warning: {
      icon: <AlertTriangle className="text-health-warning" />,
      color: 'text-health-warning',
      bg: 'bg-health-warning/10'
    },
    critical: {
      icon: <AlertCircle className="text-health-critical" />,
      color: 'text-health-critical',
      bg: 'bg-health-critical/10'
    },
    info: {
      icon: <Info className="text-health-info" />,
      color: 'text-health-info',
      bg: 'bg-health-info/10'
    },
  };

  const config = statusConfig[status];

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {config.icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold monospace">{value}</div>
        {description && (
          <p className="mt-2 text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
      {footer && (
        <CardFooter className={cn("text-xs", config.color)}>
          {footer}
          {trend !== undefined && (
            <span className={cn("ml-1", trend > 0 ? "text-health-critical" : "text-health-good")}>
              {trend > 0 ? `+${trend}%` : `${trend}%`}
            </span>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
