'use client'; // Necessário para usar hooks como usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  // Função auxiliar para aplicar a cor se o link estiver ativo
  const linkStyle = (path: string) => 
    pathname === path ? 'text-blue-400 font-semibold' : 'hover:text-blue-400 transition-colors';

  return (
    <nav className="bg-slate-900 text-white p-4 navbar">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
          <Image 
              src="/logo.png"      
              alt="Logo do Meu Site" 
              width={70}              
              height={0}              
              className="object-contain"
            />
          </Link>
        </div>
        <div className="space-x-6">
          <Link href="/" className={linkStyle('/')}>Home</Link>
          <Link href="/sobre" className={linkStyle('/Sobre')}>Sobre</Link>
        </div>
      </div>
    </nav>
  );
}