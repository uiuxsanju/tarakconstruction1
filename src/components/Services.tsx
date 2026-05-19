import { useEffect, useRef, useState } from 'react';
import { PenTool, MapPin, FileText, Calculator, Layers, Building, Triangle, Home, Grid2x2 as Grid, Minus, Droplets, Zap, ChefHat, Bath, Paintbrush, Armchair, Shield, Leaf, LayoutGrid as Layout, Cpu, Key } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Custom Home Design',
    desc: 'Architect-designed custom floor plans tailored to your lifestyle and plot dimensions.',
  },
  {
    icon: MapPin,
    title: 'Site Evaluation & Soil Testing',
    desc: 'Professional site assessment and soil bearing capacity analysis before construction.',
  },
  {
    icon: FileText,
    title: 'Building Plan Approval',
    desc: 'Complete assistance with VMRDA / GVMC plan approval and all regulatory clearances.',
  },
  {
    icon: Calculator,
    title: 'Budget & Cost Estimation',
    desc: 'Detailed and transparent cost breakdowns so you know exactly where every rupee goes.',
  },
  {
    icon: Layers,
    title: 'Foundation Works',
    desc: 'Deep excavation, PCC, and RCC footings using premium grade concrete and steel.',
  },
  {
    icon: Building,
    title: 'RCC / Steel Structural Framing',
    desc: 'Robust structural framework designed by certified structural engineers for safety.',
  },
  {
    icon: Triangle,
    title: 'Brickwork & Masonry',
    desc: 'Precision brickwork with quality cement mortar for strong, durable walls.',
  },
  {
    icon: Home,
    title: 'Roofing & Terrace Works',
    desc: 'Waterproof RCC slab casting, terrace waterproofing, and parapet wall construction.',
  },
  {
    icon: Grid,
    title: 'Flooring',
    desc: 'Vitrified tiles, granite, marble, and wooden flooring with expert installation.',
  },
  {
    icon: Minus,
    title: 'Ceiling Works',
    desc: 'False ceilings in POP, gypsum, or wooden designs with ambient lighting integration.',
  },
  {
    icon: Droplets,
    title: 'Plumbing',
    desc: 'CPVC/UPVC piping, bathroom fittings, and sewage systems with quality materials.',
  },
  {
    icon: Zap,
    title: 'Electrical Works',
    desc: 'Complete wiring, MCB boards, light fittings, switches by certified electricians.',
  },
  {
    icon: ChefHat,
    title: 'Kitchen Works',
    desc: 'Modular kitchens, granite countertops, stainless steel sinks, and chimney installation.',
  },
  {
    icon: Bath,
    title: 'Bathroom Works',
    desc: 'Premium sanitary fittings, anti-skid tiles, and modern bathroom accessories.',
  },
  {
    icon: Paintbrush,
    title: 'Painting & Decorative Finishes',
    desc: 'Interior and exterior painting with premium brands like Asian Paints or Berger.',
  },
  {
    icon: Armchair,
    title: 'Carpentry & Woodwork',
    desc: 'Custom wooden doors, wardrobes, window frames, and decorative woodwork.',
  },
  {
    icon: Shield,
    title: 'Waterproofing',
    desc: 'Expert waterproofing for terraces, bathrooms, and basements using DR Fixit systems.',
  },
  {
    icon: Leaf,
    title: 'Landscaping',
    desc: 'Garden design, pathway tiling, boundary walls, and outdoor aesthetics.',
  },
  {
    icon: Layout,
    title: 'Interior Design',
    desc: 'Full interior design services — furniture layout, decor, and space optimization.',
  },
  {
    icon: Cpu,
    title: 'Smart Home Automation',
    desc: 'IoT-enabled lighting, security cameras, video door phones, and remote controls.',
  },
  {
    icon: Key,
    title: 'Handover & Maintenance',
    desc: 'Thorough quality inspection, defect rectification, and annual maintenance packages.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? services : services.slice(0, 9);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <p className="section-subtitle">What We Build</p>
          <h2 className="section-title mb-4">
            Complete Construction{' '}
            <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-500 text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
            From foundation to final finishes — we handle everything so you don't have to.
            21 services under one roof for a seamless building experience.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className="reveal group gradient-border bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${(index % 9) * 60}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-all duration-300">
                  <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-orange-100 transition-colors">
                <button className="text-orange-500 text-sm font-semibold hover:text-orange-600 flex items-center gap-1 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Learn More
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show more / Show less */}
        {!showAll && (
          <div className="mt-12 text-center reveal">
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline px-8 py-3.5"
            >
              View All 21 Services
              <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
        {showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="text-gray-500 hover:text-orange-500 text-sm font-medium transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
