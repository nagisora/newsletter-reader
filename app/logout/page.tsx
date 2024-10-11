"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        toast({
          title: "Logged out successfully",
          description: "You have been logged out of your account.",
        });
        router.push('/');
      } catch (error) {
        console.error('Error during logout:', error);
        toast({
          title: "Logout failed",
          description: "There was an error logging out. Please try again.",
          variant: "destructive",
        });
        router.push('/dashboard');
      }
    };

    handleLogout();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <p className="text-xl">Logging out...</p>
    </div>
  );
}