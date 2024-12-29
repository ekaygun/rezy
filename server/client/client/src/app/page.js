'use client';
import React, { useState } from 'react';
import { Search, BookmarkPlus, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const API_URL = 'https://rezy-production.up.railway.app';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    brand: '',
    size: '',
    gender: '',
    type: '',
    color: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
          filters: filters
        }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      setSearchResults(data.itemSummaries || []);
    } catch (err) {
      setError('Failed to fetch results. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50">
      <nav className="bg-emerald-800 p-4 text-ivory">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg className="h-8 w-8" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="#2DD4BF" />
              <circle cx="100" cy="100" r="50" fill="white" />
              <circle cx="100" cy="100" r="25" fill="#2DD4BF" />
            </svg>
            <h1 className="text-2xl font-bold">Rezy</h1>
          </div>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-emerald-700 rounded">
              <BookmarkPlus className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-emerald-700 rounded">
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search Items</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for items..."
                  className="flex-1 p-2 border rounded"
                />
                <button
                  type="submit"
                  className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
                  disabled={isLoading}
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="Brand"
                  className="p-2 border rounded"
                  value={filters.brand}
                  onChange={(e) => setFilters({...filters, brand: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Size"
                  className="p-2 border rounded"
                  value={filters.size}
                  onChange={(e) => setFilters({...filters, size: e.target.value})}
                />
                <select
                  className="p-2 border rounded"
                  value={filters.gender}
                  onChange={(e) => setFilters({...filters, gender: e.target.value})}
                >
                  <option value="">Select Gender</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="unisex">Unisex</option>
                </select>
                <input
                  type="text"
                  placeholder="Type"
                  className="p-2 border rounded"
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Color"
                  className="p-2 border rounded"
                  value={filters.color}
                  onChange={(e) => setFilters({...filters, color: e.target.value})}
                />
              </div>
            </form>
          </CardContent>
        </Card>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((item) => (
              <Card key={item.itemId} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <img
                    src={item.image?.imageUrl || "/api/placeholder/200/200"}
                    alt={item.title}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-emerald-800 font-bold">
                    ${item.price.value}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {item.condition && (
                      <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {item.condition}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
