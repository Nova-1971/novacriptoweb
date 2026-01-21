import Link from "next/link";

export default function HomeES() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-sm font-semibold tracking-widest text-white/80">
          NOVACRIPTOWEB
        </div>

        <nav className="flex items-center gap-4 text-sm text-white/70">
          <a className="hover:text-white" href="#tokenomics">Tokenomics</a>
          <a className="hover:text-white" href="#roadmap">Roadmap</a>

          <span className="mx-1 text-white/30">|</span>

          <a className="rounded-md border border-white/15 px-2 py-1 hover:border-white/30" href="/">
            ES
          </a>
          <a className="rounded-md border border-white/15 px-2 py-1 hover:border-white/30" href="/en">
            EN
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/60">
            NOVACRIPTOWEB • TOKEN NOVA (NVC)
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Plataforma digital financiera <br />
            para el intercambio de <br />
            criptomonedas
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-white/70">
            NOVACRIPTOWEB es una plataforma para el intercambio seguro y sencillo de criptomonedas.
            El token NOVA (NVC) impulsa el ecosistema con utilidad real: descuentos en comisiones,
            acceso premium y participación en gobernanza.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Contactar para inversión
            </a>

            <a
              href="/download.pdf"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/30"
            >
              Descargar Investor Summary
            </a>

            <a
              href="/whitepaper-novacriptoweb.pdf"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/30"
            >
              Ver White Paper
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <div className="text-sm font-semibold">NOVA (NVC)</div>
              <p className="mt-2 text-sm text-white/70">
                Token de utilidad y gobernanza dentro del ecosistema NOVACRIPTOWEB.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <div className="text-sm font-semibold">Valor para usuarios</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                <li>Descuentos en comisiones.</li>
                <li>Recompensas por uso y fidelidad.</li>
                <li>Acceso a funciones avanzadas.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <div className="text-sm font-semibold">Visión</div>
              <p className="mt-2 text-sm text-white/70">
                Hacer el mundo cripto más claro, más seguro y accesible para usuarios nuevos e inversores.
              </p>
            </div>
          </div>
        </div>

        {/* TOKENOMICS */}
<section id="tokenomics" className="mt-20">
  <h2 className="text-3xl font-bold text-center mb-6">Tokenomics del token NOVA (NVC)</h2>

  <div className="overflow-x-auto">
    <table className="w-full text-left text-sm bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <thead className="bg-white/10">
        <tr>
          <th className="px-4 py-3">Categoría</th>
          <th className="px-4 py-3">%</th>
          <th className="px-4 py-3">Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-white/10">
          <td className="px-4 py-3">Liquidez</td>
          <td className="px-4 py-3">17%</td>
          <td className="px-4 py-3">Proveer liquidez en exchanges y pools</td>
        </tr>
        <tr className="border-t border-white/10">
          <td className="px-4 py-3">Desarrollo</td>
          <td className="px-4 py-3">13%</td>
          <td className="px-4 py-3">Construcción del producto, seguridad y auditorías</td>
        </tr>
        <tr className="border-t border-white/10">
          <td className="px-4 py-3">Marketing</td>
          <td className="px-4 py-3">20%</td>
          <td className="px-4 py-3">Crecimiento, comunidad, alianzas</td>
        </tr>
        <tr className="border-t border-white/10">
          <td className="px-4 py-3">Equipo</td>
          <td className="px-4 py-3">25%</td>
          <td className="px-4 py-3">Asignación para equipo (con vesting recomendado)</td>
        </tr>
        <tr className="border-t border-white/10">
          <td className="px-4 py-3">Reservas</td>
          <td className="px-4 py-3">25%</td>
          <td className="px-4 py-3">Fondo estratégico para oportunidades</td>
        </tr>
        <tr className="border-t border-white/10">
          <td className="px-4 py-3">Incentivos</td>
          <td className="px-4 py-3">10%</td>
          <td className="px-4 py-3">Recompensas, referidos, campañas y adopción</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

        <div id="roadmap" className="mt-16 text-center">
          <h2 className="text-2xl font-bold">Roadmap</h2>
          <p className="mt-3 text-white/70">
            (Aquí va tu roadmap. Mañana lo dejamos bonito y profesional.)
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} NOVACRIPTOWEB • NOVA Token (NVC)
      </footer>
    </main>
  );
}
