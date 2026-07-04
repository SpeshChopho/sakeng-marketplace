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
    { name: 'Poultry', count: 100, icon: '🐓' },
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

      {/* ================= 2. WHY CHOOSE SAKENG ================= */}
      <section className="bg-white border-y border-[#E5E7EB] py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black text-[#20352E] tracking-tight">
              Why Choose Sakeng
            </h2>
            <div className="h-1 w-12 bg-[#20352E] mt-1.5 rounded-full hidden md:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Trusted Marketplace */}
            <div className="flex items-start space-x-3.5">
              <div className="p-2 bg-[#F4F6F5] rounded-xl text-[#20352E] shrink-0">
                <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-16.5 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 18 6v15M2.25 21h19.5M8.25 7.5h.008v.008H8.25V7.5Zm.008 3h-.008v.008h.008v-.008Zm0 3h-.008v.008h.008v-.008Zm3-6h-.008v.008h.008V7.5Zm.008 3h-.008v.008h.008v-.008Zm0 3h-.008v.008h.008v-.008Z" />
                </svg>
              </div>
              <div className="flex flex-col space-y-0.5">
                <h4 className="text-sm font-bold text-[#20352E]">Trusted Marketplace</h4>
                <p className="text-xs font-medium text-[#6D8077] leading-relaxed">
                  A simple and transparent way to buy and sell livestock.
                </p>
              </div>
            </div>

            {/* Verified Livestock */}
            <div className="flex items-start space-x-3.5">
              <div className="p-2 bg-[#F4F6F5] rounded-xl text-[#20352E] shrink-0">
                <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <div className="flex flex-col space-y-0.5">
                <h4 className="text-sm font-bold text-[#20352E]">Verified Livestock</h4>
                <p className="text-xs font-medium text-[#6D8077] leading-relaxed">
                  Selected livestock is checked before being listed.
                </p>
              </div>
            </div>

            {/* Supervised Viewings */}
            <div className="flex items-start space-x-3.5">
              <div className="p-2 bg-[#F4F6F5] rounded-xl text-[#20352E] shrink-0">
                <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.75 18v-.75c0-1.242 1.008-2.25 2.25-2.25h3.75a2.25 2.25 0 0 1 2.25 2.25V18H3.75Z" />
                </svg>
              </div>
              <div className="flex flex-col space-y-0.5">
                <h4 className="text-sm font-bold text-[#20352E]">Supervised Viewings</h4>
                <p className="text-xs font-medium text-[#6D8077] leading-relaxed">
                  We help arrange and supervise viewings for added peace of mind.
                </p>
              </div>
            </div>

            {/* WhatsApp Support */}
            <div className="flex items-start space-x-3.5">
              <div className="p-2 bg-[#F4F6F5] rounded-xl text-[#20352E] shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex flex-col space-y-0.5">
                <h4 className="text-sm font-bold text-[#20352E]">WhatsApp Support</h4>
                <p className="text-xs font-medium text-[#6D8077] leading-relaxed">
                  Our team is available to answer your questions and guide you through the process.
                </p>
              </div>
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
          
          <div className="flex flex-col items-center text-center p-4 bg-white border border-[#E5E7EB] rounded-2xl">
            <h4 className="text-sm font-bold text-[#3D7A5E] uppercase tracking-wide">Browse</h4>
            <p className="text-xs font-medium text-[#6D8077] mt-2 max-w-xs leading-relaxed">
              View available livestock across Lesotho.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 bg-white border border-[#E5E7EB] rounded-2xl">
            <h4 className="text-sm font-bold text-[#3D7A5E] uppercase tracking-wide">Contact Us</h4>
            <p className="text-xs font-medium text-[#6D8077] mt-2 max-w-xs leading-relaxed">
              Message us on WhatsApp. We’ll answer your questions and connect you with the seller.
            </p>
          </div>

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