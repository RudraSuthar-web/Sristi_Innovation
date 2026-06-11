import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Leaf, Info } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Centralized dynamic catalog mapping all 4 products directly to your asset paths
  const productsCatalog = {
    "1": {
      title: "Milk Enhancer in Animals",
      brand: "Galactogogue",
      category: "Veterinary",
      formulation: "Powder",
      whatFor: "Milk enhancer in animals",
      packSize: "280 gm",
      application: "20 gm twice a day with feed for 7 days",
      longDescription: "We offer a complete line of herbal products, which are particularly milk enhancer compositions. These milk enhancer compositions do not affect the balanced nutrition of the milk. They are 100% natural, organic and purely herbal enhancers. They simply enhance the ruminant digestibility to a better extent, which promote the production of milk generating hormones naturally. This ensures no side effect to the animals. Moreover, it is cheaper than traditional, expensive and harmful chemicals.",
      image_src: "/src/assets/Products/P1.jpg", 
      pricing: [{ qty: "280 GM", rate: "100", dollar: "1.0449" }]
    },
    "2": {
      title: "Growth Promoter",
      brand: "SRISTI Suraksha",
      category: "Agro product",
      formulation: "Decoction",
      whatFor: "Growth Promotion",
      packSize: "100 ml, 500 ml",
      application: "Mix at the rate of 2 ml per liter water in a spray pump. Stir it thoroughly and spray on the foliage.",
      longDescription: "Growth promoter is a natural/herbal fertilizer, especially designed for the overall growth of the plants. These growth promoters are intended to accelerate the rate of growth and maturation of crops or plants, without disturbing their natural physiological actions. These premium quality plant growth promoters increase the yield as well as control the pests & pathogens. A highly effective and safe biological tonics, these growth promoters boost an all round development of the crops by regulating their metabolic activities from root to the leaves.",
      image_src: "/src/assets/Products/P2.jpg",
      pricing: [
        { qty: "100 ml", rate: "50", dollar: "0.5225" }, 
        { qty: "500 ml", rate: "250", dollar: "2.6123" }
      ]
    },
    "3": {
      title: "Aphids, White Fly & Heliothis",
      brand: "SRISTI Shastra",
      category: "Agro product",
      formulation: "Decoction",
      whatFor: "Growth Promotion, effective against aphids, white fly heliothis",
      packSize: "100 ml, 500 ml",
      application: "Mix at the rate of 2 ml per liter water in a spray pump. Stir it thoroughly and spray on the affected portion of the plant leaf, stem fruit.",
      longDescription: "All varieties of crops have to get rid of pest problem, it is a massive and costly affair. However, we have developed a wide range of 100% natural and organic compositions to control the pest problem in farming fields. These herbal pest controllers effectively remove the aphids, white fly, heliothis and several other insects – harmful for the crops. These insect control compositions are offered in different packaging specifications.",
      image_src: "/src/assets/Products/P3.jpg",
      pricing: [
        { qty: "100 ml", rate: "50", dollar: "0.5225" }, 
        { qty: "500 ml", rate: "250", dollar: "2.6123" }
      ]
    },
    "4": {
      title: "Termite",
      brand: "SRISTI Suraksha",
      category: "Agro product",
      formulation: "Decoction",
      whatFor: "Growth Promotion, effective against termite",
      packSize: "100 ml, 500 ml",
      application: "Mix at the rate of 2 ml per liter water in a spray pump. Stir it thoroughly and spray on the affected portion of the plant near the root. Alternatively, mix the formulation with irrigation water.",
      longDescription: "Termite presence causes a great loss. Looking into the need of the wood protection covering both pre- and post-construction, we have developed a large number of 100% natural, organic and herbal compositions that can be applied in industrial, commercial as well as domestic applications. These herbal compositions are very easy to apply to control termite.",
      image_src: "/src/assets/Products/P4.jpg",
      pricing: [
        { qty: "100 ml", rate: "50", dollar: "0.5225" }, 
        { qty: "500 ml", rate: "250", dollar: "2.6123" }
      ]
    }
  };

  const product = productsCatalog[id];

  // Fallback state handler for unregistered parameters or invalid IDs
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 border border-gray-100 rounded-3xl shadow-sm">
          <p className="text-gray-500 font-semibold mb-4">Product listing details not found.</p>
          <button 
            onClick={() => navigate('/products-technology')} 
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2 rounded-xl transition"
          >
            Return to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link Triggers Navigation Route */}
        <button 
          onClick={() => navigate('/products-technology')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-emerald-700 mb-8 transition-colors border-none bg-transparent cursor-pointer group"
        >
          <ArrowLeft size={18} className="transition-transform duration-200 group-hover:-translate-x-0.5" /> 
          Back to Products
        </button>

        {/* Dynamic Card Container Presentation Layer */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left Column: Fixed-size Image frame handler */}
          <div className="md:col-span-5 flex items-start">
            <div className="w-full h-80 sm:h-96 rounded-2xl bg-gray-50 border border-gray-100 p-6 flex items-center justify-center overflow-hidden relative group">
              {product.image_src ? (
                <img 
                  src={product.image_src} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="text-center space-y-2">
                  <Leaf className="mx-auto text-gray-300 h-10 w-10" />
                  <span className="block text-xs text-gray-400 font-medium italic">Image Placeholder</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Information, Tables & Metadata Content */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              {/* Category Pill Tag dynamically loaded */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 mb-3 border border-emerald-100/30">
                <ShieldCheck size={12} /> {product.category}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                {product.title}
              </h1>

              {/* Dynamic Tier Pricing Matrix Rendering */}
              <div className="overflow-hidden border border-gray-100 rounded-2xl mb-6 shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-gray-50 font-bold text-gray-700 border-b border-gray-100">
                    <tr>
                      <th className="px-4 py-3">Packing Qty.</th>
                      <th className="px-4 py-3">Rate Rs.</th>
                      <th className="px-4 py-3">Dollar</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 font-medium divide-y divide-gray-50">
                    {product.pricing.map((p, i) => (
                      <tr key={i}>
                        <td className="px-4 py-3">{p.qty}</td>
                        <td className="px-4 py-3">₹{p.rate}</td>
                        <td className="px-4 py-3">${p.dollar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Description Context Block */}
              <p className="text-gray-600 text-sm leading-relaxed font-normal">
                {product.longDescription}
              </p>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 flex items-center gap-1.5 tracking-wider">
                <Info size={14} className="text-emerald-600" /> Technical Specifications
              </h3>
              
              <div className="divide-y divide-gray-50 border-b border-gray-50 text-sm">
                {[
                  { label: 'Our Brand', val: product.brand },
                  { label: 'Category', val: product.category },
                  { label: 'Formulation', val: product.formulation },
                  { label: 'What for', val: product.whatFor },
                  { label: 'Pack size', val: product.packSize },
                  { label: 'Application', val: product.application }
                ].map((spec, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 py-3">
                    <span className="text-gray-400 font-medium col-span-1">{spec.label}</span>
                    <span className="text-gray-800 font-semibold col-span-3 leading-relaxed">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;