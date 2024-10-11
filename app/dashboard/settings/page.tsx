"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';

export default function Settings() {
  const [email, setEmail] = useState('user@example.com');
  const [fontSize, setFontSize] = useState('medium');
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleSaveSettings = () => {
    // TODO: Implement settings save functionality
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="font-size">Font Size</Label>
          <Select value={fontSize} onValueChange={setFontSize}>
            <SelectTrigger id="font-size">
              <SelectValue placeholder="Select font size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="dark-mode"
            checked={darkMode}
            onCheckedChange={setDarkMode}
          />
          <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="email-notifications"
            checked={emailNotifications}
            onCheckedChange={setEmailNotifications}
          />
          <Label htmlFor="email-notifications">Email Notifications</Label>
        </div>
      </div>
      <Button onClick={handleSaveSettings}>Save Settings</Button>
    </div>
  );
}