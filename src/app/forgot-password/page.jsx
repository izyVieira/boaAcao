// app/forgot-password/page.js
'use client'
import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert("Instruções de recuperação de senha foram enviadas para o email fornecido.");
    setEmail("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-10 space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Recuperar Senha</h2>
        <p className="text-gray-500 text-center">Digite seu email para receber instruções</p>

        <form onSubmit={handleForgotPassword} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              required
              placeholder="Digite seu email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition ease-in-out font-semibold"
          >
            Enviar Instruções
          </button>
        </form>

        <p className="text-gray-600 text-center text-sm">
          Lembrou da senha?{" "}
          <Link href="/login2" className="text-green-600 font-semibold hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}
