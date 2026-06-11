import React, { useState } from 'react';
import { Search, ArrowUpRight } from 'lucide-react';

const ProductsAndTechnology = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Product data array with empty image paths ready for your assets
  const productsData = [
    {
      id: 1,
      title: "Milk Enhancer in Animals",
      description: "We offer a complete line of herbal products, which are designed to support and boost general vitality, metabolic balance, and overall milk yield in dairy livestock using traditional formulations.",
      image_src: "src/assets/Products/P1.jpg", // Drop your local path or URL here (e.g., "/assets/milk-enhancer.jpg")
     
    },
    {
      id: 2,
      title: "Growth Promoter",
      description: "Growth promoter is a natural/herbal fertilizer, especially designed for organic farming modules to boost crop yield, strengthen plant immunity, and enrich overall soil microbes safely.",
      image_src: "src/assets/Products/P2.jpg", // Drop your local path or URL here
      
    },
    {
      id: 3,
      title: "Aphids, White Fly & Heliothis",
      description: "All varieties of crops have to get rid of pests. This targeted botanical formulation helps farmers control persistent sucking pests efficiently without harmful chemical residues left behind.",
      image_src: "src/assets/Products/P3.jpg", // Drop your local path or URL here
      
    },
    {
      id: 4,
      title: "Termite",
      description: "Herbal formulation effective against termite infestations in soil and standing crops, creating a protective repellent barrier around roots while keeping earth ecosystems safe.",
      image_src: "src/assets/Products/P4.jpg", // Drop your local path or URL here
     
    }
  ];

  // Filter products based on search query match
  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Dynamic route redirection handler for individual item click
  const handleViewDetails = (id) => {
    // This will point to your dedicated product breakdown pages (e.g., /products-technology/1)
    window.location.href = `/products-technology/${id}`;
  };

  return (
    <div className="max-w-[90rem] mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-screen bg-gray-50/50">
      
      {/* Centralized Search Bar Layer */}
      <div className="max-w-md mx-auto mb-12 relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-5 pr-12 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white shadow-sm transition-all duration-200 text-sm font-medium"
        />
        <Search className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
      </div>

      {/* Full-width Cards Grid Container Layout */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-gray-200 rounded-3xl bg-white shadow-sm max-w-3xl mx-auto">
          <p className="text-gray-500 font-medium">No products match your current search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white border border-gray-100 rounded-3xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Top Section Content Header */}
                {/* <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100/30">
                    {product.badge}
                  </span>
                </div> */}

                {/* Direct Product Image Container Frame */}
                <div className="w-full h-48 rounded-2xl bg-gray-100 mb-5 overflow-hidden flex items-center justify-center border border-gray-100 relative">
                  {product.image_src ? (
                    <img 
                      src={product.image_src} 
                      alt={product.title} 
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-xs text-gray-400 font-medium italic">Image Asset Space</span>
                  )}
                </div>

                {/* Core Copy Information Details */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                    {product.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-4">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* View Details Action Link trigger redirection */}
              <div className="pt-4 border-t border-gray-50 flex items-center justify-end">
                <button 
                  onClick={() => handleViewDetails(product.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/btn cursor-pointer"
                >
                  View details 
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsAndTechnology;