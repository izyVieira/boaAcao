// app/page.js ou Home.js
'use client'
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Search from "@/components/Search";

export default function Home() {
  const [isDonateFormOpen, setDonateFormOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Lista de itens para doação, com mais detalhes
  const items = [
    {
      title: "Roupas de Inverno",
      donor: "Maria Silva",
      location: "Centro, São Paulo",
      description: "Estou doando essas roupas para ajudar quem precisa se aquecer nesse inverno.",
      contact: "maria@email.com",
      estado: "Bom estado",
      endereco: "Rua das Flores, 123, Centro",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Cobertores",
      donor: "João Souza",
      location: "Jardins, São Paulo",
      description: "Cobertores novos e usados para quem está com frio.",
      contact: "joao@email.com",
      estado: "Usado, mas em bom estado",
      endereco: "Avenida Paulista, 456, Jardins",
      image: "https://via.placeholder.com/150"
    },
    // Adicione outros itens conforme necessário
  ];

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const openForm = () => setDonateFormOpen(true);
  const closeForm = () => setDonateFormOpen(false);

  const viewDetails = (item) => {
    setModalContent(item);
    setDetailsModalOpen(true);
  };
  const closeDetails = () => setDetailsModalOpen(false);

  return (
    <div className="bg-gray-50 font-sans">
      <NavBar />
      
      <section id="home" className="py-12 bg-cover bg-center text-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
        <div className="bg-black bg-opacity-50 py-12">
          <h2 className="text-4xl font-bold text-white">Bem-vindo à Plataforma de Doações</h2>
          <p className="text-gray-200 mt-4">Doe itens essenciais para pessoas em necessidade, de maneira rápida e fácil.</p>
          <button onClick={openForm} className="mt-6 bg-white text-green-600 py-2 px-6 rounded-lg font-semibold hover:bg-gray-100 transition ease-in-out">Quero Doar</button>
        </div>
      </section>

      <section id="donate" className="py-10">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Itens para Doação</h2>
          <Search searchTerm={searchTerm} handleSearch={handleSearch} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="itemList">
            {items
              .filter(item => item.title.toLowerCase().includes(searchTerm))
              .map((item, index) => (
                <Card key={index} item={item} viewDetails={viewDetails} />
              ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalhes do Item */}
      {isDetailsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 md:w-96 relative">
            <span
              className="text-red-500 font-bold text-lg cursor-pointer absolute top-2 right-4"
              onClick={closeDetails}
            >
              &times;
            </span>

            <img
              src={modalContent.image}
              alt={modalContent.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            
            <h2 className="text-2xl font-semibold mb-2">{modalContent.title}</h2>
            <p className="text-gray-600 text-sm mb-2">Localização: {modalContent.location}</p>
            <p className="text-gray-600 text-sm mb-2">Estado do Item: {modalContent.estado}</p>
            <p className="text-gray-600 text-sm mb-2">Endereço: {modalContent.endereco}</p>
            <p className="text-gray-800 mb-4">{modalContent.description}</p>
            
            <div className="text-gray-600 text-sm mb-4">
              <p><strong>Doador:</strong> {modalContent.donor}</p>
              <p><strong>Contato:</strong> {modalContent.contact}</p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition ease-in-out"
                onClick={() => alert(`Você mostrou interesse no item ${modalContent.title}!`)}
              >
                Quero
              </button>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition ease-in-out"
                onClick={() => alert(`Iniciando chat com ${modalContent.donor}...`)}
              >
                Chat
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
