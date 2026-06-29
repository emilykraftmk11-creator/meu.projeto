import Link from "next/link";

export default function Leopardo() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-100 to-blue-50">

      <header className="bg-cyan-900 text-white py-8 shadow-lg">
        <h1 className="text-5xl font-bold text-center">
          Tubarão-Leopardo
        </h1>

        <p className="text-center mt-4 text-lg">
          Elegância e tranquilidade nas águas costeiras.
        </p>
      </header>

      <section className="flex justify-center mt-10">
        <img
          src="/leopardo.jpg"
          alt="Tubarão-Leopardo"
          className="w-11/12 max-w-5xl h-[420px] object-cover rounded-2xl shadow-xl"
        />
      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-4xl font-bold text-cyan-900 mb-6">
          Sobre a espécie
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          O tubarão-leopardo (<i>Triakis semifasciata</i>) é uma espécie
          bastante conhecida por seu belo padrão de manchas escuras espalhadas
          pelo corpo, lembrando a pelagem de um leopardo. Essas marcas tornam
          cada indivíduo facilmente reconhecível e ajudam na camuflagem em
          ambientes costeiros.

          É um tubarão pequeno quando comparado a outras espécies e apresenta
          comportamento extremamente calmo. Por esse motivo, é frequentemente
          observado por mergulhadores e pesquisadores em regiões de águas
          rasas.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Características
        </h2>

        <ul className="list-disc ml-8 text-lg leading-8">
          <li>Corpo fino e alongado.</li>
          <li>Manchas semelhantes às de um leopardo.</li>
          <li>Pode atingir aproximadamente 2 metros.</li>
          <li>Excelente nadador.</li>
          <li>Comportamento tranquilo.</li>
          <li>Espécie considerada inofensiva para pessoas.</li>
        </ul>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Alimentação
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Sua dieta é bastante variada e inclui peixes de pequeno porte,
          camarões, caranguejos, lulas, polvos, vermes marinhos e diversos
          invertebrados encontrados no fundo do oceano.

          Utiliza seu olfato extremamente apurado para localizar alimentos,
          principalmente durante períodos de pouca luminosidade.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Habitat
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          O tubarão-leopardo vive principalmente em águas costeiras rasas,
          baías, estuários, praias arenosas e regiões próximas a florestas de
          algas marinhas.

          Sua distribuição ocorre principalmente ao longo da costa oeste da
          América do Norte, desde o estado do Oregon até o México.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Reprodução
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Trata-se de uma espécie vivípara. Os filhotes desenvolvem-se no
          interior do corpo da fêmea e nascem completamente formados.

          Normalmente cada gestação resulta em um número relativamente pequeno
          de filhotes, que já apresentam o padrão característico de manchas
          logo após o nascimento.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Curiosidades
        </h2>

        <ul className="list-disc ml-8 text-lg leading-8">
          <li>Recebe esse nome devido às manchas semelhantes às de um leopardo.</li>
          <li>É frequentemente visto por mergulhadores na Califórnia.</li>
          <li>Pode viver mais de 25 anos.</li>
          <li>Costuma formar grandes grupos em determinadas épocas do ano.</li>
          <li>É muito utilizado em pesquisas científicas sobre tubarões costeiros.</li>
        </ul>

      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">

        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Estado de conservação
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Atualmente essa espécie não é considerada uma das mais ameaçadas,
          porém sofre impactos causados pela pesca acidental, degradação das
          áreas costeiras e poluição marinha.

          Programas de conservação e monitoramento são importantes para manter
          suas populações estáveis ao longo das próximas décadas.
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
              <td className="p-3">Triakis semifasciata</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Comprimento</td>
              <td className="p-3">Até 2 metros</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Peso</td>
              <td className="p-3">18 a 30 kg</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Alimentação</td>
              <td className="p-3">
                Peixes, crustáceos, moluscos e invertebrados
              </td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Habitat</td>
              <td className="p-3">
                Águas costeiras do Oceano Pacífico
              </td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Expectativa de vida</td>
              <td className="p-3">Até 30 anos</td>
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