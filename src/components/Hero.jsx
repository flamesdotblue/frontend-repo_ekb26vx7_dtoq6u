import { ArrowRight, ShieldCheck, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fef2f2] to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#1d4d6a]">
              Online E‑Book Reading & Academic Services Platform
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl">
              Read securely with DRM, take adaptive mock tests, manage notes, and access
              premium academic services — all in one modern, trusted workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#explore"
                className="inline-flex items-center gap-2 rounded-md bg-[#bf2026] px-5 py-3 text-white font-semibold shadow hover:brightness-110 transition"
              >
                Explore Books
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#tests"
                className="inline-flex items-center gap-2 rounded-md bg-white border border-[#1d4d6a]/20 text-[#1d4d6a] px-5 py-3 font-semibold shadow-sm hover:bg-[#1d4d6a]/5 transition"
              >
                Start Mock Test
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#1d4d6a]" />
                DRM‑protected Reader
              </div>
              <div className="inline-flex items-center gap-2">
                <Layers className="h-4 w-4 text-[#1d4d6a]" />
                Modular Dashboards
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#1d4d6a] text-white p-4 shadow">
                  <p className="text-sm opacity-90">User Dashboard</p>
                  <p className="mt-2 text-2xl font-bold">Progress 72%</p>
                  <div className="mt-3 h-2 w-full rounded bg-white/20">
                    <div className="h-2 rounded bg-[#bf2026]" style={{ width: '72%' }} />
                  </div>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-4">
                  <p className="text-sm text-gray-600">Library</p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex justify-between"><span>Machine Learning</span><span className="text-green-600">Read</span></li>
                    <li className="flex justify-between"><span>Data Ethics</span><span className="text-[#bf2026]">New</span></li>
                    <li className="flex justify-between"><span>UX Research</span><span className="text-gray-500">Queued</span></li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-4 col-span-2">
                  <p className="text-sm text-gray-600">Sales & Subscriptions</p>
                  <div className="mt-2 h-24 w-full rounded bg-gradient-to-r from-[#bf2026]/10 via-[#1d4d6a]/10 to-[#bf2026]/10" />
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">Preview mocks of analytics, library and progress widgets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
