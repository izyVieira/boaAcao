// components/NavBar.js
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-green-600 text-white py-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">Boa Ação</h1>
        <nav>
          <Link href="/" className="text-white px-4 hover:text-gray-200">
            Início
          </Link>
          <Link href="/about" className="text-white px-4 hover:text-gray-200">
            Sobre
          </Link>
          <Link href="/itemCreate" className="text-white px-4 hover:text-gray-200">
            Doar
          </Link>
          <Link href="/#contact" className="text-white px-4 hover:text-gray-200">
            Contato
          </Link>
          <Link href="/profile" className="text-white px-4 hover:text-gray-200">
            profile
          </Link>
          <Link href="/login2" className="text-white px-4 hover:text-gray-200">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
