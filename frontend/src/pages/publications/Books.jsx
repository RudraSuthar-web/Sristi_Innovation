import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, BookMarked, Library, Tag } from 'lucide-react';
import { getGoogleDriveLink } from '../../utils/googleDrivePdfLinks';

// ─── Content extracted verbatim from https://sristiinnovations.com/books/ ────
const BOOKS = [
  {
    id: 1,
    title: 'Ek bel ko bhi hai jine ka adhikar',
    language: 'Hindi',
    coverImage:
      'https://sristiinnovations.com/wp-content/uploads/2020/04/Ek-bel-ko-bhi-hai-Jine-ka-Adhikar-Hindi-1.bmp',
    // PDF on Google Drive (mapped via local path key)
    pdfLink:
      '/sristi_pdf/all_pdf/Publication/Hindi/Ek bel ko bhi hai Jine ka Adhikar (HINID).pdf',
    available: true,
  },
  {
    id: 2,
    title: 'Jaivik pak Sangrakshan',
    // No language category on original site
    language: null,
    coverImage:
      'https://sristiinnovations.com/wp-content/uploads/2020/04/71L9pM6JTL._AC_UY218_-1.jpg',
    // Original site has href="#" — link not yet available
    pdfLink: null,
    available: false,
  },
  {
    id: 3,
    title: 'Teachers as Transformer',
    // No language category on original site
    language: null,
    coverImage:
      'https://sristiinnovations.com/wp-content/uploads/2020/04/71NaUWLJn3L._AC_UY218_-1.jpg',
    // Original site has href="#" — link not yet available
    pdfLink: null,
    available: false,
  },
];

// All filter categories (from original site filter tabs)
const CATEGORIES = ['View All', 'English', 'Gujarati', 'Hindi'];

// ─── Language badge colour map ───────────────────────────────────────────────
const LANGUAGE_COLORS = {
  Hindi:    'bg-orange-100 text-orange-800 border border-orange-200',
  Gujarati: 'bg-blue-100 text-blue-800 border border-blue-200',
  English:  'bg-purple-100 text-purple-800 border border-purple-200',
};

// ─── Framer-motion variants ──────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

// ─── BookCard ─────────────────────────────────────────────────────────────────
const BookCard = ({ book }) => (
  <motion.article
    variants={cardVariant}
    layout
    className="group flex flex-col bg-white border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(16,185,129,0.10)] hover:border-emerald-100"
    aria-label={`Book: ${book.title}`}
  >
    {/* Cover image */}
    <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: '3/4' }}>
      <img
        src={book.coverImage}
        alt={`Cover of ${book.title}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Language badge overlay on image */}
      {book.language && (
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm ${
              LANGUAGE_COLORS[book.language] ?? 'bg-gray-100 text-gray-700'
            }`}
          >
            <Tag size={10} />
            {book.language}
          </span>
        </div>
      )}

      {/* "Coming Soon" ribbon for unavailable books */}
      {!book.available && (
        <div className="absolute top-3 right-3">
          <span className="bg-gray-800/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
            Coming Soon
          </span>
        </div>
      )}
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5">
      <h2 className="text-base font-bold text-gray-900 leading-snug mb-4 line-clamp-3 group-hover:text-emerald-800 transition-colors duration-300 flex-1">
        {book.title}
      </h2>

      {/* CTA button */}
      {book.available && book.pdfLink ? (
        <a
          href={getGoogleDriveLink(book.pdfLink) ?? book.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-emerald-700 text-white text-sm font-bold rounded-xl hover:bg-emerald-800 transition-all duration-300 shadow hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
          aria-label={`Download ${book.title}`}
        >
          <Download size={14} />
          Download
        </a>
      ) : (
        <button
          disabled
          aria-disabled="true"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-gray-100 text-gray-400 text-sm font-semibold rounded-xl cursor-not-allowed border border-gray-200"
        >
          <Download size={14} />
          Coming Soon
        </button>
      )}
    </div>
  </motion.article>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const Books = () => {
  const [activeCategory, setActiveCategory] = useState('View All');
  const [searchQuery, setSearchQuery]       = useState('');

  const filtered = useMemo(() => {
    let list = BOOKS;
    if (activeCategory !== 'View All') {
      list = list.filter((b) => b.language === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          (b.language && b.language.toLowerCase().includes(q)),
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
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80"
            alt="Books background"
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
            <Library size={14} />
            Publications
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Books
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed"
          >
            Browse books published by SRISTI Innovations — spanning Hindi, Gujarati, and English — on
            grassroots innovation, sustainable agriculture, and transformative education.
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
            aria-label="Filter books by language"
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                id={`tab-book-${cat.toLowerCase().replace(/\s/g, '-')}`}
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
              id="book-search"
              placeholder="Search books…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search books"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition-all duration-200"
            />
          </div>
        </motion.div>

        {/* Result count */}
        <p className="mt-4 text-sm text-gray-400">
          {filtered.length === 0
            ? 'No books found.'
            : `Showing ${filtered.length} of ${BOOKS.length} book${BOOKS.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {/* ── Book Cards Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key="results"
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6"
            >
              {filtered.map((book) => (
                <BookCard key={book.id} book={book} />
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
                <BookMarked size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No books found</h3>
              <p className="text-gray-400 text-sm">
                Try a different search term or language filter.
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

export default Books;
