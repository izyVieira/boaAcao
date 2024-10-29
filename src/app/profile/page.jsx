// app/profile/page.js ou Profile.js
'use client'
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Nome do Usuário",
    email: "email@usuario.com",
    contact: "123456789",
    address: "Rua das Flores, 123",
    city: "São Paulo",
    photo: "https://via.placeholder.com/150",
  });

  const [editing, setEditing] = useState(false);
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const toggleEdit = () => setEditing(!editing);

  const saveChanges = () => {
    // Aqui você pode adicionar uma lógica para salvar os dados atualizados do usuário
    setEditing(false);
    alert("Dados atualizados com sucesso!");
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      <NavBar />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Meu Perfil</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col items-center">
              <img
                src={user.photo}
                alt="Foto de perfil"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              {editing && (
                <input
                  type="file"
                  className="mb-4 text-sm text-gray-600"
                  onChange={(e) =>
                    setUser({ ...user, photo: URL.createObjectURL(e.target.files[0]) })
                  }
                />
              )}
              <button
                onClick={toggleEdit}
                className="text-blue-500 hover:text-blue-600 text-sm mb-6"
              >
                {editing ? "Cancelar" : "Editar Perfil"}
              </button>
            </div>

            <form>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="text-gray-700 font-semibold">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    disabled={!editing}
                    className={`w-full px-4 py-2 mt-2 border rounded-lg ${
                      editing ? "border-gray-300" : "border-transparent"
                    }`}
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    disabled={!editing}
                    className={`w-full px-4 py-2 mt-2 border rounded-lg ${
                      editing ? "border-gray-300" : "border-transparent"
                    }`}
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold">Contato</label>
                  <input
                    type="text"
                    name="contact"
                    value={user.contact}
                    onChange={handleInputChange}
                    disabled={!editing}
                    className={`w-full px-4 py-2 mt-2 border rounded-lg ${
                      editing ? "border-gray-300" : "border-transparent"
                    }`}
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold">Endereço</label>
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                    disabled={!editing}
                    className={`w-full px-4 py-2 mt-2 border rounded-lg ${
                      editing ? "border-gray-300" : "border-transparent"
                    }`}
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-semibold">Cidade</label>
                  <input
                    type="text"
                    name="city"
                    value={user.city}
                    onChange={handleInputChange}
                    disabled={!editing}
                    className={`w-full px-4 py-2 mt-2 border rounded-lg ${
                      editing ? "border-gray-300" : "border-transparent"
                    }`}
                  />
                </div>

                {editing && (
                  <div>
                    <label className="text-gray-700 font-semibold">Nova Senha</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="w-full px-4 py-2 mt-2 border rounded-lg border-gray-300"
                      placeholder="Digite a nova senha"
                    />
                  </div>
                )}
              </div>

              {editing && (
                <div className="flex justify-center mt-6">
                  <button
                    type="button"
                    onClick={saveChanges}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600"
                  >
                    Salvar Alterações
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
