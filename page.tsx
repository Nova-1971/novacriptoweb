export default function HomeEn() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(0,195,255,0.15),transparent),linear-gradient(#0A1E3A,#031020)] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 bg-[#0A1E3A]/70 backdrop-blur border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold tracking-wide text-lg">NOVACRIPTOWEB</div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#tokenomics" className="hover:text-sky-300">Tokenomics</a>
            <a href="#roadmap" className="hover:text-sky-300">Roadmap</a>
            <a href="#contact" className="hover:text-sky-300">Contact</a>

            {/* Language switch */}
            <div className="h-5 w-px bg-white/20" />
            <a href="/" className="hover:text-sky-300 text-xs">ES</a>
            <span className="text-white/40 text-xs">/</span>
            <span className="font-semibold text-sky-300 text-xs">EN</span>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        {/* HERO */}
        <section className="min-h-[60vh] text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
            A simple and secure crypto exchange platform
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-3xl mx-auto">
            NOVACRIPTOWEB is a user-friendly platform for cryptocurrency exchange.{" "}
            The token <strong>NOVA (NVC)</strong> powers the ecosystem with real utility: 
            discounts, premium access and governance rights.
          </p>
          <a
            href="mailto:founder@novacriptoweb.com"
            className="inline-block mt-8 bg-sky-400 text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-sky-300"
          >
            Contact the team
          </a>
        </section>

        {/* TOKENOMICS */}
        <section id="tokenomics" className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-6">NOVA (NVC) Tokenomics</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm bg-white/5 border border-white/10 rounded-xl">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">%</th>
                  <th className="px-4 py-3">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">Team & Advisors</td>
                  <td className="px-4 py-3">17%</td>
                  <td className="px-4 py-3">48-month vesting, 12-month cliff.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">Initial Liquidity</td>
                  <td className="px-4 py-3">13%</td>
                  <td className="px-4 py-3">Liquidity for early market trading.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">Treasury & Development</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">Operations, growth and expansion.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">Rewards & Community</td>
                  <td className="px-4 py-3">25%</td>
                  <td className="px-4 py-3">Staking, loyalty and adoption.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">Investor Rounds</td>
                  <td className="px-4 py-3">25%</td>
                  <td className="px-4 py-3">Private and public sale allocations.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-6">2025 Roadmap</h2>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Q1 – Foundations</h3>
              <ul className="list-disc list-inside text-white/70">
                <li>Platform definition</li>
                <li>NOVA token architecture</li>
                <li>Governance model</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Q2 – MVP</h3>
              <ul className="list-disc list-inside text-white/70">
                <li>Exchange MVP</li>
                <li>KYC/AML integration</li>
                <li>Smart-contract audits</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Q3 – Launch</h3>
              <ul className="list-disc list-inside text-white/70">
                <li>Controlled launch</li>
                <li>NVC listings</li>
                <li>Rewards program</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Q4 – Scaling</h3>
              <ul className="list-disc list-inside text-white/70">
                <li>Market expansion</li>
                <li>Partnership integrations</li>
                <li>Roadmap 2026</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-4">Investor Contact</h2>
          <p className="text-center text-white/70 mb-6">
            Reach out if you want to explore investment or partnership opportunities.
          </p>
          <p className="text-center text-sky-300 text-lg font-semibold">
            founder@novacriptoweb.com
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-white/50 text-xs">
        © {new Date().getFullYear()} NOVACRIPTOWEB · NOVA (NVC)
      </footer>
    </div>
  );
}
