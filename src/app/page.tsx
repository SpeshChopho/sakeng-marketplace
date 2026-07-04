import { supabase } from './utils/supabase'; 
import LivestockCard from './components/LivestockCard';

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
      <section className="relative w-full min-h-[540px] md:min-h-[640px] flex items-center overflow-hidden bg-[#FBFBFA]">
        
        {/* Full-Bleed Background Image (Exact Portrait Image from image_8.png) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={"https://images.unsplash.com/photo-1554755209-85e44182e019?q=80&w=774&auto=format&fit=crop"} 
            alt="Lesotho Highland Sheep Portrait"
            className="w-full h-full object-cover object-center md:object-[right_25%]"
          />
          {/* Vertical white gradient overlay to mask only the text zone at 60% opacity */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFA] via-[#FBFBFA]/70 to-transparent md:bg-gradient-to-r md:from-[#FBFBFA] md:via-[#FBFBFA]/60 md:to-transparent md:w-[65%]" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto w-full px-6 py-12 md:py-20 z-10 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-start space-y-5 max-w-xl mt-auto md:mt-0">
            
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

            <p className="text-sm md:text-base font-medium text-[#20352E] leading-relaxed max-w-md">
              Buy and sell livestock through verified listings, supervised viewings, and direct WhatsApp support.
            </p>

            {/* CTA Interaction Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="bg-[#3D7A5E] hover:bg-[#285F44] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xs text-center active:scale-[0.98]">
                Browse Livestock
              </button>
              <button className="bg-white hover:bg-zinc-50 border border-[#3D7A5E] text-[#3D7A5E] font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xs text-center active:scale-[0.98]">
                Sell Your Livestock
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VALUES / TRUST FEATURES SECTION ================= */}
      <section className="bg-white border-y border-[#E5E7EB] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
          
          {/* Verified Listings */}
          <div className="flex items-start space-x-4 pb-4 md:pb-0">
            <svg className="w-6 h-6 text-[#3D7A5E] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h4 className="text-sm font-bold text-[#20352E]">Verified Listings</h4>
              <p className="text-xs font-medium text-[#6D8077] mt-0.5">All listings are verified by Sakeng.</p>
            </div>
          </div>

          {/* Supervised Viewings */}
          <div className="flex items-start space-x-4 pt-4 md:pt-0 md:pl-6 pb-4 md:pb-0">
            <svg className="w-6 h-6 text-[#3D7A5E] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-bold text-[#20352E]">Supervised Viewings</h4>
              <p className="text-xs font-medium text-[#6D8077] mt-0.5">Safe, transparent, and professional.</p>
            </div>
          </div>

          {/* Direct WhatsApp Support */}
          <div className="flex items-start space-x-4 pt-4 md:pt-0 md:pl-6">
            <svg className="w-6 h-6 text-[#3D7A5E] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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