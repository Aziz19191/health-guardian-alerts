
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    toast({
      title: "Checking notifications...",
      description: "Redirecting to notifications page",
    });
    navigate('/notifications');
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-6">
      <div className="flex flex-1 items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search metrics, alerts..."
          className="h-8 w-[300px] bg-background"
        />
      </div>
      <nav className="flex items-center gap-2">
        <Button 
          size="icon" 
          variant="ghost" 
          className="relative"
          onClick={handleNotificationClick}
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2.5 top-2.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
        </Button>
        <Button size="sm" variant="secondary">
          Connect Backend
        </Button>
      </nav>
    </header>
  );
}
