import Link from "next/link";

export default function Bambu() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-100 to-blue-50">

      <header className="bg-cyan-900 text-white py-8 shadow-lg">
        <h1 className="text-5xl font-bold text-center">
          Tubarão-Bambu
        </h1>

        <p className="text-center mt-4 text-lg">
          Uma pequena espécie que encanta pela sua aparência e comportamento tranquilo.
        </p>
      </header>

      <section className="flex justify-center mt-10">
        <img
          src="/bambu.jpg"
          alt="Tubarão-Bambu"
          className="w-11/12 max-w-5xl h-[420px] object-cover rounded-2xl shadow-xl"
        />
      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">
        <h2 className="text-4xl font-bold text-cyan-900 mb-6">
          Sobre a espécie
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          O tubarão-bambu pertence à família Hemiscylliidae e é conhecido
          pelo seu pequeno porte e comportamento bastante calmo. Diferente
          de muitos tubarões oceânicos, essa espécie vive próxima ao fundo
          do mar, principalmente em recifes de coral e áreas costeiras do
          Oceano Índico e do Oceano Pacífico.

          Seu nome vem do padrão de faixas presente nos filhotes, que lembra
          os nós encontrados nos caules do bambu. À medida que envelhecem,
          essas listras podem desaparecer ou ficar menos visíveis.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">
        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Características
        </h2>

        <ul className="list-disc ml-8 text-lg leading-8">
          <li>Espécie de pequeno porte.</li>
          <li>Corpo fino e alongado.</li>
          <li>Pode permanecer imóvel durante longos períodos.</li>
          <li>Excelente camuflagem entre corais e rochas.</li>
          <li>Possui hábitos predominantemente noturnos.</li>
          <li>É considerado inofensivo para os seres humanos.</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">
        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Alimentação
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Alimenta-se principalmente de pequenos peixes, camarões, caranguejos,
          moluscos e outros invertebrados encontrados próximos ao fundo do mar.
          Seu olfato bastante desenvolvido facilita a localização das presas
          mesmo durante a noite.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">
        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Habitat
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Vive em águas rasas, normalmente entre recifes de coral e áreas
          arenosas próximas à costa. Pode ser encontrado principalmente
          na Indonésia, Austrália, Filipinas, Papua-Nova Guiné e outras
          regiões tropicais da Ásia e Oceania.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">
        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Reprodução
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          O tubarão-bambu é ovíparo, ou seja, coloca ovos protegidos por
          cápsulas resistentes conhecidas como "bolsas de sereia". Após
          algumas semanas ou meses, dependendo da espécie, o filhote nasce
          totalmente formado e já capaz de sobreviver sozinho.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">
        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Curiosidades
        </h2>

        <ul className="list-disc ml-8 text-lg leading-8">
          <li>É muito comum em grandes aquários pelo mundo.</li>
          <li>Pode "andar" utilizando suas nadadeiras sobre o fundo do mar.</li>
          <li>É ativo principalmente durante a noite.</li>
          <li>Possui excelente capacidade de camuflagem.</li>
          <li>É uma das espécies preferidas por pesquisadores de comportamento animal.</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-8 mt-12">
        <h2 className="text-3xl font-bold text-cyan-900 mb-5">
          Estado de conservação
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Embora algumas espécies de tubarão-bambu ainda sejam relativamente
          comuns, outras sofrem com a destruição dos recifes de coral,
          poluição marinha e captura para o comércio de animais ornamentais.
          A preservação dos recifes é essencial para garantir sua sobrevivência.
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
              <td className="p-3">Chiloscyllium punctatum</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Comprimento</td>
              <td className="p-3">Até 1,2 metro</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Peso</td>
              <td className="p-3">Até 18 kg</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Alimentação</td>
              <td className="p-3">Peixes, crustáceos e moluscos</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Habitat</td>
              <td className="p-3">Recifes de coral e águas rasas tropicais</td>
            </tr>

            <tr className="border">
              <td className="font-bold p-3">Expectativa de vida</td>
              <td className="p-3">20 a 25 anos</td>
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