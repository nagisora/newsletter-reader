"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

interface Newsletter {
  id: string;
  title: string;
  created_at: string;
}

export default function Newsletters() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const response = await fetch('/api/newsletters');
      if (!response.ok) throw new Error('Failed to fetch newsletters');
      const data = await response.json();
      setNewsletters(data);
    } catch (error) {
      console.error('Error fetching newsletters:', error);
      toast({
        title: "Error",
        description: "Failed to fetch newsletters. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/newsletters', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload newsletter');

      toast({
        title: "Success",
        description: "Newsletter uploaded successfully.",
      });
      fetchNewsletters();
    } catch (error) {
      console.error('Error uploading newsletter:', error);
      toast({
        title: "Error",
        description: "Failed to upload newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Newsletters</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upload Newsletter</CardTitle>
          <CardDescription>Upload a new .eml file to read</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newsletter-file">Newsletter File (.eml)</Label>
              <Input
                id="newsletter-file"
                type="file"
                accept=".eml"
                onChange={handleUpload}
                disabled={isUploading}
              />
            </div>
            {isUploading && <p>Uploading...</p>}
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {newsletters.map((newsletter) => (
          <Card key={newsletter.id}>
            <CardHeader>
              <CardTitle>{newsletter.title}</CardTitle>
              <CardDescription>Uploaded on {new Date(newsletter.created_at).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Read Newsletter</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}