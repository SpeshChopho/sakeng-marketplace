export default function Footer() {
  return (
    // White background footer with standard border division and custom body tracking color
    <footer className="bg-white text-[#6D8077] border-t border-[#E5E7EB] py-8 mt-auto text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} <span className="text-[#20352E] font-black tracking-wider">SAKENG</span>. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-xs font-semibold">
          <a href="#" className="hover:text-[#20352E] text-[#3F564C] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#20352E] text-[#3F564C] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#20352E] text-[#3F564C] transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}