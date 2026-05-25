import { useEffect, useRef, useState, useCallback, lazy, Suspense } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Loader2 } from 'lucide-react';

const categories = ['All', 'Completed', 'Ongoing', 'Interior', 'Elevation'];

// Expanded projects data with more items
const projects = [
  {
    id: 1,
    category: 'Completed',
    title: 'Modern Villa — MVP Colony',
    desc: 'G+2 residential villa with luxury interiors and landscaped garden',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '3200 sqft',
    year: '2024',
    location: 'MVP Colony'
  },
  {
    id: 2,
    category: 'Completed',
    title: 'Contemporary Home — Rushikonda',
    desc: 'G+1 sea-facing home with modern elevation and swimming pool',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '2400 sqft',
    year: '2024',
    location: 'Rushikonda'
  },
  {
    id: 3,
    category: 'Interior',
    title: 'Luxury Living Room — Madhurawada',
    desc: 'Premium interior with Italian marble and smart lighting system',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '500 sqft',
    year: '2024',
    location: 'Madhurawada'
  },
  {
    id: 4,
    category: 'Ongoing',
    title: 'Duplex Project — Gajuwaka',
    desc: '3BHK duplex with premium finishes — 70% complete',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '2800 sqft',
    year: '2025',
    location: 'Gajuwaka'
  },
  {
    id: 5,
    category: 'Elevation',
    title: 'Modern Elevation — Seethammadhara',
    desc: 'Contemporary facade with aluminium composite panel and glass work',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '1800 sqft',
    year: '2023',
    location: 'Seethammadhara'
  },
  {
    id: 6,
    category: 'Interior',
    title: 'Modular Kitchen — Vizag Steel City',
    desc: 'L-shaped modular kitchen with granite countertop and SS appliances',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '200 sqft',
    year: '2024',
    location: 'Steel City'
  },
  {
    id: 7,
    category: 'Completed',
    title: 'Budget Home — Kommadi',
    desc: 'Affordable yet premium G+1 home within budget constraints',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '1600 sqft',
    year: '2023',
    location: 'Kommadi'
  },
  {
    id: 8,
    category: 'Ongoing',
    title: 'Commercial + Residential — Dwaraka Nagar',
    desc: 'Ground floor commercial space with 2 floors of luxury residences',
    image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '4000 sqft',
    year: '2025',
    location: 'Dwaraka Nagar'
  },
  {
    id: 9,
    category: 'Elevation',
    title: 'Classic Elevation — Pendurthi',
    desc: 'Double height entrance with premium stone cladding and landscaping',
    image: 'https://images.pexels.com/photos/3935334/pexels-photo-3935334.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '2200 sqft',
    year: '2023',
    location: 'Pendurthi'
  },
  {
    id: 10,
    category: 'Completed',
    title: 'Luxury Penthouse — Beach Road',
    desc: 'Sea-view penthouse with private terrace and jacuzzi',
    image: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '3500 sqft',
    year: '2024',
    location: 'Beach Road'
  },
  {
    id: 11,
    category: 'Ongoing',
    title: 'Smart Home Project — NAD Junction',
    desc: 'Fully automated home with IoT integration — 85% complete',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '3000 sqft',
    year: '2025',
    location: 'NAD Junction'
  },
  {
    id: 12,
    category: 'Interior',
    title: 'Master Bedroom Makeover — Yendada',
    desc: 'Luxurious master bedroom with walk-in closet and spa bathroom',
    image: 'https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '450 sqft',
    year: '2024',
    location: 'Yendada'
  },
  {
    id: 13,
    category: 'Completed',
    title: 'Eco-Friendly Home — Simhachalam',
    desc: 'Green building with solar panels and rainwater harvesting',
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '2700 sqft',
    year: '2023',
    location: 'Simhachalam'
  },
  {
    id: 14,
    category: 'Ongoing',
    title: 'Villa Project — Bheemili',
    desc: 'Beachfront villas with private pools — 60% complete',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '4500 sqft',
    year: '2025',
    location: 'Bheemili'
  },
  {
    id: 15,
    category: 'Elevation',
    title: 'Minimalist Facade — MVP Double Road',
    desc: 'Clean lines with wooden accents and vertical gardens',
    image: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '2000 sqft',
    year: '2024',
    location: 'MVP Double Road'
  },
  {
    id: 16,
    category: 'Interior',
    title: 'Home Office Design — Marripalem',
    desc: 'Modern home office with ergonomic setup and acoustic panels',
    image: 'https://images.pexels.com/photos/276510/pexels-photo-276510.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    area: '250 sqft',
    year: '2024',
    location: 'Marripalem'
  }
];

// Lazy image component for better performance
const LazyImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = imgRef.current;
            if (img && img.src !== src) {
              img.src = src;
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <div className="relative h-full w-full bg-gray-200">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
        </div>
      )}
      <img
        ref={imgRef}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

// Project card component
const ProjectCard = ({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="reveal-card group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer transform hover:-translate-y-2 opacity-0 translate-y-8"
      onClick={onClick}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative h-56 md:h-64 overflow-hidden">
        <LazyImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />

        {/* Category badge */}
        <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
          project.category === 'Completed' ? 'bg-green-500 text-white' :
          project.category === 'Ongoing' ? 'bg-orange-500 text-white' :
          project.category === 'Interior' ? 'bg-purple-500 text-white' :
          'bg-blue-500 text-white'
        }`} style={{ fontFamily: 'Poppins, sans-serif' }}>
          {project.category}
        </div>

        {/* Location badge */}
        <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md text-white text-xs">
          📍 {project.location}
        </div>

        {/* View icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Eye className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-1 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          {project.desc}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {project.area}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {project.year}
          </span>
        </div>
      </div>
    </div>
  );
};

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card animate-pulse">
        <div className="h-56 md:h-64 bg-gray-300"></div>
        <div className="p-5">
          <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-3 w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<null | typeof projects[0]>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // Reset pagination when category changes
  useEffect(() => {
    setVisibleProjects(6);
    setHasMore(true);
    setIsLoading(false);
  }, [activeCategory]);

  // Load more projects
  const loadMore = useCallback(() => {
    const newVisible = visibleProjects + 6;
    setVisibleProjects(newVisible);
    if (newVisible >= filtered.length) {
      setHasMore(false);
    }
  }, [visibleProjects, filtered.length]);

  // Intersection observer for infinite scroll
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [hasMore, isLoading, loadMore]);

  // Section reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-section');
    elements.forEach((el) => observer.observe(el));

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
    const currentFiltered = filtered;
    const newIndex = (lightboxIndex - 1 + currentFiltered.length) % currentFiltered.length;
    setLightbox(currentFiltered[newIndex]);
    setLightboxIndex(newIndex);
  };

  const nextImage = () => {
    const currentFiltered = filtered;
    const newIndex = (lightboxIndex + 1) % currentFiltered.length;
    setLightbox(currentFiltered[newIndex]);
    setLightboxIndex(newIndex);
  };

  const displayedProjects = filtered.slice(0, visibleProjects);

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 reveal-section opacity-0 transition-all duration-700">
          <p className="text-orange-500 text-sm md:text-base font-semibold mb-2 tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
            OUR WORK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Projects We're{' '}
            <span className="text-orange-500 relative inline-block">
              Proud Of
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Every project is a testament to our craft. Browse our portfolio of completed,
            ongoing, and showcase projects across Visakhapatnam.
          </p>
        </div>

        {/* Category filter - horizontal scroll on mobile */}
        <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 md:gap-3 mb-8 md:mb-12 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide reveal-section opacity-0 transition-all duration-700 delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white text-gray-600 hover:text-orange-500 border border-gray-200 hover:border-orange-300'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid with lazy loading */}
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {displayedProjects.map((proj, index) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  index={index}
                  onClick={() => openLightbox(proj, index)}
                />
              ))}
            </div>

            {/* Load more trigger */}
            {hasMore && filtered.length > visibleProjects && (
              <div ref={loadMoreRef} className="flex justify-center mt-8 md:mt-12">
                <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* No results message */}
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No projects found in this category</p>
              </div>
            )}

            {/* View all button (for desktop) */}
            {!hasMore && filtered.length > 6 && (
              <div className="text-center mt-8 md:mt-12">
                <button
                  onClick={() => setVisibleProjects(filtered.length)}
                  className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                >
                  Show all {filtered.length} projects
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full max-h-[60vh] md:max-h-[75vh] object-contain rounded-2xl"
              />
              
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-b-2xl p-4 md:p-6">
                <h3 className="text-white font-bold text-base md:text-xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {lightbox.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm mb-2">
                  {lightbox.desc}
                </p>
                <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-400">
                  <span>📍 {lightbox.location}</span>
                  <span>📐 {lightbox.area}</span>
                  <span>📅 {lightbox.year}</span>
                  <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400">
                    {lightbox.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-8 h-8 md:w-10 md:h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-8 h-8 md:w-10 md:h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs md:text-sm">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .reveal-section {
          transition: opacity 0.7s ease, transform 0.7s ease;
          transform: translateY(20px);
        }
        .reveal-section.visible {
          opacity: 1 !important;
          transform: translateY(0);
        }
        .reveal-card {
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .reveal-card.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}