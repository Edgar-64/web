import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  return (
    <div>
      <main>
        <h1>Sobre Mim</h1>
        <div className="space-y-3 mt-2">
          <p>
            Olá sou Edgar Maia, um desenvolvedor apaixonado por tecnologia e
            inovação.
          </p>
          <p>
            Encontrei no desenvolvimento de software uma forma de expressar minha
            criatividade e resolver problemas complexos.
          </p>
          <p>
            Minha jornada começou com a curiosidade sobre como os aplicativos e
            sites funcionam, o que me levou a aprender linguagens de programação e
            explorar diferentes áreas da tecnologia.
          </p>
          <p>
            Quando criança, adorava desmontar brinquedos para entender como eles
            funcionavam. Hoje, essa curiosidade se transformou em uma paixão por
            criar soluções digitais que impactam positivamente a vida das pessoas.
            Também sempre tive um raciocínio lógico notável, o que me ajudou a
            me destacar em áreas como matemática e ciências, e isso se reflete na
            minha abordagem ao desenvolvimento de software, onde busco sempre
            soluções eficientes e bem estruturadas.
          </p>
        </div>

        <div id="Meu Plano" className="mt-6">
          <h2>Meu Plano de Vida</h2>

          {/* 1. Primeiro Bloco */}
          <details className="group">
            <summary className="flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold">
              <div className="block group-open:hidden">
                <Image
                  src="/sandwichFechado2.png"
                  alt="Fechado"
                  width={24}
                  height={24}
                />
              </div>
              <div className="hidden group-open:block">
                <Image
                  src="/sandwichAberto2.png"
                  alt="Aberto"
                  width={24}
                  height={24}
                />
              </div>
              Programação Frontend
            </summary>
            <p className="mt-2 text-justify leading-relaxed text-slate-700">
              O meu foco principal no Frontend é o Next.js. A escolha por este
              framework veio de forma muito natural, já que utilizo o NestJS no
              ecossistema de Backend. Na minha opinião, eles andam lado a lado.
              Como o meu objetivo de carreira é tornar-me um desenvolvedor Full
              Stack, faz todo o sentido dominar tecnologias que são primas.
              Ambas utilizam TypeScript nativamente, o que me permite criar
              aplicações web extremamente rápidas (com SSR e SSG), mantendo uma
              organização de código limpa e padronizada entre o cliente e o
              servidor.
            </p>
          </details>

          {/* 2. Segundo Bloco */}
          <details className="group">
            <summary className="flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold">
              <div className="block group-open:hidden">
                <Image
                  src="/caixaFechada2.png"
                  alt="Fechado"
                  width={24}
                  height={24}
                />
              </div>
              <div className="hidden group-open:block">
                <Image
                  src="/caixaAberta2.png"
                  alt="Aberto"
                  width={24}
                  height={24}
                />
              </div>
              Internet das Coisas (IoT)
            </summary>
            <p className="mt-2 text-justify leading-relaxed text-slate-700">
              Para ser totalmente franco, o meu interesse e as minhas
              expectativas nesta área são bem baixas. Embora reconheça a
              importância da automação e dos dispositivos conectados no mercado
              tecnológico atual, o meu foco está completamente direcionado para
              o desenvolvimento de software puro, arquitectura de sistemas e
              aplicações escaláveis. Por isso, não pretendo entrar em grandes
              detalhes ou focar-me nesta vertente por agora.
            </p>
          </details>

          {/* 3. Terceiro Bloco */}
          <details className="group">
            <summary className="flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold">
              <div className="block group-open:hidden">
                <Image
                  src="/toolboxFechada2.png"
                  alt="Fechado"
                  width={24}
                  height={24}
                />
              </div>
              <div className="hidden group-open:block">
                <Image
                  src="/toolboxAberta2.png"
                  alt="Aberto"
                  width={24}
                  height={24}
                />
              </div>
              Teste de Software
            </summary>
            <p className="mt-2 text-justify leading-relaxed text-slate-700">
              No ecossistema de testes, foco-me em ferramentas baseadas em
              TypeScript e JavaScript. Vejo uma praticidade enorme e uma
              facilidade de compreensão única ao testar código nestas
              linguagens. Além disso, a grande vantagem é a familiaridade: ao
              testar com as mesmas ferramentas que já utilizo no dia a dia com
              Next.js e NestJS, consigo criar testes unitários e de integração
              de forma muito mais fluida, garantindo a qualidade e a segurança
              das minhas APIs e interfaces sem precisar de mudar de contexto.
            </p>
          </details>

          {/* 4. Quarto Bloco */}
          <details className="group">
            <summary className="flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold">
              <div className="block group-open:hidden">
                <Image
                  src="/sandwichFechado2.png"
                  alt="Fechado"
                  width={24}
                  height={24}
                />
              </div>
              <div className="hidden group-open:block">
                <Image
                  src="/sandwichAberto2.png"
                  alt="Aberto"
                  width={24}
                  height={24}
                />
              </div>
              Programação para Dispositivos Móveis
            </summary>
            <p className="mt-2 text-justify leading-relaxed text-slate-700">
              Para o desenvolvimento mobile, a minha escolha óbvia é o React
              Native com Expo. O ecossistema do Expo simplificou drasticamente a
              forma como criamos e testamos aplicações nativas para Android e
              iOS. O grande trunfo aqui é, mais uma vez, a reutilização de
              conhecimento. A lógica de componentes que utilizo no Next.js é
              incrivelmente parecida com a do React Native. Juntando isso ao
              poder do NestJS no backend, consigo fechar o ciclo de um projeto
              completo (Web, Mobile e API) dominando uma única stack poderosa.
            </p>
          </details>
        </div>

        <div id="Tecnologias" className="mt-6">
          <h2>Tecnologias</h2>
          <p className="mb-2">
            Tenho experiência com diversas tecnologias e ferramentas no
            desenvolvimento de software. Algumas das principais incluem:
          </p>
          <ul className="list-disc list-inside pl-2 text-slate-600">
            <li>Next.js</li>
            <li>NestJS</li>
            <li>React Native</li>
            <li>Expo</li>
          </ul>
        </div>

        <div id="contato" className="mt-6">
          <h2>Contato</h2>
          <p className="mb-2">
            Estou sempre aberto para novas oportunidades e colaborações. Se
            tiver interesse em trabalhar juntos ou quiser saber mais sobre meu
            trabalho, não hesite em me contatar!
          </p>
          <ul className="list-disc list-inside pl-2 text-slate-600">
            <li>edgarmaia.dev@gmail.com</li>
            <li>(12) 99191-4394</li>
          </ul>
        </div>
      </main>
      
      <div className="w-full flex justify-center mt-8">
        <Link href="/">
          <Image
            src="/TFImg.png"
            alt="Logo do Meu Site"
            width={1000}
            height={300}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
}