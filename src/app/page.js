// app/page.js (ou Home.js em algumas versões do Next.js)
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

  const items = [
    {
      title: "Roupas de Inverno",
      donor: "Maria Silva",
      location: "Centro, São Paulo",
      description: "Estou doando essas roupas para ajudar quem precisa se aquecer nesse inverno.",
      contact: "maria@email.com",
      image: "https://via.placeholder.com/150"
    },
    // Outros itens
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
            {items.filter(item => item.title.toLowerCase().includes(searchTerm)).map((item, index) => (
              <Card key={index} item={item} viewDetails={viewDetails} />
            ))}
          </div>
        </div>
      </section>

      {isDetailsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80">
            <span className="text-red-500 font-bold text-lg cursor-pointer float-right" onClick={closeDetails}>&times;</span>
            <h2 className="text-2xl font-semibold mb-2">{modalContent.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{modalContent.location}</p>
            <p className="text-sm text-gray-600 mb-2">Doador(a): {modalContent.donor}</p>
            <p className="text-gray-800 mb-4">{modalContent.description}</p>
            <p className="text-gray-600">Contato: {modalContent.contact}</p>
          </div>
        </div>
      )}

      {isDonateFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80">
            <span className="text-red-500 font-bold text-lg cursor-pointer float-right" onClick={closeForm}>&times;</span>
            <h2 className="text-2xl font-semibold mb-4">Cadastro de Item para Doação</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Nome do Item" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600" />
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600">
                <option value="roupas">Roupas</option>
                <option value="alimentos">Alimentos</option>
                <option value="higiene">Produtos de Higiene</option>
              </select>
              <textarea placeholder="Descrição" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition ease-in-out">Adicionar</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
