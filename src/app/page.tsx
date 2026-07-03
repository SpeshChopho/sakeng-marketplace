import LivestockCard from "./components/LivestockCard";

// Mock data array configured for the livestock cards grid (Max 4 items on mobile)
const sampleListings = [
  {
    id: "test-uuid-1",
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
      "https://images.unsplash.com/photo-1587572236140-5e04eb7c6530?auto=format&fit=crop&w=800&q=80"
    ],
    is_verified: true,
    status: "AVAILABLE"
  }
];

// Content Schema categories with explicit item counts
const categories = [
  { name: "Cattle", count: 12, emoji: "🐄" },
  { name: "Sheep", count: 7, emoji: "🐑" },
  { name: "Goats", count: 2, emoji: "🐐" },
  { name: "Pigs", count: 3, emoji: "🐖" },
  { name: "Poultry", count: 100, emoji: "🐓" }
];

export default function Home() {
  return (
    <div className="bg-[#F8F6F2] w-full overflow-x-hidden relative">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 text-center md:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#20352E] tracking-tight leading-tight">
              Lesotho’s Trusted <br />
              <span className="text-[#3D7A5E]">Livestock Marketplace</span>
            </h1>
            <p className="mt-6 text-[#3F564C] text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
              Buy and sell livestock through verified listings, supervised viewings, and direct WhatsApp support.
            </p>
            
            {/* Dual Hero Call-To-Action Framework */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="#listings" 
                className="inline-block text-center bg-[#3D7A5E] text-white px-8 py-4 rounded-xl font-black text-sm tracking-wide shadow-xs hover:bg-[#285F44] transition-all transform active:scale-95"
              >
                Browse Livestock
              </a>
              <a 
                href="https://wa.me/26658566600?text=Hi%20Sakeng%2C%20I%20want%20to%20sell%20my%20livestock." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-white text-[#20352E] border-2 border-[#20352E] px-8 py-4 rounded-xl font-black text-sm tracking-wide shadow-2xs hover:bg-zinc-50 transition-all transform active:scale-95"
              >
                Sell Your Livestock
              </a>
            </div>
          </div>

          {/* Right Column Frame */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative w-full h-64 sm:h-80 lg:h-[340px] rounded-[2rem] overflow-hidden border-4 border-white shadow-md transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=1000&q=80" 
                alt="Premium Quality Livestock Sheep Lesotho"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20352E]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs py-2 px-4 rounded-xl border border-[#E5E7EB]">
                <span className="text-[10px] font-black tracking-wider text-[#20352E] uppercase block">Coverage</span>
                <span className="text-xs font-bold text-[#3D7A5E] block">100% Nationwide Lesotho</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHY BUYERS AND SELLERS TRUST SAKENG */}
      <section className="bg-white border-y border-[#E5E7EB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#20352E] tracking-tight">
              Why Buyers and Sellers Trust Sakeng
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Trusted Marketplace", desc: "A simple and transparent way to buy and sell livestock." },
              { title: "Verified Livestock", desc: "Selected livestock is checked before being listed." },
              { title: "Supervised Viewings", desc: "We help arrange and supervise viewings for added peace of mind." },
              { title: "WhatsApp Support", desc: "Our team is available to answer your questions and guide you through the process." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F8F6F2]/50 border border-[#E5E7EB] p-6 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-[#3D7A5E]/10 flex items-center justify-center text-[#3D7A5E] font-black text-sm mb-4">
                  ✓
                </div>
                <h4 className="font-bold text-base text-[#20352E]">{item.title}</h4>
                <p className="text-xs text-[#3F564C] mt-2 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LATEST LIVESTOCK */}
      <section id="listings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-black text-[#20352E] tracking-tight">
            Latest Livestock
          </h2>
          <p className="text-[#6D8077] text-sm mt-1 font-semibold">
            Browse some of the latest verified livestock currently available across Lesotho.
          </p>
        </div>

        {/* Dynamic Grid Layout showing max 4 on small views */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center md:justify-items-start">
          {sampleListings.slice(0, 4).map((listing) => (
            <LivestockCard key={listing.id} listing={listing} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center space-x-2 bg-white border border-[#E5E7EB] text-[#20352E] font-bold text-sm px-6 py-3 rounded-xl hover:bg-zinc-50 transition-colors shadow-2xs">
            <span>View All Livestock</span>
            <span>➔</span>
          </button>
        </div>
      </section>

      {/* 4. BROWSE BY CATEGORY */}
      <section className="bg-white border-y border-[#E5E7EB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-[#20352E] tracking-tight">
              Browse by Category
            </h2>
            <p className="text-[#6D8077] text-sm mt-1 font-semibold">
              Choose a category to explore available livestock across Lesotho.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <button 
                key={cat.name} 
                className="bg-[#F8F6F2] hover:bg-[#3D7A5E] hover:text-white border border-[#E5E7EB] text-[#20352E] group p-5 rounded-2xl transition-all text-center flex flex-col items-center justify-center space-y-2"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span className="block font-bold text-sm group-hover:text-white">{cat.name}</span>
                <span className="inline-block text-[10px] bg-white text-[#6D8077] group-hover:bg-black/10 group-hover:text-white px-2 py-0.5 rounded-full font-black">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW SAKENG WORKS? */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-[#20352E] tracking-tight">
            How Sakeng works?
          </h2>
          <p className="text-[#3F564C] text-sm mt-1 font-semibold">
            Buying or selling livestock is simple with Sakeng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-[#3D7A5E]/10 text-[#3D7A5E] flex items-center justify-center font-black text-sm mb-4">
              1
            </div>
            <h3 className="text-lg font-bold text-[#20352E]">Browse</h3>
            <p className="text-xs text-[#3F564C] mt-2 font-medium leading-relaxed">
              View available livestock across Lesotho.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-[#3D7A5E]/10 text-[#3D7A5E] flex items-center justify-center font-black text-sm mb-4">
              2
            </div>
            <h3 className="text-lg font-bold text-[#20352E]">Contact Us</h3>
            <p className="text-xs text-[#3F564C] mt-2 font-medium leading-relaxed">
              Message us on WhatsApp. We’ll answer your questions and connect you with the seller.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-[#3D7A5E]/10 text-[#3D7A5E] flex items-center justify-center font-black text-sm mb-4">
              3
            </div>
            <h3 className="text-lg font-bold text-[#20352E]">Meet & Buy</h3>
            <p className="text-xs text-[#3F564C] mt-2 font-medium leading-relaxed mb-4">
              For eligible livestock, Sakeng helps make the buying process more secure.
            </p>
            <div className="border-t border-[#E5E7EB] pt-4 space-y-2 text-[11px] text-[#3F564C] font-medium">
              <p className="text-[#6D8077] italic font-semibold mb-2">
                *Applies to selected livestock only. Eligible listings are marked with the Sakeng Verified badge.
              </p>
              <div className="flex items-start space-x-2">
                <span className="text-[#3D7A5E] font-black">•</span>
                <p>Book a supervised viewing with the Sakeng team.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#3D7A5E] font-black">•</span>
                <p>Pay a refundable 5% commitment fee to reserve your viewing.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#3D7A5E] font-black">•</span>
                <p><span className="font-bold text-[#20352E]">Buy with confidence</span> - If you purchase the livestock, your commitment fee is deducted from the purchase price.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#3D7A5E] font-black">•</span>
                <p><span className="font-bold text-[#20352E]">Protected if things don’t match</span> - If the animal does not match its listing, your commitment fee is fully refunded.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR MISSION */}
      <section className="bg-[#20352E] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-black tracking-widest text-[#3D7A5E] uppercase block mb-3">Our Mission</span>
          <p className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-100 max-w-2xl mx-auto leading-relaxed">
            We’re building a safer and more transparent way to buy and sell livestock in Lesotho through verified listings, supervised viewings, and direct support.
          </p>
        </div>
      </section>

    </div>
  );
}