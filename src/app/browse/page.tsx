'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '../utils/supabase';
import LivestockCard from '../components/LivestockCard';

function BrowseListingsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // --- Core State Machine ---
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // --- Filter State Matrix (Added selectedBreed) ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  // Static Data Configurations
  const categories = ['All', 'Cattle', 'Sheep', 'Goats', 'Pigs', 'Poultry'];
  const districts = [
    'All', 'Maseru', 'Leribe', 'Berea', 'Mafeteng', 
    'Mohale\'s Hoek', 'Quthing', 'Qacha\'s Nek', 'Mokhotlong', 'Butha-Buthe', 'Thaba-Tseka'
  ];
  
  // Example common breeds across Lesotho for selection vector
  const breeds = [
    'All', 'Brahman', 'Angus', 'Nguni', 'Simmental', 'Merino', 'Dohne Merino', 'Dorper', 'Boer Goat', 'Angora'
  ];

  useEffect(() => {
    const catQuery = searchParams.get('category');
    if (catQuery) setSelectedCategory(catQuery);
  }, [searchParams]);

  // Database Synchronization Loop
  useEffect(() => {
    async function fetchFilteredListings() {
      setLoading(true);
      
      let query = supabase
        .from('listing')
        .select('*')
        .eq('status', 'AVAILABLE');

      if (selectedCategory !== 'All') {
        query = query.eq('category', selectedCategory);
      }

      if (selectedDistrict !== 'All') {
        query = query.ilike('location', `%${selectedDistrict}%`);
      }

      // Filter by breed selection vector
      if (selectedBreed !== 'All') {
        query = query.ilike('breed', `%${selectedBreed}%`);
      }

      // Universal text search (Matches against title, breed, location, or ID)
      if (searchQuery.trim() !== '') {
        const queryTerm = `%${searchQuery}%`;
        // Assuming your schema allows clean logical filtering, or fallback text scanning
        query = query.or(`title.ilike.${queryTerm},breed.ilike.${queryTerm},location.ilike.${queryTerm}`);
      }

      if (sortBy === 'newest') {
        query = query.order('created_at', { ascending: false });
      } else if (sortBy === 'price_asc') {
        query = query.order('price', { ascending: true });
      } else if (sortBy === 'price_desc') {
        query = query.order('price', { ascending: false });
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching data payload:', error);
      } else {
        setListings(data || []);
      }
      setLoading(false);
    }

    const delayDebounceFn = setTimeout(() => {
      fetchFilteredListings();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, selectedCategory, selectedDistrict, selectedBreed, sortBy]);

  const updateCategoryQuery = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const params = new URLSearchParams(searchParams.toString());
    if (categoryName !== 'All') {
      params.set('category', categoryName);
    } else {
      params.delete('category');
    }
    router.push(`/browse?${params.toString()}`, { scroll: false });
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDistrict('All');
    setSelectedBreed('All');
    updateCategoryQuery('All');
    setSortBy('newest');
  };

  return (
    <div className="w-full bg-[#FBFBFA] min-h-screen text-[#20352E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        
        {/* ================= HEADER & NEW SEARCH ROW ARCHITECTURE ================= */}
        <div className="flex flex-col gap-6 pb-6 border-b border-[#E5E7EB] mb-8">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-black tracking-tight">Browse Livestock</h1>
              {/* UPDATED CONTENT CRITERIA */}
              <p className="text-sm font-medium text-[#6D8077] mt-1">Find cattle, sheep, goats, and more.</p>
            </div>

            {/* MOBILE FILTER TRIGGER */}
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden bg-white border border-[#E5E7EB] text-sm font-bold px-4 py-2.5 rounded-xl flex items-center space-x-1.5 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4 text-[#3D7A5E]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span>Filters</span>
            </button>
          </div>
          
          {/* CRITERIA: Dedicated Search Bar Row */}
          <div className="w-full">
            <div className="relative w-full">
              <input
                type="text"
                /* CRITERIA: Expanded breathing room informational placeholder copy */
                placeholder="Search by breed, location, or listing id..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E5E7EB] px-4 py-3.5 pl-12 rounded-xl text-sm font-medium focus:outline-none focus:border-[#3D7A5E] placeholder:text-zinc-400/90 shadow-2xs"
              />
              <svg className="w-5 h-5 absolute left-4 top-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* ================= SPLIT CONTENT GRID LAYOUT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* 1. DESKTOP STICKY SIDEBAR FILTER LAYER */}
          {/* CRITERIA: Enhanced sticky bounding box values (top-6 structural snap) */}
          <aside className="hidden md:block bg-white border border-[#E5E7EB] rounded-2xl p-6 sticky top-6 space-y-6 text-left shadow-2xs max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              {/* CRITERIA: Removed 'Engine' keyword */}
              <h3 className="text-sm font-black uppercase tracking-wider text-[#20352E]">Filter</h3>
              <button onClick={resetFilters} className="text-xs font-bold text-[#3D7A5E] hover:underline">Reset All</button>
            </div>

            {/* CRITERIA: Headings styled as green #20352E */}
            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-black text-[#20352E] uppercase tracking-wide">Filter by Category</label>
              <div className="flex flex-col space-y-0.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => updateCategoryQuery(cat)}
                    className={`text-sm text-left px-3 py-1.5 rounded-xl transition-all font-medium ${selectedCategory === cat ? 'bg-[#3D7A5E]/10 text-[#3D7A5E] font-bold' : 'hover:bg-zinc-50 text-[#20352E]/80'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* CRITERIA: Headings styled as green #20352E */}
            {/* District/Location Filter */}
            <div className="space-y-2">
              <label className="text-xs font-black text-[#20352E] uppercase tracking-wide">Filter by District</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full bg-white border border-[#E5E7EB] p-2.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#3D7A5E]"
              >
                {districts.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            {/* CRITERIA: Filter by Breed Element Added */}
            <div className="space-y-2">
              <label className="text-xs font-black text-[#20352E] uppercase tracking-wide">Filter by Breed</label>
              <select
                value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value)}
                className="w-full bg-white border border-[#E5E7EB] p-2.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#3D7A5E]"
              >
                {breeds.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            {/* Sort Layer */}
            <div className="space-y-2 border-t border-[#E5E7EB] pt-4">
              <label className="text-xs font-black text-[#20352E] uppercase tracking-wide">Sort Results</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border border-[#E5E7EB] p-2.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#3D7A5E]"
              >
                <option value="newest">Newest Listed</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>
          </aside>

          {/* 2. RESPONSIVE LISTINGS GRID */}
          <main className="md:col-span-3 w-full">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 space-y-3">
                <div className="w-8 h-8 border-4 border-[#3D7A5E] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm font-medium text-[#6D8077]">Synchronizing database query...</p>
              </div>
            ) : listings.length === 0 ? (
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-12 text-center max-w-md mx-auto mt-6">
                <span className="text-4xl">🔍</span>
                <h3 className="text-base font-black text-[#20352E] mt-3">No matching livestock found</h3>
                <p className="text-sm font-medium text-[#6D8077] mt-1">Try relaxing your district filtering choices or adjusting your text search terms.</p>
                <button onClick={resetFilters} className="mt-4 bg-[#3D7A5E] text-white text-xs font-bold px-4 py-2 rounded-xl">Clear All Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((listing) => (
                  <LivestockCard key={listing.id} listing={listing} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ================= 3. MOBILE FILTER BOTTOM SHEET DRAW ================= */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setIsMobileFilterOpen(false)} />
          
          <div className="relative bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto p-6 flex flex-col text-left space-y-6 shadow-xl">
            <div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto -mt-2 mb-2" />
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-[#20352E] tracking-tight">Filter</h3>
              <button onClick={resetFilters} className="text-xs font-bold text-[#3D7A5E]">Reset All</button>
            </div>

            {/* Mobile Category */}
            <div className="space-y-2">
              <label className="text-xs font-black text-[#20352E] uppercase tracking-wide">Filter by Category</label>
              <div className="grid grid-cols-3 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => updateCategoryQuery(cat)}
                    className={`text-xs text-center py-2.5 rounded-xl border font-medium transition-all ${selectedCategory === cat ? 'bg-[#3D7A5E] border-[#3D7A5E] text-white font-bold' : 'bg-zinc-50 border-[#E5E7EB] text-[#20352E]/90'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile District */}
            <div className="space-y-2">
              <label className="text-xs font-black text-[#20352E] uppercase tracking-wide">Filter by District</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full bg-zinc-50 border border-[#E5E7EB] p-3 rounded-xl text-sm font-medium focus:outline-none"
              >
                {districts.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            {/* Mobile Breed */}
            <div className="space-y-2">
              <label className="text-xs font-black text-[#20352E] uppercase tracking-wide">Filter by Breed</label>
              <select
                value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value)}
                className="w-full bg-zinc-50 border border-[#E5E7EB] p-3 rounded-xl text-sm font-medium focus:outline-none"
              >
                {breeds.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            {/* Mobile Sort */}
            <div className="space-y-2">
              <label className="text-xs font-black text-[#20352E] uppercase tracking-wide">Sort Results</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-zinc-50 border border-[#E5E7EB] p-3 rounded-xl text-sm font-medium focus:outline-none"
              >
                <option value="newest">Newest Listed</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-[#20352E] text-white font-bold text-sm py-3.5 rounded-xl text-center active:scale-[0.98] transition-all"
            >
              Apply Filter Adjustments ({listings.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BrowseListingsPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen bg-[#FBFBFA] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#3D7A5E] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BrowseListingsContent />
    </Suspense>
  );
}