import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HEADER */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-sm font-semibold tracking-widest text-white/80">
          NOVACRIPTOWEB
        </div>

        <nav className="flex items-center gap-4 text-sm text-white/70">
          <a className="hover:text-white" href="#tokenomics">Tokenomics</a>
          <a className="hover:text-white" href="#roadmap">Roadmap</a>

          <span className="mx-1 text-white/30">|</span>

          <Link className="hover:text-white" href="/">ES</Link>
          <Link className="hover:text-white" href="/en">EN</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 text-center">
        <div className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/60">
          NOVACRIPTOWEB · TOKEN NOVA (NVC)
        </div>

        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Plataforma digital financiera <br />
          para el intercambio de <br />
          criptomonedas
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-white/70">
          NOVACRIPTOWEB es una plataforma para el intercambio seguro y sencillo
          de criptomonedas. El token NOVA (NVC) impulsa el ecosistema con utilidad
          real: descuentos en comisiones, acceso premium y participación en
          gobernanza.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:founder@novacriptoweb.com"
            className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Contactar para inversión
          </a>

          <a
            href="/investor-summary-novacriptoweb.pdf"
            className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold hover:border-white/30"
          >
            Descargar Investor Summary
          </a>

          <a
            href="/whitepaper-novacriptoweb.pdf"
            className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold hover:border-white/30"
          >
            Ver White Paper
          </a>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Tokenomics del token NOVA (NVC)
        </h2>

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
    <td className="px-4 py-3">Liquidez inicial</td>
    <td className="px-4 py-3">15%</td>
    <td className="px-4 py-3">
      Soporte para futuros listings y estabilidad del mercado
    </td>
  </tr>

  <tr>
    <td className="px-4 py-3">Desarrollo & Seguridad</td>
    <td className="px-4 py-3">25%</td>
    <td className="px-4 py-3">
      Desarrollo del producto, infraestructura, auditorías y seguridad
    </td>
  </tr>

  <tr>
    <td className="px-4 py-3">Ecosistema & Comunidad</td>
    <td className="px-4 py-3">20%</td>
    <td className="px-4 py-3">
      Incentivos de uso, crecimiento orgánico, marketing y adopción
    </td>
  </tr>

  <tr>
    <td className="px-4 py-3">Equipo & Founders</td>
    <td className="px-4 py-3">15%</td>
    <td className="px-4 py-3">
      Vesting a largo plazo e incentivos alineados al crecimiento
    </td>
  </tr>

  <tr>
    <td className="px-4 py-3">Inversores estratégicos</td>
    <td className="px-4 py-3">15%</td>
    <td className="px-4 py-3">
      Pre-Seed / Seed con enfoque en capital y know-how
    </td>
  </tr>

  <tr>
    <td className="px-4 py-3">Reserva / Tesorería</td>
    <td className="px-4 py-3">10%</td>
    <td className="px-4 py-3">
      Flexibilidad estratégica para el futuro del proyecto
    </td>
  </tr>
</tbody>

          </table>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Roadmap 2025</h2>

        <div className="grid gap-4 md:grid-cols-4 text-sm">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-2 font-semibold">Q1 · Fundamentos</h3>
            <ul className="list-disc pl-5 text-white/70">
              <li>Definición funcional</li>
              <li>Estructura del token</li>
              <li>Gobernanza</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-2 font-semibold">Q2 · MVP</h3>
            <ul className="list-disc pl-5 text-white/70">
              <li>Interfaz inicial</li>
              <li>Integraciones</li>
              <li>Seguridad</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-2 font-semibold">Q3 · Crecimiento</h3>
            <ul className="list-disc pl-5 text-white/70">
              <li>Marketing</li>
              <li>Comunidad</li>
              <li>Alianzas</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-2 font-semibold">Q4 · Expansión</h3>
            <ul className="list-disc pl-5 text-white/70">
              <li>Escalado</li>
              <li>Nuevas funciones</li>
              <li>Expansión regional</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONFIANZA Y SEGURIDAD */}
      <section id="security" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Confianza y Seguridad
        </h2>

        <div className="space-y-6 text-sm text-white/80">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold text-white">
              Filosofía centrada en la seguridad
            </h3>
            <p>
              En NOVACRIPTOWEB creemos que no existe crecimiento sostenible sin
              confianza. La plataforma se diseña desde cero con un enfoque
              security-first, priorizando la protección de fondos y la
              transparencia.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold text-white">
              Buenas prácticas planificadas
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Separación de fondos operativos y de usuarios</li>
              <li>Arquitectura orientada a custodia segura</li>
              <li>KYC/AML progresivo</li>
              <li>Auditorías antes de lanzamientos críticos</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold text-white">
              Compromiso con la transparencia
            </h3>
            <p>
              NOVACRIPTOWEB no promete retornos garantizados. El token NOVA (NVC)
              es un token de utilidad y gobernanza cuyo valor depende de la
              adopción real del ecosistema.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} NOVACRIPTOWEB · Token NOVA (NVC)
      </footer>
    </main>
  );
}