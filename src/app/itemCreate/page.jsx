// app/itemCreate/page.js
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateItemPage() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: 0,
    condition: "",
    expirationDate: "",
    description: "",
    available: false,
    image: null,
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setForm((prevForm) => ({ ...prevForm, available: !prevForm.available }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prevForm) => ({ ...prevForm, image: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar a lógica de envio aqui (por exemplo, API POST)
    alert("Item cadastrado com sucesso!");
    router.push("/items");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Cadastro de Item</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-600 font-semibold">Nome</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
              placeholder="Nome do item"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-semibold">Categoria</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
              placeholder="Categoria do item"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-semibold">Quantidade</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
              min="1"
              placeholder="Quantidade"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-semibold">Estado de Conservação</label>
            <select
              name="condition"
              value={form.condition}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>Selecione o estado</option>
              <option value="novo">Novo</option>
              <option value="bom">Bom</option>
              <option value="usado">Usado</option>
              <option value="desgastado">Desgastado</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-semibold">Data de Validade</label>
            <input
              type="date"
              name="expirationDate"
              value={form.expirationDate}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-600 font-semibold">Descrição</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              rows="4"
              placeholder="Descrição do item"
            />
          </div>

          <div className="flex items-center">
            <label className="text-gray-600 font-semibold mr-3">Disponível</label>
            <input
              type="checkbox"
              checked={form.available}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-green-600 rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-600 font-semibold">Imagem</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="mt-1"
              accept="image/*"
              required
            />
            {form.image && (
              <p className="mt-2 text-sm text-gray-500">Imagem selecionada: {form.image.name}</p>
            )}
          </div>

          <button
            type="submit"
            className="col-span-1 md:col-span-2 py-3 mt-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700"
          >
            Cadastrar Item
          </button>
        </form>
      </div>
    </div>
  );
}
