import { BookOpenCheck, FileText, GraduationCap, PieChart, Users, Lock, CreditCard, Bell, Settings } from 'lucide-react';

function Card({ title, icon: Icon, children, accent = '#1d4d6a' }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="rounded-md p-2" style={{ backgroundColor: `${accent}15` }}>
          <Icon className="h-5 w-5" style={{ color: accent }} />
        </div>
        <h3 className="text-base font-semibold text-[#1d4d6a]">{title}</h3>
      </div>
      <div className="mt-4 text-sm text-gray-700">
        {children}
      </div>
    </div>
  );
}

export default function SectionsGrid() {
  return (
    <section className="py-12" id="explore">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d4d6a]">Built for Students, Researchers, and Admins</h2>
          <p className="mt-2 text-gray-600">Modular dashboards, secure DRM, and streamlined workflows.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="User Dashboard" icon={PieChart}>
            <ul className="space-y-2 list-disc list-inside">
              <li>Reading history & progress charts</li>
              <li>Adaptive mock tests & leaderboard</li>
              <li>Notes repository with filters</li>
              <li>Writing services & chat with writer</li>
            </ul>
          </Card>

          <Card title="My Library" icon={BookOpenCheck}>
            <p>Grid of purchased e‑books with a secure HTML5 reader featuring highlights and watermark overlays.</p>
          </Card>

          <Card title="Mock Tests" icon={GraduationCap}>
            <p>Choose MCQ, essay, or case-based tests. Review analytics and compare with peers.</p>
          </Card>

          <Card title="Payments & Plans" icon={CreditCard}>
            <p>Manage subscriptions, invoices, and supported gateways (Razorpay, Stripe, PayPal).</p>
          </Card>

          <Card title="Notifications" icon={Bell}>
            <p>Stay updated with announcements, job alerts, and activity summaries via a bell dropdown & page view.</p>
          </Card>

          <Card title="Profile & Security" icon={Lock}>
            <p>Profile updates, MFA toggle, password resets, and theme preferences with high-contrast accessibility.</p>
          </Card>

          <Card title="Admin Dashboard" icon={Users}>
            <ul className="space-y-2 list-disc list-inside">
              <li>Sales, subscriptions, and top books</li>
              <li>Customer management & status control</li>
              <li>Content uploads with metadata tagging</li>
              <li>DRM controls and anti‑piracy logs</li>
            </ul>
          </Card>

          <Card title="Reports & Insights" icon={FileText}>
            <p>Monthly/annual revenue charts, downloadable CSV/PDF, and engagement metrics.</p>
          </Card>

          <Card title="System & Integrations" icon={Settings}>
            <p>Configure DRM, payments, analytics, AI automation for tagging, summaries, and question generation.</p>
          </Card>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a href="#pricing" className="rounded-md bg-[#bf2026] px-5 py-3 text-white font-semibold shadow hover:brightness-110 transition">
            View Pricing & Start
          </a>
          <p className="text-xs text-gray-500">Primary actions are highlighted in crimson for visibility.</p>
        </div>
      </div>
    </section>
  );
}
