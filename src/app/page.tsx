import { supabase } from './utils/supabase'; 
import LivestockCard from './components/LivestockCard';

export const revalidate = 0;

async function getLatestListings() {
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
  const listings = await getLatestListings();

  const categories = [
    { name: 'Cattle', count: 12, icon: '🐂' },
    { name: 'Sheep', count: 7, icon: '🐑' },
    { name: 'Goats', count: 2, icon: '🐐' },
    { name: 'Pigs', count: 3, icon: '🐖' },
    { name: 'Poultry', count: 100, icon: 'C' },
  ];

  return (
    <div className="w-full bg-[#FBFBFA]">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[500px] md:min-h-[550px] flex items-center overflow-hidden bg-[#FBFBFA]">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=773&auto=format&fit=crop" 
            alt="Lesotho Highland Sheep Portrait"
            className="w-full h-full object-cover object-center md:object-[right_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFA] via-[#FBFBFA]/70 to-transparent md:bg-gradient-to-r md:from-[#FBFBFA] md:via-[#FBFBFA]/60 md:to-transparent md:w-[65%]" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-6 pt-12 pb-4 md:pt-20 md:pb-4 z-10 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-start space-y-5 max-w-xl mt-auto md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#20352E] tracking-tight leading-[1.1]">
              Lesotho’s Trusted <br />
              <span className="text-[#3D7A5E]">Livestock Marketplace</span>
            </h1>

            <p className="text-sm md:text-base font-medium text-[#20352E]/90 leading-relaxed max-w-md">
              Buy and sell livestock through verified listings, supervised viewings, and direct WhatsApp support.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="bg-[#3D7A5E] hover:bg-[#285F44] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xs text-center active:scale-[0.98]">
                Browse Livestock
              </button>
              <button className="bg-white hover:bg-zinc-50 border border-[#20352E] text-[#20352E] font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xs text-center active:scale-[0.98]">
                Sell Your Livestock
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. WHY BUYERS AND SELLERS TRUST SAKENG ================= */}
      {/* Reduced vertical padding to seamlessly connect right up to the Hero block */}
      <section className="bg-white border-y border-[#E5E7EB] py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black text-[#20352E] tracking-tight">
              Why Buyers and Sellers Trust Sakeng
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trusted Marketplace */}
            <div className="flex flex-col space-y-1">
              <h4 className="text-sm font-bold text-[#20352E]">Trusted Marketplace</h4>
              <p className="text-xs font-medium text-[#6D8077] leading-relaxed">
                A simple and transparent way to buy and sell livestock.
              </p>
            </div>

            {/* Verified Livestock */}
            <div className="flex flex-col space-y-1">
              <h4 className="text-sm font-bold text-[#20352E]">Verified Livestock</h4>
              <p className="text-xs font-medium text-[#6D8077] leading-relaxed">
                Selected livestock is checked before being listed.
              </p>
            </div>

            {/* Supervised Viewings */}
            <div className="flex flex-col space-y-1">
              <h4 className="text-sm font-bold text-[#20352E]">Supervised Viewings</h4>
              <p className="text-xs font-medium text-[#6D8077] leading-relaxed">
                We help arrange and supervise viewings for added peace of mind.
              </p>
            </div>

            {/* WhatsApp Support */}
            <div className="flex flex-col space-y-1">
              <h4 className="text-sm font-bold text-[#20352E]">WhatsApp Support</h4>
              <p className="text-xs font-medium text-[#6D8077] leading-relaxed">
                Our team is available to answer your questions and guide you through the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. LATEST LIVESTOCK ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-black text-[#20352E] tracking-tight">
            Latest Livestock
          </h2>
          <p className="text-xs font-medium text-[#6D8077] mt-1">
            Browse some of the latest verified livestock currently available across Lesotho.
          </p>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-12 text-center">
            <p className="text-sm font-medium text-[#6D8077]">No live listings available right now. Check back soon!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {listings.map((listing: any) => (
                <LivestockCard key={listing.id} listing={listing} />
              ))}
            </div>
            
            {/* CTA cleanly positioned down underneath the card layout */}
            <div className="mt-8 flex justify-center">
              <button className="text-xs font-bold text-[#3D7A5E] hover:text-[#285F44] border border-[#3D7A5E]/20 hover:border-[#285F44] bg-white px-5 py-2.5 rounded-xl flex items-center space-x-1.5 transition-all shadow-2xs active:scale-[0.98]">
                <span>View All Livestock</span>
                <span>→</span>
              </button>
            </div>
          </>
        )}
      </section>

      {/* ================= 4. BROWSE BY CATEGORY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-8 border-t border-[#E5E7EB]">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-black text-[#20352E] tracking-tight">
            Browse by Category
          </h2>
          <p className="text-xs font-medium text-[#6D8077] mt-1">
            Choose a category to explore available livestock across Lesotho.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.name} 
              className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-start cursor-pointer hover:shadow-xs hover:border-[#3D7A5E] transition-all group"
            >
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</span>
              <h4 className="text-sm font-bold text-[#20352E]">{cat.name}</h4>
              <p className="text-[11px] font-semibold text-[#3D7A5E] mt-0.5 bg-[#F4F6F5] px-2 py-0.5 rounded-md">
                {cat.count} listings
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 5. HOW SAKENG WORKS? ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 border-t border-[#E5E7EB]">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-black text-[#20352E] tracking-tight">
            How Sakeng works?
          </h2>
          <p className="text-xs font-medium text-[#6D8077] mt-1">
            Buying or selling livestock is simple with Sakeng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1: Browse */}
          <div className="flex flex-col items-center text-center p-4 bg-white border border-[#E5E7EB] rounded-2xl">
            <h4 className="text-sm font-bold text-[#3D7A5E] uppercase tracking-wide">Browse</h4>
            <p className="text-xs font-medium text-[#6D8077] mt-2 max-w-xs leading-relaxed">
              View available livestock across Lesotho.
            </p>
          </div>

          {/* Step 2: Contact Us */}
          <div className="flex flex-col items-center text-center p-4 bg-white border border-[#E5E7EB] rounded-2xl">
            <h4 className="text-sm font-bold text-[#3D7A5E] uppercase tracking-wide">Contact Us</h4>
            <p className="text-xs font-medium text-[#6D8077] mt-2 max-w-xs leading-relaxed">
              Message us on WhatsApp. We’ll answer your questions and connect you with the seller.
            </p>
          </div>

          {/* Step 3: Meet & Buy */}
          <div className="flex flex-col items-start text-left p-5 bg-white border border-[#E5E7EB] rounded-2xl">
            <h4 className="text-sm font-bold text-[#3D7A5E] uppercase tracking-wide self-center md:self-start">Meet & Buy</h4>
            <p className="text-xs font-medium text-[#6D8077] mt-2 leading-relaxed">
              For eligible livestock, Sakeng helps make the buying process more secure.
            </p>
            
            <p className="text-[10px] font-bold text-[#6D8077] mt-3 italic">
              Applies to selected livestock only. Eligible listings are marked with the Sakeng Verified badge.
            </p>

            <ul className="mt-4 space-y-2 text-xs font-medium text-[#20352E]/90 list-disc pl-4">
              <li>Book a supervised viewing with the Sakeng team.</li>
              <li>Pay a refundable 5% commitment fee to reserve your viewing.</li>
              <li>Buy with confidence - If you purchase the livestock, your commitment fee is deducted from the purchase price.</li>
              <li>Protected if things don’t match - If the animal does not match its listing, your commitment fee is fully refunded.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= 6. OUR MISSION ================= */}
      <section className="bg-[#F4F6F5] border-t border-[#E5E7EB] py-12 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-lg font-black text-[#20352E] tracking-tight uppercase">Our Mission</h2>
          <p className="text-sm font-medium text-[#20352E] leading-relaxed">
            We’re building a safer and more transparent way to buy and sell livestock in Lesotho through verified listings, supervised viewings, and direct support.
          </p>
        </div>
      </section>

    </div>
  );
}