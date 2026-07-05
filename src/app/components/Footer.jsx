import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-[#6D8077] border-t border-[#E5E7EB] pt-12 pb-8 mt-auto scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#E5E7EB]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-base font-black tracking-wider text-[#20352E]">SAKENG LIVESTOCK</span>
            <p className="text-xs text-[#3F564C] font-medium leading-relaxed max-w-sm">
              Lesotho’s trusted livestock marketplace.<br />
              Simple, transparent livestock trading, built for Lesotho.
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-black text-[#20352E] uppercase tracking-wider">Explore</h4>
            <div className="flex flex-col space-y-1.5 text-xs font-semibold text-[#3F564C]">
              {/* FIXED LINK: Navigates back home dynamically */}
              <Link href="/" className="hover:text-[#20352E] transition-colors">Home</Link>
              
              {/* FIXED LINK: Re-mapped away from old anchor tags to the clean standalone /browse route */}
              <Link href="/browse" className="hover:text-[#20352E] transition-colors">Browse Livestock</Link>
              
              <a href="https://wa.me/26658566600?text=Hi%20Sakeng%2C%20I%20want%20to%20sell%20my%20livestock." target="_blank" rel="noopener noreferrer" className="hover:text-[#20352E] transition-colors">Sell Your Livestock</a>
              <Link href="/#how-it-works" className="hover:text-[#20352E] transition-colors">How Sakeng Works</Link>
            </div>
          </div>

          {/* Live Contact Endpoints Panel */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-black text-[#20352E] uppercase tracking-wider">Contact</h4>
            <div className="text-xs font-semibold text-[#3F564C] space-y-2">
              <p className="flex items-center space-x-1">
                <span>WhatsApp:</span>
                <a 
                  href="https://wa.me/26658566600" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#3D7A5E] hover:underline font-bold"
                >
                  +266 58566600
                </a>
              </p>
              <p className="flex items-center space-x-1">
                <span>Email:</span>
                <a 
                  href="mailto:info@sakenglivestock.com" 
                  className="text-[#3D7A5E] hover:underline font-bold"
                >
                  info@sakenglivestock.com
                </a>
              </p>
              <p className="text-[#6D8077]">
                Location: <span className="text-[#3F564C]">Maseru, Lesotho</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs font-medium space-y-3 sm:space-y-0">
          <div>
            <p>&copy; 2026 Sakeng Livestock. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 font-semibold text-[#3F564C]">
            <Link href="/" className="hover:text-[#20352E] transition-colors">Privacy policy</Link>
            <Link href="/" className="hover:text-[#20352E] transition-colors">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}