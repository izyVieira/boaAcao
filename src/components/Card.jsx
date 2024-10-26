// components/Card.js
export default function Card({ item, viewDetails }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition ease-in-out duration-200">
        <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-lg font-semibold text-gray-800 mt-4">{item.title}</h3>
        <p className="text-sm text-gray-500">Doador: {item.donor}</p>
        <button
          onClick={() => viewDetails(item)}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition ease-in-out"
        >
          Ver Detalhes
        </button>
      </div>
    );
  }
  