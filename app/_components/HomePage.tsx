import Link from "next/link";

type Props = {
  t: any;
  lang: "es" | "en";
};

export default function HomePage({ t, lang }: Props) {
  const year = new Date().getFullYear();
  const footerText = (t.footer as string).replace("{year}", String(year));

  return (
    <div lang={lang} className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-bold tracking-wide">NOVACRIPTOWEB</div>

          <div className="flex items-center gap-6 text-sm text-white/80">
            <a href="#tokenomics" className="hover:text-white">
              {t.nav.tokenomics}
            </a>
            <a href="#roadmap" className="hover:text-white">
              {t.nav.roadmap}
            </a>
            <a href="#security" className="hover:text-white">
              {t.nav.security}
            </a>
            <a href="#economic-model" className="hover:text-white">
              {t.nav.economicModel}
            </a>

            <a
              href="mailto:founder@novacriptoweb.com"
              className="rounded-lg bg-sky-400 px-4 py-2 font-semibold text-slate-900 hover:bg-sky-300"
            >
              {t.nav.invest}
            </a>

            {/* Switch ES/EN */}
            <div className="flex items-center gap-2">
              <Link href="/es" className="text-white/70 hover:text-white">
                {t.nav.langES}
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/en" className="text-white/70 hover:text-white">
                {t.nav.langEN}
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="py-16 text-center">
          <p className="text-xs tracking-[0.35em] text-white/60">{t.hero.eyebrow}</p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            {t.hero.title} <br />
            {t.hero.subtitle}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-white/70">{t.hero.desc}</p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:founder@novacriptoweb.com"
              className="rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-900 hover:bg-sky-300"
            >
              {t.hero.ctaInvest}
            </a>

            <a
              href="/investor-summary-novacriptoweb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15"
            >
              {t.hero.ctaInvestor}
            </a>

            <a
              href="/whitepaper-novacriptoweb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15"
            >
              {t.hero.ctaWhitepaper}
            </a>
          </div>

          {/* SUMMARY CARDS */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <h3 className="font-semibold">{t.cards.tokenTitle}</h3>
              <p className="mt-2 text-sm text-white/70">{t.cards.tokenText}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <h3 className="font-semibold">{t.cards.valueTitle}</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-white/70">
                {t.cards.valueBullets.map((b: string) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-left">
              <h3 className="font-semibold">{t.cards.visionTitle}</h3>
              <p className="mt-2 text-sm text-white/70">{t.cards.visionText}</p>
            </div>
          </div>
        </section>

        {/* TOKENOMICS */}
        <section id="tokenomics" className="py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">{t.tokenomics.title}</h2>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3">{t.tokenomics.headers.category}</th>
                  <th className="px-4 py-3">{t.tokenomics.headers.percent}</th>
                  <th className="px-4 py-3">{t.tokenomics.headers.description}</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                {t.tokenomics.rows.map((r: any) => (
                  <tr key={r.category}>
                    <td className="px-4 py-3">{r.category}</td>
                    <td className="px-4 py-3">{r.percent}</td>
                    <td className="px-4 py-3">{r.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">{t.roadmap.title}</h2>

          <div className="grid gap-4 md:grid-cols-4 text-sm">
            {["q1", "q2", "q3", "q4"].map((q) => (
              <div key={q} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-2 font-semibold">{t.roadmap[q].title}</h3>
                <ul className="list-disc pl-5 text-white/70">
                  {t.roadmap[q].bullets.map((b: string) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ECONOMIC MODEL */}
        <section id="economic-model" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-6">{t.economicModel.title}</h2>
          <div className="mx-auto max-w-4xl space-y-4 text-white/80 text-sm leading-relaxed">
            <p>{t.economicModel.p1}</p>
            <p>{t.economicModel.p2}</p>
            <p>{t.economicModel.p3}</p>
            <p>{t.economicModel.p4}</p>
          </div>
        </section>

        {/* TRUST & SECURITY */}
        <section id="security" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-6">{t.security.title}</h2>

          <div className="mx-auto max-w-4xl space-y-6 text-white/80 text-sm leading-relaxed">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{t.security.box1Title}</h3>
              <p>{t.security.box1Text}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{t.security.box2Title}</h3>
              <ul className="list-disc pl-5 space-y-1">
                {t.security.box2Bullets.map((b: string) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{t.security.box3Title}</h3>
              <p>{t.security.box3Text}</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
          {footerText}
        </footer>
      </main>
    </div>
  );
}
