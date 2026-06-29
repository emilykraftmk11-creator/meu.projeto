import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-100 to-blue-50">

      <header className="bg-cyan-900 text-white py-6 shadow-lg">
        <h1 className="text-5xl font-bold text-center">
          Espécies de Tubarão mais bonitas
        </h1>

        <p className="text-center mt-4 text-lg px-6 max-w-4xl mx-auto">
          Descubra algumas das espécies de tubarão mais bonitas do planeta.
          Apesar da fama de perigosos, esses animais desempenham um papel
          essencial para a saúde dos oceanos e para o equilíbrio da vida
          marinha.
        </p>
      </header>

      <section className="flex justify-center mt-10">
        <img
          src="/inicio.avif"
          alt="Diversas espécies de tubarões"
          className="w-11/12 max-w-6xl h-[380px] object-cover rounded-2xl shadow-xl"
        />
      </section>

      <section className="max-w-6xl mx-auto mt-12 px-8">

        <h2 className="text-4xl font-bold text-cyan-900 mb-6">
          Bem-vindo
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Os tubarões existem há mais de 400 milhões de anos, muito antes do
          surgimento dos dinossauros. Atualmente são conhecidas mais de
          500 espécies espalhadas pelos oceanos do mundo, variando desde
          pequenos tubarões de menos de um metro até gigantes como o
          tubarão-baleia, considerado o maior peixe do planeta.

          Neste site você conhecerá três espécies bastante diferentes entre
          si, aprendendo suas características, habitat, alimentação,
          curiosidades e importância para os ecossistemas marinhos.
        </p>

      </section>

      <section className="max-w-6xl mx-auto mt-16">

        <h2 className="text-4xl font-bold text-center text-cyan-900 mb-10">
          Espécies em destaque
        </h2>

        <div className="grid md:grid-cols-3 gap-8 px-8">

          <Link href="/baleia">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition cursor-pointer">

              <img
                src="/baleia.jpg"
                alt="Tubarão Baleia"
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  Tubarão-Baleia
                </h3>

                <p className="mt-3 text-gray-700">
                  O maior peixe do mundo, famoso por seu tamanho
                  impressionante e comportamento extremamente tranquilo.
                </p>

              </div>

            </div>
          </Link>

          <Link href="/bambu">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition cursor-pointer">

              <img
                src="/bambu.jpg"
                alt="Tubarão Bambu"
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  Tubarão-Bambu
                </h3>

                <p className="mt-3 text-gray-700">
                  Uma pequena espécie de hábitos noturnos que vive
                  próxima aos recifes de coral.
                </p>

              </div>

            </div>
          </Link>

          <Link href="/leopardo">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition cursor-pointer">

              <img
                src="/leopardo.jpg"
                alt="Tubarão Leopardo"
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  Tubarão-Leopardo
                </h3>

                <p className="mt-3 text-gray-700">
                  Conhecido pelas manchas espalhadas pelo corpo e pelo
                  comportamento calmo.
                </p>

              </div>

            </div>
          </Link>

        </div>

      </section>

      <section className="max-w-6xl mx-auto mt-20 px-8">

        <h2 className="text-4xl font-bold text-cyan-900 mb-8">
          A importância dos tubarões
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Muitas pessoas associam os tubarões apenas ao perigo, porém eles são
          fundamentais para o equilíbrio dos oceanos. Como predadores de topo,
          controlam populações de peixes e evitam a proliferação excessiva de
          determinadas espécies, contribuindo para manter os ecossistemas
          saudáveis.

          Além disso, ajudam a eliminar animais doentes e enfraquecidos,
          favorecendo populações mais resistentes. A presença dos tubarões é um
          indicador da qualidade ambiental dos mares.

          Infelizmente, diversas espécies encontram-se ameaçadas devido à pesca
          predatória, destruição de habitats e poluição marinha, tornando sua
          conservação extremamente importante.
        </p>

      </section>

      <section className="max-w-6xl mx-auto mt-20">

        <h2 className="text-4xl font-bold text-center text-cyan-900 mb-10">
          Outras espécies
        </h2>

        <div className="flex flex-wrap justify-center gap-4 px-6">

          <button className="bg-cyan-700 text-white px-5 py-3 rounded-lg">Tubarão-Zebra</button>

          <button className="bg-cyan-700 text-white px-5 py-3 rounded-lg">Tubarão-Gralha-Preta</button>

          <button className="bg-cyan-700 text-white px-5 py-3 rounded-lg">Tubarão-Branco</button>

          <button className="bg-cyan-700 text-white px-5 py-3 rounded-lg">Tubarão-Tigre</button>

          <button className="bg-cyan-700 text-white px-5 py-3 rounded-lg">Tubarão-Martelo</button>

          <button className="bg-cyan-700 text-white px-5 py-3 rounded-lg">Tubarão-Mako</button>

          <button className="bg-cyan-700 text-white px-5 py-3 rounded-lg">Tubarão-Lixa</button>

          <button className="bg-cyan-700 text-white px-5 py-3 rounded-lg">Tubarão-Raposa</button>

          <button className="bg-cyan-700 text-white px-5 py-3 rounded-lg">Tubarão-Anjo</button>

          <button className="bg-cyan-700 text-white px-5 py-3 rounded-lg">Tubarão-Azul</button>

        </div>

      </section>

      <footer className="bg-cyan-900 text-white text-center mt-20 py-8">

        <h3 className="text-2xl font-bold">
          Espécies de Tubarão
        </h3>


      </footer>

    </main>
  );
}