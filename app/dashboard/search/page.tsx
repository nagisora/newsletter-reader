"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual search functionality
    // This is a mock implementation
    setSearchResults([
      { id: '1', title: 'Newsletter 1', excerpt: 'This is a sample excerpt from Newsletter 1...' },
      { id: '2', title: 'Newsletter 2', excerpt: 'This is a sample excerpt from Newsletter 2...' },
      { id: '3', title: 'Newsletter 3', excerpt: 'This is a sample excerpt from Newsletter 3...' },
    ]);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Search Newsletters</h1>
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Search newsletters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      <div className="space-y-4">
        {searchResults.map((result) => (
          <Card key={result.id}>
            <CardHeader>
              <CardTitle>{result.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{result.excerpt}</CardDescription>
              <Button className="mt-4">Read More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}