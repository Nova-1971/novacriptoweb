import Link from "next/link";

export default function HomeEN() {
  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      {/* HEADER */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="font-bold tracking-wider">NOVACRIPTOWEB</div>

        <nav className="flex items-center gap-6 text-sm">
          <a href="#tokenomics" className="text-white/70 hover:text-white">
            Tokenomics
          </a>
          <a href="#roadmap" className="text-white/70 hover:text-white">
            Roadmap
          </a>
          <a
            href="#invest"
            className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg"
          >
            Invest
          </a>

          {/* ES / EN */}
          <div className="flex items-center gap-2">
            <Link href="/" className="text-white/70 hover:text-white text-sm">
              ES
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/en" className="text-white hover:text-white text-sm font-semibold">
              EN
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-6 pt-10 pb-20">
        <p className="text-center text-white/50 text-xs tracking-[0.3em]">
          NOVACRIPTOWEB • NOVA TOKEN (NVC)
        </p>

        <h1 className="mt-6 text-center text-4xl md:text-6xl font-extrabold implying-tight leading-tight">
          Digital Financial Platform <br /> Secure cryptocurrency exchange
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-white/70">
          NOVACRIPTOWEB is a platform for safe and simple cryptocurrency exchange.
          The NOVA token (NVC) powers the ecosystem with real utility: fee discounts,
          premium access, and governance participation.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#invest"
            className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Contact for investment
          </a>

          <a
            href="/investor-summary-novacriptoweb.pdf"
            className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-xl"
          >
            Download Investor Summary
          </a>

          <a
            href="/whitepaper-novacriptoweb.pdf"
            className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-xl"
          >
            View White Paper
          </a>
        </div>

        {/* SECTIONS */}
        <section id="tokenomics" className="mt-20">
          <h2 className="text-2xl font-bold">Tokenomics</h2>
          <p className="mt-2 text-white/70">
            (Paste your tokenomics content here.)
          </p>
        </section>

        <section id="roadmap" className="mt-16">
          <h2 className="text-2xl font-bold">Roadmap</h2>
          <p className="mt-2 text-white/70">
            (Paste your roadmap content here.)
          </p>
        </section>

        <section id="invest" className="mt-16">
          <h2 className="text-2xl font-bold">Invest</h2>
          <p className="mt-2 text-white/70">
            (Paste your investment/contact section here.)
          </p>
        </section>

        <footer className="mt-20 border-t border-white/10 py-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} NOVACRIPTOWEB • NOVA Token (NVC)
        </footer>
      </main>
    </div>
  );
}
