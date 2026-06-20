import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, Calendar, Tag, BookOpen } from 'lucide-react';
import { getGoogleDriveLink } from '../../utils/googleDrivePdfLinks';
import { MAGAZINES } from '../../data/magazinesData';

// All unique categories (from original site filter tabs)
const CATEGORIES = ['View All', 'Honeybee', 'Loksarvani', 'Suzbuz'];

// ─── Category badge colour map ───────────────────────────────────────────────
const CATEGORY_COLORS = {
  Honeybee:        'bg-amber-100 text-amber-800 border border-amber-200',
  Loksarvani:      'bg-emerald-100 text-emerald-800 border border-emerald-200',
  'Suzbuz': 'bg-orange-100 text-orange-800 border border-orange-200',
};

// ─── Framer-motion variants ──────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

// ─── MagazineCard ─────────────────────────────────────────────────────────────
const MagazineCard = ({ magazine }) => (
  <motion.article
    variants={cardVariant}
    layout
    className="group flex flex-col sm:flex-row gap-0 bg-white border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(16,185,129,0.10)] hover:border-emerald-100"
    aria-label={`Magazine article: ${magazine.title}`}
  >
    {/* Cover thumbnail */}
    <div className="relative flex-shrink-0 w-full sm:w-44 md:w-52 h-56 sm:h-auto overflow-hidden bg-gray-100">
      <img
        src={magazine.coverImage}
        alt={`Cover of ${magazine.title}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between p-7 md:p-8 flex-1 min-w-0">
      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[magazine.category] ?? 'bg-gray-100 text-gray-700'}`}>
          <Tag size={11} />
          {magazine.category}
        </span>
        <span className="flex items-center gap-1.5 text-gray-400 text-xs">
          <Calendar size={12} />
          <time dateTime={magazine.datetime}>{magazine.date}</time>
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug mb-4 group-hover:text-emerald-800 transition-colors duration-300">
        {magazine.title}
      </h2>

      {/* Excerpt */}
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-4 mb-6 flex-1">
        {magazine.excerpt}
      </p>

      {/* CTA */}
      <div className="mt-auto">
        <a
          href={getGoogleDriveLink(magazine.pdfLink) ?? magazine.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white text-sm font-bold rounded-full hover:bg-emerald-800 transition-all duration-300 shadow hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        >
          <Download size={15} />
          Download PDF
        </a>
      </div>
    </div>
  </motion.article>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const Magazines = () => {
  const [activeCategory, setActiveCategory] = useState('View All');
  const [searchQuery, setSearchQuery]       = useState('');

  const filtered = useMemo(() => {
    let list = MAGAZINES;
    if (activeCategory !== 'View All') {
      list = list.filter((m) => m.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.excerpt.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">

      {/* ── Hero Header ── */}
      <div className="relative bg-emerald-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80"
            alt="Magazines background"
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase border border-emerald-500/30 mb-6"
          >
            <BookOpen size={14} />
            Publications
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Magazines
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed"
          >
            Explore SRISTI's Honeybee, Loksarvani, and Suzbuz magazine publications — stories of grassroots
            innovators, traditional knowledge, and creative persistence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-4 w-20 h-1.5 bg-emerald-400 mx-auto rounded-full"
          />
        </div>
      </div>

      {/* ── Controls: Filter + Search ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
        >
          {/* Category tabs */}
          <div
            role="tablist"
            aria-label="Filter magazines by category"
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                id={`tab-mag-${cat.toLowerCase().replace(/\s/g, '-')}`}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                  activeCategory === cat
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-300 hover:text-emerald-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="search"
              id="magazine-search"
              placeholder="Search magazines…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search magazines"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition-all duration-200"
            />
          </div>
        </motion.div>

        {/* Result count */}
        <p className="mt-4 text-sm text-gray-400">
          {filtered.length === 0
            ? 'No magazines found.'
            : `Showing ${filtered.length} of ${MAGAZINES.length} magazine${MAGAZINES.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {/* ── Magazine Cards ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key="results"
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-7"
            >
              {filtered.map((mag) => (
                <MagazineCard key={mag.id} magazine={mag} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                <BookOpen size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No magazines found</h3>
              <p className="text-gray-400 text-sm">
                Try a different search term or category filter.
              </p>
              <button
                onClick={() => { setActiveCategory('View All'); setSearchQuery(''); }}
                className="mt-6 px-6 py-2.5 bg-emerald-700 text-white text-sm font-semibold rounded-full hover:bg-emerald-800 transition-colors"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Magazines;
