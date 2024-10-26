
export default function NavBar() {
    return (
      <header className="bg-green-600 text-white py-5 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Plataforma de Doações</h1>
          <nav>
            <a href="#home" className="text-white px-4 hover:text-gray-200">Início</a>
            <a href="#about" className="text-white px-4 hover:text-gray-200">Sobre</a>
            <a href="#donate" className="text-white px-4 hover:text-gray-200">Doar</a>
            <a href="#contact" className="text-white px-4 hover:text-gray-200">Contato</a>
            <a href="/login" className="text-white px-4 hover:text-gray-200">Login</a>
          </nav>
        </div>
      </header>
    );
  }
  