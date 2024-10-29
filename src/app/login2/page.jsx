// app/login/page.js
'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulação de autenticação; substitua com lógica real
    if (email === "usuario@exemplo.com" && password === "senha123") {
      alert("Login bem-sucedido!");
      router.push("/"); // Redireciona para a página principal após o login
    } else {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-10 space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Bem-vindo de Volta!</h2>
        <p className="text-gray-500 text-center">Faça login na sua conta</p>

        <form onSubmit={handleLogin} className="space-y-6">
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

          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-gray-600 font-medium">Senha</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              required
              placeholder="Digite sua senha"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                // Ícone de olho aberto
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                // Ícone de olho fechado
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7 1.035-3.285 3.825-5.725 7.125-6.542M9.88 9.88A3 3 0 1114.12 14.12M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex justify-between items-center text-sm mt-2">
            <Link href="/forgot-password" className="text-green-600 hover:underline">Esqueceu a senha?</Link>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition ease-in-out font-semibold"
          >
            Entrar
          </button>
        </form>

        <p className="text-gray-600 text-center text-sm mt-6">
          Não tem uma conta?{" "}
          <Link href="/signup" className="text-green-600 font-semibold hover:underline">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}
