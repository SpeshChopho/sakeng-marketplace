import LivestockCard from "./components/LivestockCard";

// Mock data configuration structure
const sampleListing = {
  id: "test-uuid-123",
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
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
  ],
  is_verified: true,
  status: "AVAILABLE"
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title block synchronized using your custom #20352E values */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-black text-[#20352E] tracking-tight">
          Premium Livestock Feed
        </h1>
        <p className="text-[#3F564C] text-sm mt-1.5 font-medium">
          Browse verified listings across the region. Seamless trading, optimized for accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center md:justify-items-start">
        <LivestockCard listing={sampleListing} />
      </div>
    </div>
  );
}