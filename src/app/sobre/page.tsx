"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <div>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Sobre Mim</h1>
        <div className="space-y-3 mt-2">
          <p>
            Olá sou Edgar Maia, um desenvolvedor apaixonado por tecnologia e
            inovação.
          </p>
          <p>
            Encontrei no desenvolvimento de software uma forma de expressar
            minha criatividade e resolver problemas complexos.
          </p>
          <p>
            Minha jornada começou com a curiosidade sobre como os aplicativos e
            sites funcionam, o que me levou a aprender linguagens de programação
            e explorar diferentes áreas da tecnologia.
          </p>
          <p>
            Quando criança, adorava desmontar brinquedos para entender como eles
            funcionavam...
          </p>
        </div>

        <div id="Meu Plano" className="mt-6">
          <h2>Meu Plano de Vida</h2>

          {/* O JavaScript vai controlar a entrada suave de cada bloco */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
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
                framework veio de forma muito natural, já que utilizo o NestJS
                no ecossistema de Backend. Na minha opinião, eles andam lado a
                lado. Como o meu objetivo de carreira é tornar-me um
                desenvolvedor Full Stack, faz todo o sentido dominar tecnologias
                que são &quot;primas&quot;. Ambas utilizam TypeScript nativamente, o que
                me permite criar aplicações web extremamente rápidas (com SSR e
                SSG), mantendo uma organização de código limpa e padronizada
                entre o cliente e o servidor.
              </p>
            </details>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
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
                Para o desenvolvimento mobile, a minha escolha óbvia é o React
                Native com Expo. O ecossistema do Expo simplificou drasticamente
                a forma como criamos e testamos aplicações nativas para Android
                e iOS. O grande trunfo aqui é, mais uma vez, a reutilização de
                conhecimento. A lógica de componentes que utilizo no Next.js é
                incrivelmente parecida com a do React Native. Juntando isso ao
                poder do NestJS no backend, consigo fechar o ciclo de um projeto
                completo (Web, Mobile e API) dominando uma única stack poderosa.
              </p>
            </details>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
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
                Native com Expo. O ecossistema do Expo simplificou drasticamente
                a forma como criamos e testamos aplicações nativas para Android
                e iOS. O grande trunfo aqui é, mais uma vez, a reutilização de
                conhecimento. A lógica de componentes que utilizo no Next.js é
                incrivelmente parecida com a do React Native. Juntando isso ao
                poder do NestJS no backend, consigo fechar o ciclo de um projeto
                completo (Web, Mobile e API) dominando uma única stack poderosa.
              </p>
            </details>
          </motion.div>
        </div>

        {/* ... Resto do código de Tecnologias e Contato igual ... */}
      </motion.main>

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
