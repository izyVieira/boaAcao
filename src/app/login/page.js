// app/login/page.js
'use client'
import { useState } from "react";
import { useRouter } from "next/navigation"; // Para redirecionamento

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Autenticação de exemplo: substitua com a lógica de autenticação real
    if (email === "usuario@exemplo.com" && password === "senha123") {
      alert("Login bem-sucedido!");
      router.push("/"); // Redireciona para a página principal após o login
    } else {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition ease-in-out"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
