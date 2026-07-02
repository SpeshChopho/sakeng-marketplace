export default function Footer() {
  return (
    <footer className="bg-[#1C243A] text-zinc-400 border-t border-white/5 py-8 mt-auto text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} <span className="text-white font-bold tracking-wider">SAKENG</span>. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-xs">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}