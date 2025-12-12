export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(0,195,255,0.15),transparent),linear-gradient(#0A1E3A,#031020)] text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-20 bg-[#0A1E3A]/70 backdrop-blur border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="font-bold tracking-wide text-lg">NOVACRIPTOWEB</div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#tokenomics" className="hover:text-sky-300">Tokenomics</a>
            <a href="#roadmap" className="hover:text-sky-300">Roadmap</a>

            {/* Botón para invertir */}
            <a
              href="mailto:founder@novacriptoweb.com"
              className="bg-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-xl shadow hover:bg-sky-300"
            >
              Invertir
            </a>

            {/* Cambiar idioma */}
            <div className="h-5 w-px bg-white/20" />
            <span className="font-semibold text-sky-300 text-xs">ES</span>
            <span className="text-white/40 text-xs">/</span>
            <a href="/en" className="hover:text-sky-300 text-xs">EN</a>
          </div>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-20">

        {/* HERO */}
        <section className="min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300/80">
              NOVACRIPTOWEB · TOKEN NOVA (NVC)
            </p>

            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              Plataforma digital financiera para el intercambio de criptomonedas
            </h1>

            <p className="mt-4 text-white/80 text-lg">
              NOVACRIPTOWEB es una plataforma para el intercambio seguro y sencillo de criptomonedas. 
              El token <strong>NOVA (NVC)</strong> impulsa el ecosistema con utilidad real: descuentos en comisiones, acceso premium y participación en gobernanza.
            </p>

            <a
              href="mailto:founder@novacriptoweb.com"
              className="inline-flex mt-8 bg-sky-400 text-slate-900 font-semibold px-5 py-3 rounded-xl shadow hover:bg-sky-300"
            >
              Contactar para inversión
            </a>

            {/* TARJETAS RESUMEN */}
            <div className="mt-10 grid md:grid-cols-3 gap-4 text-sm text-left">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h2 className="font-semibold mb-2">NOVA (NVC)</h2>
                <p className="text-white/70">
                  Token de utilidad y gobernanza dentro del ecosistema NOVACRIPTOWEB.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h2 className="font-semibold mb-2">Valor para usuarios</h2>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>Descuentos en comisiones.</li>
                  <li>Recompensas por uso y fidelidad.</li>
                  <li>Acceso a funciones avanzadas.</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h2 className="font-semibold mb-2">Visión</h2>
                <p className="text-white/70">
                  Hacer el mundo cripto más claro, más seguro y accesible para usuarios nuevos e inversores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TOKENOMICS */}
        <section id="tokenomics" className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-6">Tokenomics del token NOVA (NVC)</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm bg-white/5 border border-white/10 rounded-xl">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3">Categoría</th>
                  <th className="px-4 py-3">%</th>
                  <th className="px-4 py-3">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-3">Equipo & Advisors</td>
                  <td className="px-4 py-3">17%</td>
                  <td className="px-4 py-3">Bloqueo 48 meses + 12 meses cliff.</td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="px-4 py-3">Liquidez inicial</td>
                  <td className="px-4 py-3">13%</td>
                  <td className="px-4 py-3">Liquidez en mercados iniciales.</td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="px-4 py-3">Tesorería & desarrollo</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">Operaciones, crecimiento y expansión.</td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="px-4 py-3">Recompensas & comunidad</td>
                  <td className="px-4 py-3">25%</td>
                  <td className="px-4 py-3">Staking, incentivos y adopción.</td>
                </tr>

                <tr>
                  <td className="px-4 py-3">Rondas de inversión</td>
                  <td className="px-4 py-3">25%</td>
                  <td className="px-4 py-3">Venta privada y pública.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-6">Roadmap 2025</h2>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-1">Q1 · Bases del proyecto</h3>
              <ul className="list-disc list-inside text-white/70">
                <li>Definición funcional.</li>
                <li>Estructura del token NOVA.</li>
                <li>Modelo de gobernanza.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-1">Q2 · MVP & seguridad</h3>
              <ul className="list-disc list-inside text-white/70">
                <li>MVP de la plataforma.</li>
                <li>KYC/AML.</li>
                <li>Auditoría de smart contracts.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-1">Q3 · Lanzamiento</h3>
              <ul className="list-disc list-inside text-white/70">
                <li>Lanzamiento inicial.</li>
                <li>Listados de NOVA.</li>
                <li>Programa de recompensas.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-1">Q4 · Escalamiento</h3>
              <ul className="list-disc list-inside text-white/70">
                <li>Expansión internacional.</li>
                <li>Integración de partners.</li>
                <li>Roadmap 2026.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} NOVACRIPTOWEB · Token NOVA (NVC)
      </footer>
    </div>
  );
}
