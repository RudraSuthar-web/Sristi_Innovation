
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, BookMarked, Library, Tag } from 'lucide-react';
import { getGoogleDriveLink } from '../../utils/googleDrivePdfLinks';

// ─── Content from /sristi_pdf/all_pdf/Publication/ (English, Hindi, Gujarati) ─
const BOOKS = [
  {
    id: 1,
    title: 'Africa Calling',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Africa_Calling__Englsih_-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Africa Calling (Englsih).pdf',
    available: true,
  },
  {
    id: 2,
    title: 'Celebrating a Century- Profiles of Centenarians',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Celebrating_a_Century-_Profiles_of_Centenarians_Englsih_-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Celebrating a Century- Profiles of Centenarians Englsih).pdf',
    available: true,
  },
  {
    id: 3,
    title: 'Childhood unchained book with bleed',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Childhood_unchained_book_with_bleed-001.png',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Childhood unchained book with bleed.pdf',
    available: true,
  },
  {
    id: 4,
    title: 'Children Creativity Workshop Book',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Children_Creativity_Workshop_Book-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Children_Creativity_Workshop_Book.pdf',
    available: true,
  },
  {
    id: 5,
    title: 'Cornucopia of creativity 250 Practices',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Cornucopia_of_creativity_250_Practices___Englsih_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Cornucopia of creativity 250 Practices  (Englsih).pdf',
    available: true,
  },
  {
    id: 6,
    title: 'Creative voices from the Grassroots profile of innovators',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Creative_voices_from_the_Grassroots_profile_of_innovators__English_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Creative voices from the Grassroots profile of innovators (English).pdf',
    available: true,
  },
  {
    id: 7,
    title: 'Edible Art- A bite of creativity in Indian Cusine',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Edible_Art-_A_bite_of_creativity_in_Indian_Cusine__Englsih_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Edible Art- A bite of creativity in Indian Cusine (Englsih).pdf',
    available: true,
  },
  {
    id: 8,
    title: 'Empathetic and inclusive Innovations at grassroots (LBSNAA Book)',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Empathetic_and_inclusive_Innovations_at_grassroots__LBSNAA_Book_-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Empathetic and inclusive Innovations at grassroots (LBSNAA_Book).pdf',
    available: true,
  },
  {
    id: 9,
    title: 'Grassroots innovation across the Himalaya',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Grassroots_innovation_across_the_Himalaya__English_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Grassroots innovation across the Himalaya (English).pdf',
    available: true,
  },
  {
    id: 10,
    title: 'Honey Bee Newsletters Cover Stories',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Honey_Bee_Newsletters_Cover_Stories__English_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Honey Bee Newsletters Cover Stories (English).pdf',
    available: true,
  },
  {
    id: 11,
    title: 'Indigenous Common Property Resource Institution From Across the World',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Indigenous_Common_Property_Resource_Institution_From_Across_the_World__English_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Indigenous Common Property Resource Institution From Across the World (English).pdf',
    available: true,
  },
  {
    id: 12,
    title: 'Mapping Solutions',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Mapping_Solutions__English_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Mapping Solutions (English).pdf',
    available: true,
  },
  {
    id: 13,
    title: 'Policies for an Inclusive Innovation Ecosystem',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Policies_for_an_Inclusive_Innovation_Ecosystem__English_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Policies for an Inclusive Innovation Ecosystem (English).pdf',
    available: true,
  },
  {
    id: 14,
    title: 'Shatayu book',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Shatayu_book-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Shatayu book.pdf',
    available: true,
  },
  {
    id: 15,
    title: 'Shodhyatra A pursuit of Authenticity',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Shodhyatra_A_pursuit_of_Authenticity-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Shodhyatra A pursuit of Authenticity.pdf',
    available: true,
  },
  {
    id: 16,
    title: 'Teachers as transformers',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_Teachers_as_transformers-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/Teachers as transformers.pdf',
    available: true,
  },
  {
    id: 17,
    title: 'The Discerning Decades – HBN Editorial 1990-2012',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_The_Discerning_Decades___HBN_Editorial_1990-2012_English_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/The Discerning Decades – HBN Editorial 1990-2012 English).pdf',
    available: true,
  },
  {
    id: 18,
    title: 'The crucible of creativity',
    language: 'English',
    coverImage: '/assets/magazine_covers/pub_The_crucible_of_creativity_English-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/English/The crucible of creativity English.pdf',
    available: true,
  },
  {
    id: 19,
    title: 'Bharat ke Buniyadi Kaushaly',
    language: 'Hindi',
    coverImage: '/assets/magazine_covers/pub_Bharat_ke_Buniyadi_Kaushaly__Hindi_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Hindi/Bharat ke Buniyadi Kaushaly (Hindi).pdf',
    available: true,
  },
  {
    id: 20,
    title: 'Dhairy ke Hastakshar',
    language: 'Hindi',
    coverImage: '/assets/magazine_covers/pub_Dhairy_ke_Hastakshar__Hindi_-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Hindi/Dhairy ke Hastakshar (Hindi).pdf',
    available: true,
  },
  {
    id: 21,
    title: 'Ek bel ko bhi hai Jine ka Adhikar',
    language: 'Hindi',
    coverImage: '/assets/magazine_covers/pub_Ek_bel_ko_bhi_hai_Jine_ka_Adhikar__HINID_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Hindi/Ek bel ko bhi hai Jine ka Adhikar (HINID).pdf',
    available: true,
  },
  {
    id: 22,
    title: 'Fasal bina Jahar ki',
    language: 'Hindi',
    coverImage: '/assets/magazine_covers/pub_Fasal_bina_Jahar_ki__Hindi_-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Hindi/Fasal bina Jahar ki (Hindi).pdf',
    available: true,
  },
  {
    id: 23,
    title: 'Naisargik Pashu chikitsa',
    language: 'Hindi',
    coverImage: '/assets/magazine_covers/pub_Naisargik_Pashu_chikitsa__Hindi_-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Hindi/Naisargik Pashu chikitsa (Hindi).pdf',
    available: true,
  },
  {
    id: 24,
    title: 'Shatayu Vandana Hindi',
    language: 'Hindi',
    coverImage: '/assets/magazine_covers/pub_Shatayu_Vandana_Hindi-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Hindi/Shatayu Vandana Hindi.pdf',
    available: true,
  },
  {
    id: 25,
    title: 'Vyanjano ki Virasat',
    language: 'Hindi',
    coverImage: '/assets/magazine_covers/pub_Vyanjano_ki_Virasat__Hindi_-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Hindi/Vyanjano ki Virasat (Hindi).pdf',
    available: true,
  },
  {
    id: 26,
    title: 'Bharat na Janita Buniyadi Kaushalyo',
    language: 'Gujarati',
    coverImage: '/assets/magazine_covers/pub_Bharat_na_Janita_Buniyadi_Kaushalyo_Gujarati-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Gujarati/Bharat na Janita Buniyadi Kaushalyo Gujarati.pdf',
    available: true,
  },
  {
    id: 27,
    title: 'Dhairyna Hastakshar',
    language: 'Gujarati',
    coverImage: '/assets/magazine_covers/pub_Dhairyna__Hastakshar_Gujarati_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Gujarati/Dhairyna  Hastakshar Gujarati).pdf',
    available: true,
  },
  {
    id: 28,
    title: 'Jaivik pak sarakshan',
    language: 'Gujarati',
    coverImage: '/assets/magazine_covers/pub_Jaivik_pak_sarakshan__Gujarati_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Gujarati/Jaivik pak sarakshan (Gujarati).pdf',
    available: true,
  },
  {
    id: 29,
    title: 'Naisargik Pashu chikitsa',
    language: 'Gujarati',
    coverImage: '/assets/magazine_covers/pub_Naisargik_Pashu_chikitsa__Gujarati_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Gujarati/Naisargik Pashu chikitsa (Gujarati).pdf',
    available: true,
  },
  {
    id: 30,
    title: 'Poshanmuly (Paramparagat Visrata Aahar Ane Dhanyonu Poshanmuly)',
    language: 'Gujarati',
    coverImage: '/assets/magazine_covers/pub_Poshanmuly__Paramparagat_Visrata_Aahar_Ane_Dhanyonu_Poshanmuly__Final-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Gujarati/Poshanmuly (Paramparagat Visrata Aahar Ane Dhanyonu Poshanmuly)_Final.pdf',
    available: true,
  },
  {
    id: 31,
    title: 'Shatayu Vandana',
    language: 'Gujarati',
    coverImage: '/assets/magazine_covers/pub_Shatayu_Vandana__Gujarati_-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Gujarati/Shatayu Vandana (Gujarati).pdf',
    available: true,
  },
  {
    id: 32,
    title: 'Taki Rahevano Purusharth',
    language: 'Gujarati',
    coverImage: '/assets/magazine_covers/pub_Taki_Rahevano_Purusharth__GUJ_-001.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Gujarati/Taki Rahevano Purusharth (GUJ).pdf',
    available: true,
  },
  {
    id: 33,
    title: 'Vesarati Vangi no Khajano',
    language: 'Gujarati',
    coverImage: '/assets/magazine_covers/pub_Vesarati_Vangi_no_Khajano-01.jpg',
    pdfLink: '/sristi_pdf/all_pdf/Publication/Gujarati/Vesarati Vangi no Khajano.pdf',
    available: true,
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
          Download PDF
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
