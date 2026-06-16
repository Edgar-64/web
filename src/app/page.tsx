"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div id="inicio">
          <h1>Bem-vindo ao Meu Site</h1>
          <p>
            Aqui serão apresentadas informações sobre mim, meus projetos e muito
            mais. Fique à vontade para explorar e conhecer um pouco mais sobre
            minha jornada como desenvolvedor.
          </p>
        </div>

        <div id="projetos">
          <h2>Meus Projetos</h2>
          <details className="group">
            <summary className="flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="font-semibold text-slate-800">Projeto Azul Finanças</span>
            </summary>
            
            <div className="mt-3 pl-2">
              <details className="group">
                <summary className="cursor-pointer font-medium text-slate-700">O que é o Projeto Azul Finanças?</summary>
                <p className="mt-1">
                  Um app que tem a missão de simplificar a gestão financeira
                  pessoal para pessoas que não tem familiaridade com ferramentas
                  financeiras tradicionais.
                </p>
              </details>
              
              <div className="mt-4 flex flex-col gap-2">
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  href="https://github.com/elt0n2022/Painel-azul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3593ff]"
                >
                  🔗 Painel-azul
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  href="https://github.com/Edgar-64/azul_financas-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3593ff]"
                >
                  🔗 azul_financas-mobile
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  href="https://github.com/Edgar-64/Api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3593ff]"
                >
                  🔗 Api
                </motion.a>
              </div>
            </div>
          </details>
        </div>
      </motion.main>

      <div className="w-full flex justify-center mt-8">
        <Link href="/">
          <Image
            src="/TFImg.png"
            alt="Logo do Meu Site"
            width={1000}
            height={300}
            className="object-contain h-auto" // <-- Correção da proporção
            priority // <-- Correção para o aviso de LCP
          />
        </Link>
      </div>
    </div>
  );
}