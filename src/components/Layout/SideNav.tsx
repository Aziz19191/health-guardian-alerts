
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  ActivitySquare,
  AlertTriangle,
  Bell,
  Gauge,
  History,
  Home,
  Settings,
} from 'lucide-react';

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
};

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/50',
        isActive ? 'bg-accent/30 text-accent' : 'text-muted-foreground'
      )}
    >
      {icon}
      {label}
    </Link>
  );
};

export function SideNav() {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { to: '/', icon: <Home size={18} />, label: 'Dashboard' },
    { to: '/metrics', icon: <Gauge size={18} />, label: 'Metrics' },
    { to: '/alerts', icon: <AlertTriangle size={18} />, label: 'Alerts' },
    { to: '/activity', icon: <ActivitySquare size={18} />, label: 'Activity' },
    { to: '/history', icon: <History size={18} />, label: 'History' },
    { to: '/notifications', icon: <Bell size={18} />, label: 'Notifications' },
    { to: '/settings', icon: <Settings size={18} />, label: 'Settings' },
  ];

  return (
    <div className="flex h-full w-56 flex-col border-r bg-card px-2 py-4">
      <div className="flex items-center gap-2 px-4 py-2">
        <div className="h-6 w-6 rounded-full bg-primary animate-pulse"></div>
        <h2 className="font-semibold tracking-tight">DjangoHealthBot</h2>
      </div>
      <div className="mt-8 flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={pathname === item.to}
          />
        ))}
      </div>
      <div className="mt-auto border-t pt-4">
        <div className="flex items-center justify-between px-4">
          <div className="text-xs text-muted-foreground">Status</div>
          <div className="flex items-center">
            <div className="mr-2 h-2 w-2 rounded-full bg-health-good"></div>
            <span className="text-xs font-medium">Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}
