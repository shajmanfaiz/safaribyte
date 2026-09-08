import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-100 dark:bg-zinc-950/80 dark:border-zinc-800">
        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-[15px]">
            SafariByte
          </a>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                Services
              </a>
              <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                About
              </a>
              <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                Contact
              </a>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-2xl">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">SafariByte — independent team</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              We build websites and web applications.
            </h1>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-700 dark:text-zinc-300 mt-2 leading-tight">
              Clean, responsive and practical — for businesses and individuals.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-6 leading-7 max-w-xl">
              We help turn ideas into working products. You work directly with us, no
              layers.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                Start a Project
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <h2 className="text-xl font-semibold tracking-tight">Services</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
              Simple, practical solutions focused on what you need.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="font-medium">Websites</h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
                  Modern responsive websites for businesses, personal brands and small
                  businesses.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="font-medium">Web Applications</h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
                  Custom web applications built around your requirements.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="font-medium">Website Improvements</h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
                  Improve, redesign or add features to an existing website.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="font-medium">Maintenance</h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
                  Fix bugs, update content and make ongoing improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About + Why Work With Us */}
        <section id="about" className="border-t border-zinc-100 dark:border-zinc-800">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">About SafariByte</h2>
                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400 mt-4">
                  We are SafariByte — a small, independent team building clean and useful
                  websites. We work directly with clients to turn ideas into working
                  products, without agency overhead.
                </p>
                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400 mt-3">
                  Led by Shajman Faiz, freelance web developer.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Why work with us</h2>
                <ul className="mt-4 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex gap-2">
                    <span className="text-zinc-900 dark:text-zinc-100">—</span> Direct communication with the team
                  </li>
                  <li className="flex gap-2">
                    <span className="text-zinc-900 dark:text-zinc-100">—</span> Custom solutions for your needs
                  </li>
                  <li className="flex gap-2">
                    <span className="text-zinc-900 dark:text-zinc-100">—</span> Clean and responsive websites
                  </li>
                  <li className="flex gap-2">
                    <span className="text-zinc-900 dark:text-zinc-100">—</span> Focus on your requirements
                  </li>
                  <li className="flex gap-2">
                    <span className="text-zinc-900 dark:text-zinc-100">—</span> Flexible, practical collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-zinc-100 bg-zinc-900 text-white dark:border-zinc-800 dark:bg-zinc-900">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">Have a project in mind?</h2>
              <p className="text-sm text-zinc-400 mt-2">Tell us what you need and let&apos;s discuss it.</p>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="mailto:shajmanfaiz@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
                >
                  Email Us
                </a>
                <a
                  href="https://github.com/shajmanfaiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  GitHub
                </a>
              </div>
              <p className="text-xs text-zinc-500 mt-6">
                Replace the email placeholder with your actual address before sharing the site.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-900 text-zinc-500">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <span className="text-zinc-300 font-medium">SafariByte</span>
          <span className="text-xs">Built by Shajman Faiz and team</span>
        </div>
      </footer>
    </>
  );
}
