import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-purple-800 mb-4">
          NINJA KIDS
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Aprenda, Divirta-se e Cresça como um Ninja! 🥷
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-xl px-8 py-6">
          Comece sua Jornada
        </Button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2">Aprendizado Gamificado</h3>
            <p className="text-gray-600">
              Aprenda brincando com nossos jogos educativos
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-2">Conquistas Ninja</h3>
            <p className="text-gray-600">
              Ganhe medalhas e suba de nível enquanto aprende
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Comunidade Amigável</h3>
            <p className="text-gray-600">
              Faça amigos e aprenda em grupo
            </p>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para se tornar um Ninja do Conhecimento?
          </h2>
          <p className="text-xl mb-8">
            Junte-se a milhares de pequenos ninjas em uma jornada incrível de aprendizado!
          </p>
          <Button className="bg-white text-purple-800 hover:bg-gray-100 text-xl px-8 py-6">
            Experimente Grátis
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 NINJA KIDS - Escola Virtual para Crianças</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;