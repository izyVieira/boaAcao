// components/Search.js
export default function Search({ searchTerm, handleSearch }) {
    return (
      <input
        type="text"
        placeholder="Buscar por itens..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full md:w-1/2 px-4 py-2 mb-8 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    );
  }
  