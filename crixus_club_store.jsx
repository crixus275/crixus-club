// Proyecto base de tienda estilo Amazon con colores y nombre personalizados
// Framework: Next.js + TailwindCSS + Vercel

// Estructura básica

// Archivo: /pages/index.tsx

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen text-green-900">
      <Head>
        <title>Crixus.Club</title>
      </Head>

      <header className="bg-green-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Crixus.Club</h1>
        <nav>
          <ul className="flex gap-4">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/productos">Productos</Link></li>
            <li><Link href="/carrito">Carrito</Link></li>
          </ul>
        </nav>
      </header>

      <main className="p-8">
        <h2 className="text-3xl font-bold mb-6">Productos destacados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Productos mock */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <img src="/producto.jpg" alt="Producto" className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">Producto {i}</h3>
              <p className="text-green-600 font-bold">$99.000</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-300 text-black py-1 px-2 rounded">
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-green-700 text-white text-center py-4 mt-10">
        &copy; {new Date().getFullYear()} Crixus.Club - Todos los derechos reservados
      </footer>
    </div>
  );
}

// Puedes subir esta estructura a GitHub y conectarla a Vercel directamente.
// Para desplegarlo, usa: `npx create-next-app crixus-club -e with-tailwindcss` y reemplaza el index.tsx con este contenido.
