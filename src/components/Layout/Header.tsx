
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const navigationItems = [
  { title: "Dashboard", path: "/" },
  { title: "Metrics", path: "/metrics" },
  { title: "Alerts", path: "/alerts" },
  { title: "Activity", path: "/activity" },
  { title: "History", path: "/history" },
  { title: "Notifications", path: "/notifications" },
  { title: "Settings", path: "/settings" },
];

export function Header() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

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
        <Button
          variant="outline"
          className="h-8 w-[300px] justify-start text-sm text-muted-foreground"
          onClick={() => setOpen(true)}
        >
          <Search className="mr-2 h-4 w-4" />
          Search sections...
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
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

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all sections..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Sections">
            {navigationItems.map((item) => (
              <CommandItem
                key={item.path}
                onSelect={() => handleNavigate(item.path)}
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}
