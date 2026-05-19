import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const categories = ['All', 'Completed', 'Ongoing', 'Interior', 'Elevation'];

const projects = [
  {
    id: 1,
    category: 'Completed',
    title: 'Modern Villa — MVP Colony',
    desc: 'G+2 residential villa with luxury interiors',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '3200 sqft',
    year: '2024',
  },
  {
    id: 2,
    category: 'Completed',
    title: 'Contemporary Home — Rushikonda',
    desc: 'G+1 sea-facing home with modern elevation',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '2400 sqft',
    year: '2024',
  },
  {
    id: 3,
    category: 'Interior',
    title: 'Luxury Living Room — Madhurawada',
    desc: 'Premium interior with Italian marble and smart lighting',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '500 sqft',
    year: '2024',
  },
  {
    id: 4,
    category: 'Ongoing',
    title: 'Duplex Project — Gajuwaka',
    desc: '3BHK duplex with premium finishes — 70% complete',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '2800 sqft',
    year: '2025',
  },
  {
    id: 5,
    category: 'Elevation',
    title: 'Modern Elevation — Seethammadhara',
    desc: 'Contemporary facade with aluminium and glass work',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '1800 sqft',
    year: '2023',
  },
  {
    id: 6,
    category: 'Interior',
    title: 'Modular Kitchen — Vizag Steel City',
    desc: 'L-shaped kitchen with granite and SS appliances',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '200 sqft',
    year: '2024',
  },
  {
    id: 7,
    category: 'Completed',
    title: 'Budget Home — Kommadi',
    desc: 'Affordable yet premium G+1 home within budget',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '1600 sqft',
    year: '2023',
  },
  {
    id: 8,
    category: 'Ongoing',
    title: 'Commercial + Residential — Dwaraka Nagar',
    desc: 'Ground floor commercial, 2 floors residential',
    image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '4000 sqft',
    year: '2025',
  },
  {
    id: 9,
    category: 'Elevation',
    title: 'Classic Elevation — Pendurthi',
    desc: 'Double height entrance with stone cladding',
    image: 'https://images.pexels.com/photos/3935334/pexels-photo-3935334.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '2200 sqft',
    year: '2023',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<null | typeof projects[0]>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openLightbox = (proj: typeof projects[0], index: number) => {
    setLightbox(proj);
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[newIndex]);
    setLightboxIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % filtered.length;
    setLightbox(filtered[newIndex]);
    setLightboxIndex(newIndex);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="section-subtitle">Our Work</p>
          <h2 className="section-title mb-4">
            Projects We're{' '}
            <span className="text-orange-500">Proud Of</span>
          </h2>
          <p className="text-gray-500 text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
            Every project is a testament to our craft. Browse our portfolio of completed,
            ongoing, and showcase projects across Visakhapatnam.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white shadow-orange'
                  : 'bg-white text-gray-600 hover:text-orange-500 border border-gray-200 hover:border-orange-300'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj, index) => (
            <div
              key={proj.id}
              className="reveal group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(proj, index)}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                {/* Category badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                  proj.category === 'Completed' ? 'bg-green-500 text-white' :
                  proj.category === 'Ongoing' ? 'bg-orange-500 text-white' :
                  'bg-white/90 text-gray-800'
                }`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {proj.category}
                </div>

                {/* View icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-orange">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {proj.desc}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {proj.area}
                  </span>
                  <span>{proj.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full max-h-[70vh] object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-4 text-white">
              <h3 className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>{lightbox.title}</h3>
              <p className="text-sm text-gray-300">{lightbox.desc} &bull; {lightbox.area} &bull; {lightbox.year}</p>
            </div>

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
