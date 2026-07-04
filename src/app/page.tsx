import { supabase } from './utils/supabase'; // Adjust this import path to match your project setup
import LivestockCard from './components/LivestockCard';

// Force Next.js to fetch fresh database listings on every request
export const revalidate = 0;

async function getFeaturedListings() {
  const { data, error } = await supabase
    .from('listing') // Using 'listing' table per your frontend schema update
    .select('*')
    .eq('status', 'AVAILABLE')
    .order('created_at', { ascending: false })
    .limit(4); // Pulling the top 4 featured listings for the home grid

  if (error) {
    console.error('Error fetching livestock listings:', error);
    return [];
  }
  return data || [];
}

export default async function Home() {
  const listings = await getFeaturedListings();

  return (
    <main className="min-h-screen bg-[#FBFBFA]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden bg-[#FBFBFA]">
        
        {/* Full-Bleed Background Image Layer (Safely wrapped for Next.js compilers) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={"https://images.unsplash.com/photo-1554755209-85e44182e019?q=80&w=774&auto=format&fit=crop"} 
            alt="Lesotho Highlands Sheep"
            className="w-full h-full object-cover object-center"
          />
          {/* 
            Intelligent Blend Gradient Overlay:
            - Mobile: Fades up from solid cream background to ensure text legibility at the bottom stack.
            - Desktop: Fades from left to right to perfectly mask the text area while showcasing the sheep.
          */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFA] via-[#FBFBFA]/85 to-transparent md:bg-gradient-to-r md:from-[#FBFBFA] md:via-[#FBFBFA]/90 md:to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto w-full px-6 py-12 md:py-20 z-10 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-start space-y-4 max-w-xl mt-auto md:mt-0">
            
            {/* Coverage Badge */}
            <div className="bg-white border border-[#E5E7EB] px-3.5 py-1.5 rounded-xl shadow-xs flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#6D8077] leading-none">Coverage</span>
              <span className="text-xs font-bold text-[#3D7A5E] mt-0.5">100% Nationwide Lesotho</span>
            </div>

            {/* Typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#20352E] tracking-tight leading-[1.1]">
              Lesotho’s Trusted <br />
              <span className="text-[#3D7A5E]">Livestock Marketplace</span>
            </h1>

            <p className="text-sm md:text-base font-medium text-[#6D8077] leading-relaxed max-w-md">
              Buy and sell livestock through verified listings, supervised viewings, and direct WhatsApp support.
            </p>

            {/* CTA Interaction Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="bg-[#3D7A5E] hover:bg-[#285F44] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xs text-center active:scale-[0.98]">
                Browse Livestock
              </button>
              <button className="bg-white hover:bg-zinc-50 border border-[#CCCECD] text-[#20352E] font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xs text-center active:scale-[0.98]">
                Sell Your Livestock
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VALUES / TRUST FEATURES SECTION ================= */}
      <section className="bg-white border-y border-[#E5E7EB] py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
          
          <div className="flex items-start space-x-3.5 pb-4 md:pb-0">
            <div className="text-2xl text-[#3D7A5E] mt-0.5">🛡️</div>
            <div>
              <h4 className="text-sm font-bold text-[#20352E]">Verified Listings</h4>
              <p className="text-xs font-medium text-[#6D8077] mt-0.5">All listings are verified by Sakeng.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 pt-4 md:pt-0 md:pl-6 pb-4 md:pb-0">
            <div className="text-2xl text-[#3D7A5E] mt-0.5">👥</div>
            <div>
              <h4 className="text-sm font-bold text-[#20352E]">Supervised Viewings</h4>
              <p className="text-xs font-medium text-[#6D8077] mt-0.5">Safe, transparent, and professional.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 pt-4 md:pt-0 md:pl-6">
            <div className="text-2xl text-[#3D7A5E] mt-0.5">💬</div>
            <div>
              <h4 className="text-sm font-bold text-[#20352E]">Direct WhatsApp Support</h4>
              <p className="text-xs font-medium text-[#6D8077] mt-0.5">Chat directly with our team or sellers.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURED LIVESTOCK GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-baseline mb-6">
          <h2 className="text-xl md:text-2xl font-black text-[#20352E] tracking-tight">
            Featured Livestock
          </h2>
          <button className="text-xs font-bold text-[#3D7A5E] hover:text-[#285F44] flex items-center space-x-1 transition-colors">
            <span>View All Livestock</span>
            <span>→</span>
          </button>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-12 text-center">
            <p className="text-sm font-medium text-[#6D8077]">No live listings available right now. Check back soon!</p>
          </div>
        ) : (
          /* High-density grid tailored for our beautiful, tight, non-screen-filling cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {listings.map((listing) => (
              <LivestockCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>

    </main>
  );
}