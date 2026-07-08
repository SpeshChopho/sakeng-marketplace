import { useMemo } from 'react';

interface Listing {
  id: string;
  title: string; // Stored schema reference
  price: any; 
  district: string;
  category: string;
  breed: string;
  age?: string;
  quantity?: number;
  weight?: string;
  purpose?: string;
  created_at: string;
  images?: string[];
  is_verified?: boolean;
}

export default function LivestockCard({ listing }: { listing: Listing }) {
  // Safe extraction engine: Strips commas/strings and guarantees a valid float calculation
  const cleanPrice = typeof listing.price === 'string' 
    ? parseFloat(listing.price.replace(/[^0-9.-]/g, '')) 
    : Number(listing.price);
    
  const displayPrice = isNaN(cleanPrice) ? 0 : cleanPrice;

  // Extract the first image from the array, fallback to default if empty
  const fallbackImage = "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=600&auto=format&fit=crop";
  const displayImage = listing.images && listing.images.length > 0 ? listing.images[0] : fallbackImage;

  // Render format for Maloti Currency
  const formattedPrice = displayPrice.toLocaleString('en-US', { 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0 
  });

  // Dynamic WhatsApp string construction (using purpose, title, or breed for type)
  const animalType = listing.purpose || listing.title || "Livestock";
  
  const whatsappUrl = useMemo(() => {
    const phoneNumber = "26658566600"; // Replace with your primary Sakeng business line
    const message = `Hi Sakeng, I am interested in this listing:\n\n• Type: ${animalType}\n• Breed: ${listing.breed}\n• Location: ${listing.district}\n• Price: M${formattedPrice}\n\nIs this animal still available?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, [animalType, listing.breed, listing.district, formattedPrice]);

  return (
    <div className="w-full bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#3D7A5E]/40 transition-all flex flex-col h-full group">
      
      {/* Thumbnail Image Container */}
      <div className="relative w-full aspect-4/3 bg-zinc-100 overflow-hidden shrink-0">
        <img
          src={displayImage}
          alt={animalType}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start pointer-events-none">
          {listing.is_verified !== false ? (
            <span className="bg-[#EAA123] text-zinc-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
              ✓ Sakeng Verified
            </span>
          ) : <div />}
          
          <span className="bg-[#285F44] text-white text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-md shadow-sm opacity-90">
            ● AVAILABLE
          </span>
        </div>
      </div>

      {/* Text Details Wrapper */}
      <div className="p-5 flex flex-col flex-1 text-left bg-white justify-between">
        <div>
          {/* Category Label and ID Meta-row */}
          <div className="flex items-center justify-between text-[11px] font-bold tracking-wide text-[#3D7A5E]/80 uppercase mb-1">
            <span>{listing.category}</span>
            <span className="text-zinc-400 font-medium normal-case">SKG-{listing.id.slice(0, 3).toUpperCase()}</span>
          </div>

          {/* Type Header Row (Dynamically replaces Title string) */}
          <h3 className="text-lg font-black text-[#20352E] tracking-tight line-clamp-1 mb-1">
            {animalType}
          </h3>

          {/* District Selector row */}
          <div className="flex items-center space-x-1 text-zinc-500 mb-4">
            <svg className="w-3.5 h-3.5 text-[#3D7A5E] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-semibold text-zinc-600">
              {listing.district}
            </span>
          </div>

          {/* Divider Line */}
          <hr className="border-[#E5E7EB] mb-4" />

          {/* Price Layout */}
          <div className="flex items-baseline space-x-1.5" suppressHydrationWarning>
            <span className="text-2xl font-black text-[#20352E]">M {formattedPrice}</span>
            {listing.quantity && listing.quantity > 1 && (
              <span className="text-xs font-medium text-zinc-400">({listing.quantity} available)</span>
            )}
          </div>
        </div>

        {/* Clean Attributes and WhatsApp Execution Row */}
        <div className="mt-4 flex flex-col space-y-4">
          
          {/* Attributes Flex Grid (Isolated Circular Brand Icons) */}
          <div className="grid grid-cols-2 gap-4 pt-1">
            
            {/* Breed Spec Row */}
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-[#3D7A5E]/10 flex items-center justify-center shrink-0">
                {/* Custom Helix Vector Line Icon */}
                <svg className="w-4 h-4 text-[#3D7A5E]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5C6 12 8 12.5 10 12M19.5 13.5C18 12 16 11.5 14 12M4.5 13.5C6 12 8 11.5 10 12M19.5 10.5C18 12 16 12.5 14 12M10 12a2 2 0 104 0 2 2 0 00-4 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-none">Breed</span>
                <span className="text-xs font-bold text-[#20352E] truncate mt-0.5">{listing.breed}</span>
              </div>
            </div>

            {/* Age Spec Row */}
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-[#3D7A5E]/10 flex items-center justify-center shrink-0">
                {/* Custom Calendar Vector Line Icon */}
                <svg className="w-4 h-4 text-[#3D7A5E]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-none">Age</span>
                <span className="text-xs font-bold text-[#20352E] truncate mt-0.5">{listing.age || 'N/A'}</span>
              </div>
            </div>

          </div>

          {/* Primary High-Converting WhatsApp Button */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#3D7A5E] hover:bg-[#285F44] text-white text-center font-bold text-sm py-3 rounded-xl transition-all active:scale-98 flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
          >
            {/* WhatsApp Logo SVG */}
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.419 1.452 5.374 0 9.748-4.322 9.751-9.63.001-2.572-1.002-4.99-2.825-6.81C17.169 2.344 14.755 1.34 12.18 1.34c-5.378 0-9.751 4.322-9.754 9.631-.001 1.968.514 3.89 1.493 5.607l-.997 3.644 3.725-.976z" />
            </svg>
            <span>Inquire via WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}