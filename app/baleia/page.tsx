import Link from "next/link";

export default function Baleia() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-100 to-blue-50">

      <header className="bg-cyan-900 text-white py-8 shadow-lg">
        <h1 className="text-5xl font-bold text-center">
          Tubarão-Baleia
        </h1>

        <p className="text-center mt-4 text-lg">
          O maior peixe do planeta.
        </p>
      </header>

      <section className="flex justify-center mt-10">
        <img
          src="/baleia.jpg"
          alt="Tubarão-Baleia"
          className="w-11/12 max-w-5xl h-[420px] object-cover rounded-2xl shadow-xl"
        />
      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-4xl font-bold text-cyan-900 mb-6">
          Sobre a espécie
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          O tubarão-baleia (<i>Rhincodon typus</i>) é considerado o maior peixe
          existente no planeta. Apesar de seu tamanho impressionante, é um
          animal extremamente tranquilo e inofensivo para os seres humanos.
          Seu comportamento calmo faz com que seja uma das espécies mais
          admiradas por mergulhadores em todo o mundo.

          Seu corpo possui manchas e linhas brancas que formam um padrão único,
          funcionando como uma verdadeira impressão digital que permite
          identificar cada indivíduo.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Características
        </h2>

        <ul className="list-disc ml-8 text-lg leading-8">
          <li>Maior espécie de peixe conhecida.</li>
          <li>Pode ultrapassar 18 metros de comprimento.</li>
          <li>Pesa mais de 20 toneladas.</li>
          <li>Possui pele extremamente grossa.</li>
          <li>Apresenta manchas únicas em cada indivíduo.</li>
          <li>É um tubarão filtrador.</li>
        </ul>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Alimentação
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Diferentemente da maioria dos tubarões, o tubarão-baleia não caça
          grandes presas. Sua alimentação consiste principalmente em plâncton,
          pequenos peixes, ovos de peixes, krill, lulas e pequenos crustáceos.

          Ele nada lentamente com a boca aberta, filtrando milhares de litros
          de água através de suas brânquias para capturar alimento.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Habitat
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Vive em mares tropicais e subtropicais ao redor do planeta. Costuma
          permanecer próximo à superfície e realiza grandes migrações em busca
          de alimento. É frequentemente observado em países como México,
          Filipinas, Austrália, Indonésia e Maldivas.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Reprodução
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Pouco ainda é conhecido sobre sua reprodução devido às dificuldades
          de observação em ambiente natural. Sabe-se que a espécie é
          ovovivípara, ou seja, os filhotes se desenvolvem dentro de ovos que
          permanecem no corpo da mãe até o nascimento.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Curiosidades
        </h2>

        <ul className="list-disc ml-8 text-lg leading-8">
          <li>Existe há milhões de anos.</li>
          <li>É completamente inofensivo para seres humanos.</li>
          <li>Cada indivíduo possui um padrão exclusivo de manchas.</li>
          <li>Pode viver mais de 100 anos.</li>
          <li>É um dos maiores animais vivos do planeta.</li>
        </ul>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Estado de conservação
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Atualmente o tubarão-baleia encontra-se classificado como espécie
          ameaçada. Entre as principais causas estão a pesca acidental,
          colisões com embarcações, poluição dos oceanos e mudanças climáticas.
          Diversos países já adotam medidas para proteger essa espécie.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-14">

        <h2 className="text-3xl font-bold text-cyan-900 mb-6">
          Ficha Técnica
        </h2>

        <table className="w-full border border-gray-400 bg-white shadow-lg">

          <tbody>

            <tr className="border">
              <td className="font-bold p-3">Nome científico</td>
              <td className="p-3">Rhincodon typus</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Comprimento</td>
              <td className="p-3">Até 18 metros</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Peso</td>
              <td className="p-3">Mais de 20 toneladas</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Alimentação</td>
              <td className="p-3">Plâncton, krill e pequenos peixes</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Habitat</td>
              <td className="p-3">Oceanos tropicais e subtropicais</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Expectativa de vida</td>
              <td className="p-3">70 a 100 anos</td>
            </tr>

          </tbody>

        </table>

      </section>

      <div className="text-center py-14">

        <Link
          href="/"
          className="bg-cyan-700 hover:bg-cyan-900 text-white px-8 py-4 rounded-lg text-lg"
        >
          ← Voltar para a página inicial
        </Link>

      </div>

    </main>
  );
}