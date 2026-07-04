import { supabase } from './utils/supabase'; 
import LivestockCard from './components/LivestockCard';

// Force Next.js to fetch fresh database listings on every request
export const revalidate = 0;

async function getFeaturedListings() {
  const { data, error } = await supabase
    .from('listing')
    .select('*')
    .eq('status', 'AVAILABLE')
    .order('created_at', { ascending: false })
    .limit(4);

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
        
        {/* Full-Bleed Background Image Layer (Original Photo Reinstated) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={"https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=1600&q=80"} 
            alt="Lesotho Highlands Flock"
            className="w-full h-full object-cover object-center"
          />
          {/* Optimized Gradient Blur Overlay:
            - Reduced opacity from 85%/90% down to 60%/70% so the mountain scene and sheep are completely crisp and vibrant.
          */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFA] via-[#FBFBFA]/60 to-transparent md:bg-gradient-to-r md:from-[#FBFBFA] md:via-[#FBFBFA]/70 md:to-transparent" />
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
          
          {/* Feature 1: Verified Listings */}
          <div className="flex items-start space-x-3.5 pb-4 md:pb-0">
            <svg className="w-6 h-6 text-[#3D7A5E] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h4 className="text-sm font-bold text-[#20352E]">Verified Listings</h4>
              <p className="text-xs font-medium text-[#6D8077] mt-0.5">All listings are verified by Sakeng.</p>
            </div>
          </div>

          {/* Feature 2: Supervised Viewings */}
          <div className="flex items-start space-x-3.5 pt-4 md:pt-0 md:pl-6 pb-4 md:pb-0">
            <svg className="w-6 h-6 text-[#3D7A5E] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-bold text-[#20352E]">Supervised Viewings</h4>
              <p className="text-xs font-medium text-[#6D8077] mt-0.5">Safe, transparent, and professional.</p>
            </div>
          </div>

          {/* Feature 3: Direct WhatsApp Support */}
          <div className="flex items-start space-x-3.5 pt-4 md:pt-0 md:pl-6">
            <svg className="w-6 h-6 text-[#3D7A5E] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {listings.map((listing: any) => (
              <LivestockCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>

    </main>
  );
}