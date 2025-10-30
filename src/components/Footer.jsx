import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-[#1d4d6a]">Platform</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#1d4d6a]">Home</a></li>
              <li><a href="#explore" className="hover:text-[#1d4d6a]">Explore Books</a></li>
              <li><a href="#tests" className="hover:text-[#1d4d6a]">Mock Tests</a></li>
              <li><a href="#pricing" className="hover:text-[#1d4d6a]">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#1d4d6a]">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#1d4d6a]">About Us</a></li>
              <li><a href="#" className="hover:text-[#1d4d6a]">Jobs</a></li>
              <li><a href="#" className="hover:text-[#1d4d6a]">Help & Support</a></li>
              <li><a href="#" className="hover:text-[#1d4d6a]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#1d4d6a]">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#1d4d6a]">Privacy</a></li>
              <li><a href="#" className="hover:text-[#1d4d6a]">Terms</a></li>
              <li><a href="#" className="hover:text-[#1d4d6a]">DRM Policy</a></li>
              <li><a href="#" className="hover:text-[#1d4d6a]">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#1d4d6a]">Follow</h4>
            <div className="mt-3 flex items-center gap-3 text-gray-600">
              <a href="#" className="hover:text-[#1d4d6a]" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#1d4d6a]" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#1d4d6a]" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} ScholarShelf. All rights reserved.</p>
          <p className="text-xs text-gray-500">Designed with a modern academic SaaS aesthetic.</p>
        </div>
      </div>
    </footer>
  );
}
