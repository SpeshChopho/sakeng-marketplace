import Link from 'next/link';

interface Listing {
  id: string;
  title: string;
  price: any; // Changed to any to safely capture numeric strings from database payloads
  location: string;
  created_at: string;
  image_url?: string;
}

export default function LivestockCard({ listing }: { listing: Listing }) {
  // Safe extraction engine: Strips commas/strings and guarantees a valid float calculation
  const cleanPrice = typeof listing.price === 'string' 
    ? parseFloat(listing.price.replace(/[^0-9.-]/g, '')) 
    : Number(listing.price);
    
  const displayPrice = isNaN(cleanPrice) ? 0 : cleanPrice;

  return (
    <Link 
      href={`/browse/${listing.id}`} 
      className="w-full bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#3D7A5E]/40 transition-all flex flex-col h-full group cursor-pointer"
      suppressHydrationWarning
    >
      {/* Thumbnail Image Container */}
      <div className="relative w-full aspect-4/3 bg-zinc-100 overflow-hidden shrink-0">
        <img
          src={listing.image_url || "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=600&auto=format&fit=crop"}
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Details Wrapper */}
      <div className="p-4 flex flex-col flex-1 text-left bg-white justify-between">
        <div>
          {/* 1. Title & Badge Row */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-base font-bold text-[#20352E] tracking-tight line-clamp-1">
              {listing.title}
            </h3>
            <span className="bg-[#3D7A5E]/10 text-[#3D7A5E] text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shrink-0">
              Verified
            </span>
          </div>

          {/* 2. Price Row - Cleaned formatting output to squash MNaN bugs */}
          <div className="text-base font-black text-[#20352E]" suppressHydrationWarning>
            M{displayPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        {/* 3. Location & Date Footer Row */}
        <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[#6D8077]">
          
          {/* Location Indicator */}
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-[#3D7A5E] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium text-[#20352E]/90">
              {listing.location}
            </span>
          </div>

          {/* Timeline Badge - Protected against localized server/client mismatch */}
          <span className="text-[11px] font-medium text-[#6D8077]/70" suppressHydrationWarning>
            {listing.created_at 
              ? new Date(listing.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
              : 'Recent'
            }
          </span>
        </div>

      </div>
    </Link>
  );
}