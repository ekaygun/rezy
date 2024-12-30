function App() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <nav className="bg-emerald-800 p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-white">Rezy</h1>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold">Search Items</h2>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
