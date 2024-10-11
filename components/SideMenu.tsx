"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { BookOpen, Home, LogOut, Search, Settings } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Newsletters', href: '/dashboard/newsletters', icon: BookOpen },
  { name: 'Search', href: '/dashboard/search', icon: Search },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-card border-r">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Newsletter Reader</h1>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-4">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                'w-full justify-start',
                pathname === item.href && 'bg-accent'
              )}
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/logout">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  );
}