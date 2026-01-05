import Link from "next/link";

export default function Home() {
  return (
    <div lang="en" className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
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
              Invest
            </a>

            {/* Switch ES/EN */}
            <div className="flex items-center gap-2">
              <Link href="/" className="text-white/70 hover:text-white">
                ES
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/en" className="text-white/70 hover:text-white">
                EN
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="py-16 text-center">
          <p className="text-xs tracking-[0.35em] text-white/60">
            NOVACRIPTOWEB · NOVA TOKEN (NVC)
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Digital Financial Platform <br />
            Secure cryptocurrency exchange
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-white/70">
            NOVACRIPTOWEB is a platform for safe and simple cryptocurrency exchange.
            The NOVA token (NVC) powers the ecosystem with real utility: fee discounts,
            premium access, and governance participation.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:founder@novacriptoweb.com"
              className="rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-900 hover:bg-sky-300"
            >
              Contact for investment
            </a>

            <a
              href="/investor-summary-novacriptoweb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15"
            >
              Download Investor Summary
            </a>

            <a
              href="/whitepaper-novacriptoweb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15"
            >
              View White Paper
            </a>
          </div>

          {/* SUMMARY CARDS */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <h3 className="font-semibold">NOVA (NVC)</h3>
              <p className="mt-2 text-sm text-white/70">
                Utility and governance token within the NOVACRIPTOWEB ecosystem.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <h3 className="font-semibold">User value</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-white/70">
                <li>Fee discounts.</li>
                <li>Rewards for usage and loyalty.</li>
                <li>Access to advanced features.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <h3 className="font-semibold">Vision</h3>
              <p className="mt-2 text-sm text-white/70">
                Make crypto clearer, safer, and more accessible for new users and investors.
              </p>
            </div>
          </div>
        </section>

        {/* TOKENOMICS */}
        <section id="tokenomics" className="py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            NOVA (NVC) Tokenomics
          </h2>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">%</th>
                  <th className="px-4 py-3">Description</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="px-4 py-3">Liquidity</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">Initial pool and market stability</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Development</td>
                  <td className="px-4 py-3">25%</td>
                  <td className="px-4 py-3">Product, security, infrastructure</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Marketing</td>
                  <td className="px-4 py-3">15%</td>
                  <td className="px-4 py-3">Growth in Venezuela and LATAM</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Team</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">Vesting / team incentives</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Community</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">Rewards and incentives</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Roadmap 2025</h2>

          <div className="grid gap-4 md:grid-cols-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-2 font-semibold">Q1 · Foundations</h3>
              <ul className="list-disc pl-5 text-white/70">
                <li>Functional definition</li>
                <li>Token structure</li>
                <li>Governance model</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-2 font-semibold">Q2 · MVP</h3>
              <ul className="list-disc pl-5 text-white/70">
                <li>Initial interface</li>
                <li>Integrations</li>
                <li>Security</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-2 font-semibold">Q3 · Growth</h3>
              <ul className="list-disc pl-5 text-white/70">
                <li>Marketing</li>
                <li>Community</li>
                <li>Partnerships</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-2 font-semibold">Q4 · Expansion</h3>
              <ul className="list-disc pl-5 text-white/70">
                <li>Scaling</li>
                <li>New features</li>
                <li>Regional expansion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} NOVACRIPTOWEB · NOVA Token (NVC)
        </footer>
      </main>
    </div>
  );
}
