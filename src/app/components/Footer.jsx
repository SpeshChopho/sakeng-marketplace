export default function Footer() {
  return (
    <footer className="bg-white text-[#6D8077] border-t border-[#E5E7EB] pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#E5E7EB]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-base font-black tracking-wider text-[#20352E]">SAKENG LIVESTOCK</span>
            <p className="text-xs text-[#3F564C] font-medium leading-relaxed max-w-sm">
              Modern livestock marketplace connecting buyers and sellers across Lesotho.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-black text-[#20352E] uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col space-y-1.5 text-xs font-semibold text-[#3F564C]">
              <a href="#" className="hover:text-[#20352E] transition-colors">Home</a>
              <a href="#listings" className="hover:text-[#20352E] transition-colors">Browse Livestock</a>
              <a href="#" className="hover:text-[#20352E] transition-colors">How It Works</a>
              <a href="#" className="hover:text-[#20352E] transition-colors">About</a>
              <a href="#" className="hover:text-[#20352E] transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-black text-[#20352E] uppercase tracking-wider">Contact</h4>
            <div className="text-xs font-semibold text-[#3F564C] space-y-1">
              <p>WhatsApp: <a href="https://wa.me/26658566600" target="_blank" rel="noopener noreferrer" className="text-[#3D7A5E] hover:underline">+266 58566600</a></p>
              <p>Email: <a href="mailto:info@sakenglivestock.com" className="hover:underline">info@sakenglivestock.com</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Layer */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs font-medium space-y-3 sm:space-y-0">
          <div>
            <p>&copy; 2026 Sakeng Livestock. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6 font-semibold text-[#3F564C]">
            <a href="#" className="hover:text-[#20352E] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#20352E] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}