'use client'
import { useState } from 'react'

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
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Rezy</h1>
        </div>
      </nav>
      
      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Search Items</h2>
          <form className="space-y-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for items..."
              className="w-full p-2 border rounded"
            />
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
