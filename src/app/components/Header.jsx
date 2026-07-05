import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-[#E5E7EB] sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Link to Home */}
        <Link href="/" className="text-xl font-black text-[#20352E] tracking-tight hover:opacity-90 transition-opacity">
          Sakeng<span className="text-[#3D7A5E]">.</span>
        </Link>

        {/* Global Navigation - Works dynamically from any page route */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-bold text-[#20352E]/80">
          <Link href="/" className="hover:text-[#3D7A5E] transition-colors">
            Home
          </Link>
          <Link href="/#latest-livestock" className="hover:text-[#3D7A5E] transition-colors">
            Browse Livestock
          </Link>
          <Link href="/#how-it-works" className="hover:text-[#3D7A5E] transition-colors">
            Sell
          </Link>
        </div>

      </div>
    </nav>
  );
}