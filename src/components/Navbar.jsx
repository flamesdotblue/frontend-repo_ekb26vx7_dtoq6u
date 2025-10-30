import { useState } from 'react';
import { BookOpen, Menu, X, Search, Bell } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ children, href = '#' }) => (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1d4d6a] transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-md bg-[#1d4d6a] p-2">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-[#1d4d6a]">ScholarShelf</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink>Home</NavLink>
            <NavLink>Explore Books</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Jobs</NavLink>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <Search className="h-4 w-4 text-gray-500" />
              Search
            </button>
            <button className="relative inline-flex items-center justify-center rounded-md bg-white border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <Bell className="mr-2 h-4 w-4 text-[#1d4d6a]" />
              Alerts
            </button>
            <button className="rounded-md bg-[#bf2026] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 transition">
              Login / Register
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 py-3">
            <nav className="flex flex-col">
              <a className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" href="#">Home</a>
              <a className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" href="#">Explore Books</a>
              <a className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" href="#">Pricing</a>
              <a className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" href="#">Jobs</a>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Alerts
                </button>
                <button className="flex-1 rounded-md bg-[#bf2026] px-3 py-2 text-sm font-semibold text-white shadow hover:brightness-110">
                  Login / Register
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
