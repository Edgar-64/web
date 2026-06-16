import './globals.css';
import Navbar from "../components/atoms/Navbar"; // Importando a Navbar

export const metadata = {
  title: 'Meu App Next.js',
  description: 'Criado com Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* A Navbar fica fixada no topo de todas as páginas */}
        <Navbar />
        
        <main className="max-w-7xl mx-auto p-4">
          {children}
        </main>
        
      </body>
    </html>
  );
}
