import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionsGrid from './components/SectionsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SectionsGrid />

        {/* Pricing preview */}
        <section id="pricing" className="py-14 bg-[#1d4d6a]/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1d4d6a]">Pricing & Plans</h2>
              <p className="mt-2 text-gray-600">Straightforward plans for individual learners and teams.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1d4d6a]">Starter</h3>
                <p className="mt-1 text-sm text-gray-600">Public books, demo tests</p>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">Free</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>Preview‑only DRM reader</li>
                  <li>Sample mock tests</li>
                  <li>Community support</li>
                </ul>
                <button className="mt-6 w-full rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold text-[#1d4d6a] hover:bg-[#1d4d6a]/5">Get Started</button>
              </div>
              <div className="rounded-xl bg-white border-2 border-[#bf2026] p-6 shadow-md relative">
                <span className="absolute -top-3 right-4 rounded-full bg-[#bf2026] px-3 py-1 text-xs font-semibold text-white shadow">Popular</span>
                <h3 className="text-lg font-semibold text-[#1d4d6a]">Pro</h3>
                <p className="mt-1 text-sm text-gray-600">For serious learners</p>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">$12/mo</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>Full DRM reader access</li>
                  <li>Adaptive tests & analytics</li>
                  <li>Notes repository</li>
                  <li>Email support</li>
                </ul>
                <button className="mt-6 w-full rounded-md bg-[#bf2026] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110">Buy Pro</button>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1d4d6a]">Teams</h3>
                <p className="mt-1 text-sm text-gray-600">Labs & institutions</p>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">$49/mo</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>Admin controls & roles</li>
                  <li>Bulk licenses</li>
                  <li>Priority support</li>
                </ul>
                <button className="mt-6 w-full rounded-md bg-white border border-[#1d4d6a] px-4 py-2 text-sm font-semibold text-[#1d4d6a] hover:bg-[#1d4d6a]/5">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
