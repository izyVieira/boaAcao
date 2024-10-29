// app/about/page.js ou About.js
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      <NavBar />
      
      <section className="py-12 bg-cover bg-center text-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
        <div className="bg-black bg-opacity-50 py-12">
          <h1 className="text-4xl font-bold text-white">Sobre o Projeto</h1>
          <p className="text-gray-200 mt-4 max-w-3xl mx-auto">
            Nossa plataforma conecta doadores e pessoas que precisam de itens essenciais. Nosso objetivo é facilitar o processo de doação, permitindo que cada contribuição faça uma grande diferença na vida de alguém.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">O Projeto</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
            Este projeto nasceu da vontade de ajudar as comunidades em situação de vulnerabilidade, promovendo uma plataforma onde doadores possam compartilhar itens como roupas, cobertores, e outros artigos essenciais com quem realmente precisa. 
          </p>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-center mt-4">
            Acreditamos que, por meio da solidariedade e da colaboração, podemos construir uma rede de apoio que transforma a vida de milhares de pessoas.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Quem Somos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card de cada membro responsável */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Foto de Isis Vieira" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Isis Vieira</h3>
              <p className="text-gray-600">Coordenadora de Projeto</p>
              <p className="mt-4 text-gray-600 text-sm">Isis lidera as iniciativas do projeto e cuida das operações estratégicas.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Foto de Lenner" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Lenner</h3>
              <p className="text-gray-600">Gerente de Logística</p>
              <p className="mt-4 text-gray-600 text-sm">Lenner é responsável pela logística e coordenação dos itens doados.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Foto de Yudi" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Yudi</h3>
              <p className="text-gray-600">Analista de Parcerias</p>
              <p className="mt-4 text-gray-600 text-sm">Yudi trabalha na criação de parcerias com ONGs e instituições parceiras.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Foto de Renato" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Renato</h3>
              <p className="text-gray-600">Desenvolvedor e Designer</p>
              <p className="mt-4 text-gray-600 text-sm">Renato cuida do desenvolvimento da plataforma e da experiência do usuário.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Foto de Fulano" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Fulano</h3>
              <p className="text-gray-600">Especialista em Comunicação</p>
              <p className="mt-4 text-gray-600 text-sm">Fulano é responsável pela comunicação com doadores e beneficiários.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
    