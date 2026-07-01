'use client';

import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import { ChevronLeft, ChevronRight, MessageSquare, MapPin, Tag } from 'lucide-react';

interface Listing {
  id: number;
  category: string;
  breed: string;
  price: number;
  district: string;
  image_urls: string[];
  status: string;
}

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    async function fetchListings() {
      const { data, error } = await supabase
        .from('listing')
        .select('*')
        .order('id', { ascending: false });

      if (!error && data) {
        setListings(data);
        // Initialize carousel index 0 for all loaded items
        const initialIndexes = data.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {});
        setCarouselIndexes(initialIndexes);
      }
      setLoading(false);
    }
    fetchListings();
  }, []);

  const nextImage = (id: number, maxImages: number) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % maxImages,
    }));
  };

  const prevImage = (id: number, maxImages: number) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + maxImages) % maxImages,
    }));
  };

  const handleWhatsAppInquiry = (listing: Listing) => {
    const message = `Hello, I am interested in the ${listing.breed} (${listing.category}) located in ${listing.district} priced at M${listing.price}. Is it still available?`;
    const whatsappUrl = `https://wa.me/26658566600?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-lg font-medium text-gray-600 animate-pulse">Loading Livestock Marketplace...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Sakeng Marketplace
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Verified local livestock listings with instant direct inquiries.
          </p>
        </header>

        {listings.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border">
            <p className="text-gray-500">No active livestock listings found at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {listings.map((item) => {
              const currentIndex = carouselIndexes[item.id] || 0;
              const hasImages = item.image_urls && item.image_urls.length > 0;

              return (
                <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    {/* Responsive Sliding Image Carousel */}
                    <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
                      {hasImages ? (
                        <>
                          <img
                            src={item.image_urls[currentIndex]}
                            alt={`${item.breed} carousel visual`}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          />
                          {item.image_urls.length > 1 && (
                            <>
                              <button
                                onClick={() => prevImage(item.id, item.image_urls.length)}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xs p-1.5 rounded-full shadow-xs hover:bg-white text-gray-800 transition"
                              >
                                <ChevronLeft className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => nextImage(item.id, item.image_urls.length)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xs p-1.5 rounded-full shadow-xs hover:bg-white text-gray-800 transition"
                              >
                                <ChevronRight className="w-5 h-5" />
                              </button>
                              {/* Dots Tracker */}
                              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 bg-black/30 px-2 py-1 rounded-full backdrop-blur-xs">
                                {item.image_urls.map((_, idx) => (
                                  <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <div className="flex h-full items-center justify-center text-gray-400 text-sm">
                          No Images Uploaded
                        </div>
                      )}
                    </div>

                    {/* Meta Details content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100">
                          {item.category}
                        </span>
                        <span className="text-sm font-medium text-gray-500 flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-gray-400" /> {item.district}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.breed}</h3>
                      <p className="text-2xl font-black text-emerald-600 flex items-center">
                        M{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Action Trigger Button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handleWhatsAppInquiry(item)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow-xs flex items-center justify-center space-x-2 transition-colors active:scale-[0.99]"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Inquire via WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}