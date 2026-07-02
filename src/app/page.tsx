import LivestockCard from "./components/LivestockCard";

// Mock data configuration structure using the official contact info
const sampleListing = {
  id: "test-uuid-123",
  serial_id: "SKG-001",
  category: "Cattle",
  title: "Bonsmara Bull",
  breed: "Bonsmara",
  age_text: "18 Months",
  listing_price: 14500.00,
  location: "Maseru",
  inventory_count: 5,
  image_urls: [
    "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
  ],
  is_verified: true,
  status: "AVAILABLE"
};

export default function Home() {
  return (
    <div className="bg-[#F8F6F2] w-full overflow-x-hidden relative">
      
      {/* 1. HERO SECTION (Balanced Dual Column Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-center md:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#20352E] tracking-tight leading-tight">
              Lesotho’s Trusted <br />
              <span className="text-[#3D7A5E]">Livestock Marketplace</span>
            </h1>
            <p className="mt-6 text-[#3F564C] text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
              Browse verified livestock listings from across Lesotho. Connect directly with Sakeng via WhatsApp to inquire, arrange a viewing, and make a purchase with confidence.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="#listings" 
                className="inline-block bg-[#3D7A5E] text-white px-8 py-4 rounded-xl font-black text-sm tracking-wide shadow-xs hover:bg-[#285F44] transition-all transform active:scale-95"
              >
                Browse Livestock
              </a>
            </div>
          </div>

          {/* Right Column: Visual Balance Element */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative w-full h-64 sm:h-80 lg:h-[400px] rounded-[2rem] overflow-hidden border-4 border-white shadow-md transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80" 
                alt="Premium Livestock Marketplace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20352E]/30 to-transparent"></div>
              
              {/* Trust Badge Pin */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs py-2 px-4 rounded-xl border border-[#E5E7EB]">
                <span className="text-[10px] font-black tracking-wider text-[#20352E] uppercase block">Coverage</span>
                <span className="text-xs font-bold text-[#3D7A5E] block">100% Nationwide Lesotho</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CATEGORIES QUICK-STRIP */}
      <section className="bg-white border-y border-[#E5E7EB] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-black tracking-widest text-[#6D8077] uppercase block text-center md:text-left mb-3">
            Browse Livestock by Category
          </span>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {['Cattle', 'Sheep', 'Goats', 'Pigs', 'Poultry'].map((cat) => (
              <button 
                key={cat} 
                className="bg-[#F8F6F2] hover:bg-[#3D7A5E] hover:text-white border border-[#E5E7EB] text-[#20352E] font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED LISTINGS GRID */}
      <section id="listings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-black text-[#20352E] tracking-tight">
            Featured Livestock Listings
          </h2>
          <p className="text-[#6D8077] text-sm mt-1 font-semibold">
            Verified livestock available now.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center md:justify-items-start">
          <LivestockCard listing={sampleListing} />
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="bg-white border-t border-[#E5E7EB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#20352E] tracking-tight mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Browse", desc: "Explore available livestock listings." },
              { step: "2", title: "Inquire", desc: "Contact Sakeng directly via WhatsApp or Call to ask questions." },
              { step: "3", title: "Buy", desc: "Arrange viewing and complete the transaction." }
            ].map((item) => (
              <div key={item.step} className="bg-[#F8F6F2]/50 border border-[#E5E7EB] p-8 rounded-2xl flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#3D7A5E] text-white flex items-center justify-center font-black text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#20352E]">{item.title}</h3>
                <p className="text-sm text-[#3F564C] mt-2 font-medium max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT SAKENG & TRUST ELEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-center md:text-left">
            <span className="text-[11px] font-black tracking-widest text-[#3D7A5E] uppercase block mb-2">
              About Sakeng
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#20352E] tracking-tight leading-tight">
              Built for Livestock Farmers. <br />Designed for Trust.
            </h2>
            <p className="text-sm text-[#3F564C] mt-4 font-medium leading-relaxed">
              Sakeng Livestock is a modern livestock marketplace connecting buyers with quality livestock across Lesotho. Every listing is reviewed before publication to improve transparency and help buyers purchase with confidence.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Verified Listings", desc: "Every listing is reviewed before being published." },
              { title: "Direct Communication", desc: "Speak with Sakeng instantly through WhatsApp." },
              { title: "Local Marketplace", desc: "Focused exclusively on livestock in Lesotho." }
            ].map((trust, idx) => (
              <div key={idx} className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-xs">
                <h4 className="font-bold text-sm text-[#20352E]">{trust.title}</h4>
                <p className="text-xs text-[#6D8077] mt-2 font-medium leading-relaxed">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}