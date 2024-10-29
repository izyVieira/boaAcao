// app/signup/page.js
'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    cep: "",
    address: "",
    number: "",
    complement: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isAddressEditable, setIsAddressEditable] = useState(false);
  const router = useRouter();

  // Verificação de força da senha
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setForm({ ...form, password: newPassword });
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) return "Senha Fraca";
    if (password.length < 8) return "Senha Moderada";
    return "Senha Forte";
  };

  // Autocompletar endereço com o CEP (usando ViaCEP)
  const handleCepChange = async (e) => {
    const cep = e.target.value;
    setForm({ ...form, cep });

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setForm({
            ...form,
            address: `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`,
          });
          setIsAddressEditable(false); // Bloqueia o campo se o endereço for encontrado
        } else {
          setIsAddressEditable(true); // Torna o campo editável se o endereço não for encontrado
        }
      } catch (error) {
        console.error("Erro ao buscar o endereço:", error);
        setIsAddressEditable(true);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (passwordStrength === "Senha Fraca") {
      alert("Por favor, use uma senha mais forte.");
      return;
    }
    alert("Cadastro realizado com sucesso!");
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-10 space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Criar Conta</h2>

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Nome</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleInputChange}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              required
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Sobrenome</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleInputChange}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              required
              placeholder="Digite seu sobrenome"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">CEP</label>
            <input
              type="text"
              name="cep"
              value={form.cep}
              onChange={handleCepChange}
              maxLength="8"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              required
              placeholder="Digite seu CEP"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Endereço</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleInputChange}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              required
              placeholder="Endereço será preenchido automaticamente"
              readOnly={!isAddressEditable}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Número</label>
            <input
              type="text"
              name="number"
              value={form.number}
              onChange={handleInputChange}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              required
              placeholder="Número do endereço"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Complemento</label>
            <input
              type="text"
              name="complement"
              value={form.complement}
              onChange={handleInputChange}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              placeholder="Complemento (opcional)"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              required
              placeholder="Digite seu email"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-gray-600 font-medium">Senha</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handlePasswordChange}
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7 1.035-3.285 3.825-5.725 7.125-6.542M9.88 9.88A3 3 0 1114.12 14.12M3 3l18 18" />
                </svg>
              )}
            </button>
            <p className={`text-sm mt-2 ${passwordStrength === "Senha Forte" ? "text-green-600" : passwordStrength === "Senha Moderada" ? "text-yellow-600" : "text-red-600"}`}>
              {passwordStrength}
            </p>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition ease-in-out font-semibold"
          >
            Criar Conta
          </button>
        </form>

        <p className="text-gray-600 text-center text-sm">
          Já tem uma conta?{" "}
          <Link href="/login2" className="text-green-600 font-semibold hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}
