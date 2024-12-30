'use client';
import React, { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    brand: '',
    size: '',
    gender: '',
    type: '',
    color: '',
  });

  return (
    <div className="min-h-screen bg-emerald-50">
      <nav className="bg-emerald-800 p-4 text-white">
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
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="p-2 hover:bg-emerald-700 rounded">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Search Items</h2>
          <form className="space-y-4">
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
                className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
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
        </div>
      </main>
    </div>
  );
}
