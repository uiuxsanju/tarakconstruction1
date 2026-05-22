import { useEffect, useRef } from 'react';
import { MessageSquare, MapPin, PenTool, Calculator, HardHat, Paintbrush, Key } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    desc: 'We listen to your vision, requirements, and budget to understand exactly what you want.',
  },
  {
    icon: MapPin,
    step: '02',
    title: 'Site Visit',
    desc: 'Our engineers visit your plot for assessment, soil testing, and feasibility analysis.',
  },
  {
    icon: PenTool,
    step: '03',
    title: 'Planning & Design',
    desc: 'Architects create detailed floor plans, 3D elevations, and structural drawings.',
  },
  {
    icon: Calculator,
    step: '04',
    title: 'Estimation',
    desc: 'Transparent, itemized cost estimation with material specifications and timeline.',
  },
  {
    icon: HardHat,
    step: '05',
    title: 'Construction',
    desc: 'Skilled engineers and workers execute the project with daily progress updates.',
  },
  {
    icon: Paintbrush,
    step: '06',
    title: 'Finishing',
    desc: 'Painting, flooring, fixtures, and all finishing touches are completed to perfection.',
  },
  {
    icon: Key,
    step: '07',
    title: 'Handover',
    desc: 'Final quality inspection, walk-through, and keys handed to you with a smile.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <p className="section-subtitle">How We Work</p>
          <h2 className="section-title mb-4">
            Our Construction{' '}
            <span className="text-orange-500">Process</span>
          </h2>
          <p className="text-gray-500 text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
            A proven, transparent 7-step process that ensures your project is delivered
            on time, within budget, and to the highest quality standards.
          </p>
        </div>

        {/* Timeline — Desktop */}
        <div className="hidden md:block relative">
          {/* Horizontal line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200" />
          <div className="absolute top-16 left-0 h-0.5 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300" style={{ width: '100%' }} />

          <div className="grid grid-cols-7 gap-4 relative">
            {steps.map(({ icon: Icon, step, title, desc }, index) => (
              <div
                key={step}
                className="reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Icon circle */}
                <div className="relative z-10 w-14 h-14 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center mb-5 shadow-orange group hover:bg-orange-500 transition-colors cursor-default">
                  <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 text-sm mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline — Mobile */}
        <div className="md:hidden space-y-4">
          {steps.map(({ icon: Icon, step, title, desc }, index) => (
            <div
              key={step}
              className="reveal flex gap-4 items-start"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Left: step line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-orange">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-orange-200 mt-1 min-h-6" />
                )}
              </div>

              {/* Content */}
              <div className="pb-6 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Step {step}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center reveal">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-orange-500 text-white rounded-2xl px-8 py-6 shadow-orange-lg">
            <div className="text-left">
              <h3 className="font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ready to Start Building?
              </h3>
              <p className="text-orange-100 text-sm mt-1">Book a free consultation with our experts today</p>
            </div>
            <a
              href={`https://wa.me/9381476076?text=${encodeURIComponent(`Hello TarakConstructions Team,\n\nI am interested in constructing my dream house in Visakhapatnam and would like to get a FREE construction estimate.\n\nPlease contact me regarding:\n🏠 House Construction Consultation\n📐 Plot Evaluation & Planning\n💰 Budget Estimation\n🧱 Construction Services Details\n📍 Site Visit Availability\n\nPlease share complete details on WhatsApp.\n\nThank you.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-orange-500 hover:bg-orange-50 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}