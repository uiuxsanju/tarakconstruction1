import { useEffect, useRef } from 'react';
import { Award, Star, Users, Building2 } from 'lucide-react';

const achievements = [
  { icon: Building2, value: '500+', label: 'Homes Built' },
  { icon: Users, value: '500+', label: 'Happy Families' },
  { icon: Award, value: '12+', label: 'Years Exp.' },
  { icon: Star, value: '4.9', label: 'Avg. Rating' },
];

export default function Founder() {
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle">Meet Our Founder</p>
          <h2 className="section-title">
            The Visionary Behind{' '}
            <span className="text-orange-500">Tarak Constructions</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Founder image */}
          <div className="reveal-left flex justify-center">
            <div className="relative">
              {/* Background decor */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-orange-500/10 rounded-3xl" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500/5 rounded-full" />

              <div className="relative rounded-3xl overflow-hidden shadow-card-hover border-4 border-white">
                <img
                  src="https://plain-apac-prod-public.komododecks.com/202605/21/0M2tbJCay3o3YOXXdVn3/image.webp"
                  alt="Founder of Tarak Constructions"
                  className="w-80 h-96 object-cover object-top"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6">
                  <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                     Bagari Tarak
                  </h3>
                  <p className="text-white text-sm font-medium">Founder & Managing Director</p>
                   <div className="text-white text-sm font-medium ">Department of Archaeology</div>
                  <div className="text-white text-sm font-medium">Andhra University</div>
                  
                </div>
              </div>

              {/* Floating achievement */}
              <div className="absolute -right-8 top-12 bg-white rounded-2xl p-4 shadow-card-hover border border-orange-100">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-orange-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-7">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Award className="w-4 h-4" />
                12+ Years of Excellence
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Bagari Tarak
              </h3>
              <p className="text-orange-500 font-semibold text-base">Founder & Managing Director, Tarak Constructions</p>
              
            </div>

            <p className="reveal text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              With over 12 years of experience in civil construction, Bagari Tarak founded
              Tarak Constructions with a simple vision — to build premium, affordable, and durable
              homes for the families of Visakhapatnam. His hands-on approach, deep technical
              knowledge, and commitment to client satisfaction have made TarakConstructions
              one of the most respected builders in Vizag.
            </p>

            {/* Quote */}
            <div className="reveal bg-white border-l-4 border-orange-500 rounded-r-xl p-5 shadow-card">
              <p className="text-gray-700 italic leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                "Every home we build carries a family's dreams and a lifetime of memories.
                We take that responsibility very seriously — no shortcuts, only quality."
              </p>
              <p className="text-orange-500 font-semibold text-sm mt-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                — Bagari Tarak
              </p>
            </div>

            {/* Achievement stats */}
            <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4">
              {achievements.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-orange-200 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-500 transition-colors">
                    <Icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-xl font-extrabold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
