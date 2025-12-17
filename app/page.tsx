export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-bold tracking-wide">NOVACRIPTOWEB</div>

          <div className="flex items-center gap-6 text-sm text-white/80">
            <a href="#tokenomics" className="hover:text-white">
              Tokenomics
            </a>
            <a href="#roadmap" className="hover:text-white">
              Roadmap
            </a>

            <a
              href="mailto:founder@novacriptoweb.com"
              className="rounded-lg bg-sky-400 px-4 py-2 font-semibold text-slate-900 hover:bg-sky-300"
            >
              Invertir
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="py-16 text-center">
          <p className="text-xs tracking-[0.35em] text-white/60">
            NOVACRIPTOWEB · TOKEN NOVA (NVC)
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Plataforma digital financiera <br />
            para el intercambio de criptomonedas
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-white/70">
            NOVACRIPTOWEB es una plataforma para el intercambio seguro y sencillo de criptomonedas.
            El token NOVA (NVC) impulsa el ecosistema con utilidad real: descuentos en comisiones,
            acceso premium y participación en gobernanza.
          </p>

          {/* BOTONES (ARREGLADOS, SEPARADOS) */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:founder@novacriptoweb.com"
              className="rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-900 hover:bg-sky-300"
            >
              Contactar para inversión
            </a>

            <a
              href="/investor-summary-novacriptoweb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15"
            >
              Descargar Investor Summary
            </a>

            <a
              href="/whitepaper-novacriptoweb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15"
            >
              Ver White Paper
            </a>
          </div>

          {/* TARJETAS RESUMEN */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <h3 className="font-semibold">NOVA (NVC)</h3>
              <p className="mt-2 text-sm text-white/70">
                Token de utilidad y gobernanza dentro del ecosistema NOVACRIPTOWEB.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <h3 className="font-semibold">Valor para usuarios</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-white/70">
                <li>Descuentos en comisiones.</li>
                <li>Recompensas por uso y fidelidad.</li>
                <li>Acceso a funciones avanzadas.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <h3 className="font-semibold">Visión</h3>
              <p className="mt-2 text-sm text-white/70">
                Hacer el mundo cripto más claro, más seguro y accesible para usuarios nuevos e inversores.
              </p>
            </div>
          </div>
        </section>

        {/* TOKENOMICS */}
        <section id="tokenomics" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Tokenomics del token NOVA (NVC)</h2>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3">Categoría</th>
                  <th className="px-4 py-3">%</th>
                  <th className="px-4 py-3">Descripción</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="px-4 py-3">Liquidez</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">Pool inicial y estabilidad de mercado</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Desarrollo</td>
                  <td className="px-4 py-3">25%</td>
                  <td className="px-4 py-3">Producto, seguridad, infraestructura</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Marketing</td>
                  <td className="px-4 py-3">15%</td>
                  <td className="px-4 py-3">Crecimiento en Venezuela y LATAM</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Equipo</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">Vesting / incentivos del equipo</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Comunidad</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">Recompensas e incentivos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Roadmap 2025</h2>

          <div className="grid gap-4 md:grid-cols-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Q1 · Bases</h3>
              <ul className="list-disc pl-5 text-white/70">
                <li>Definición funcional</li>
                <li>Estructura del token</li>
                <li>Modelo de gobernanza</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Q2 · MVP</h3>
              <ul className="list-disc pl-5 text-white/70">
                <li>Interfaz inicial</li>
                <li>Integraciones</li>
                <li>Seguridad</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Q3 · Crecimiento</h3>
              <ul className="list-disc pl-5 text-white/70">
                <li>Marketing</li>
                <li>Comunidad</li>
                <li>Alianzas</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Q4 · Expansión</h3>
              <ul className="list-disc pl-5 text-white/70">
                <li>Escalado</li>
                <li>Nuevas funciones</li>
                <li>Expansión regional</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} NOVACRIPTOWEB · Token NOVA (NVC)
        </footer>
      </main>
    </div>
  );
}
