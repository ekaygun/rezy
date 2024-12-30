'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <nav className="bg-emerald-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-white">Rezy</h1>
        </div>
      </nav>
      
      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Search Items</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full p-2 border rounded"
            />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <input
                type="text"
                placeholder="Brand"
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Size"
                className="p-2 border rounded"
              />
              <select className="p-2 border rounded">
                <option value="">Select Gender</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="unisex">Unisex</option>
              </select>
              <input
                type="text"
                placeholder="Type"
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Color"
                className="p-2 border rounded"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
