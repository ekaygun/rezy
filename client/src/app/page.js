export default function Home() {
  return (
    <div>
      <nav className="bg-emerald-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-white">Rezy</h1>
        </div>
      </nav>
      
      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-emerald-800">Search Items</h2>
          <input
            type="text"
            placeholder="Search for items..."
            className="w-full p-2 border rounded mt-4"
          />
        </div>
      </main>
    </div>
  );
}
