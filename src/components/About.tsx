import { useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, Wrench } from 'lucide-react';

const highlights = [
  'Trusted by 500+ families across Vizag',
  'ISO certified construction processes',
  'Experienced civil engineers & architects',
  'Premium quality materials only',
  'Transparent cost estimation',
  'On-time project delivery guarantee',
];

const pillars = [
  {
    icon: Award,
    title: 'Quality Assurance',
    desc: 'Every structure is built to last — premium materials, superior craftsmanship.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Seasoned civil engineers, architects, and skilled laborers under one roof.',
  },
  {
    icon: Wrench,
    title: 'End-to-End Service',
    desc: 'From blueprint to final handover, we manage every stage of construction.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className="reveal-left relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Construction work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card-hover border border-gray-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    12+ Years
                  </div>
                  <div className="text-sm text-gray-500">of Excellence in Vizag</div>
                </div>
              </div>
            </div>

            {/* Orange accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/10 rounded-2xl -z-10" />
            <div className="absolute top-1/2 -left-8 w-4 h-32 bg-orange-500 rounded-full opacity-30" />
          </div>

          {/* Right: Content */}
          <div className="space-y-7">
            <div className="reveal">
              <p className="section-subtitle">About TarakConstructions</p>
              <h2 className="section-title leading-tight">
                Building Vizag's Finest Homes{' '}
                <span className="text-orange-500">Since 2012</span>
              </h2>
            </div>

            <p className="reveal text-gray-600 leading-relaxed text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              TarakConstructions is Visakhapatnam's most trusted individual house construction company.
              We combine modern architecture with traditional craftsmanship to deliver homes that are
              built to last. Our transparent process, premium materials, and expert team ensure
              your dream home becomes a reality — on time and within budget.
            </p>

            {/* Highlights list */}
            <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Pillars */}
            <div className="reveal grid sm:grid-cols-3 gap-4 pt-2">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
                    <Icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="reveal pt-2">
              <a
                href={`https://wa.me/9381476076?text=${encodeURIComponent(`Hello TarakConstructions Team,\n\nI am interested in constructing my dream house in Visakhapatnam and would like to get a FREE construction estimate.\n\nPlease contact me regarding:\n🏠 House Construction Consultation\n📐 Plot Evaluation & Planning\n💰 Budget Estimation\n🧱 Construction Services Details\n📍 Site Visit Availability\n\nPlease share complete details on WhatsApp.\n\nThank you.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Start Your Project Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
