import { useEffect, useRef, useState } from 'react';
import { Building2, Users, Award, Wrench } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

const stats = [
  { icon: Building2, value: 500, suffix: '+', label: 'Projects Completed', color: 'text-orange-500' },
  { icon: Users, value: 500, suffix: '+', label: 'Happy Clients', color: 'text-orange-500' },
  { icon: Award, value: 12, suffix: '+', label: 'Years Experience', color: 'text-orange-500' },
  { icon: Wrench, value: 150, suffix: '+', label: 'Skilled Workers', color: 'text-orange-500' },
];

function Counter({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const value = useCounter(target, 2000, start);
  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1F2937 0%, #111827 50%, #1F2937 100%)',
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #FF6B00,
            #FF6B00 1px,
            transparent 1px,
            transparent 50px
          )`,
        }} />
      </div>

      {/* Orange accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Numbers That Speak{' '}
            <span className="text-orange-400">For Themselves</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            12+ years of building trust, delivering quality, and transforming dreams into reality
            across Visakhapatnam.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, suffix, label }, index) => (
            <div
              key={label}
              className="reveal text-center group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-orange-500/40 transition-all duration-300 hover:shadow-orange">
                <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <div
                  className="text-4xl md:text-5xl font-extrabold text-white mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <Counter target={value} suffix={suffix} start={started} />
                </div>
                <p className="text-gray-400 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Awards row */}
        <div className="mt-16 reveal">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
            {[
              'CREDAI Andhra Pradesh',
              'NAREDCO Member',
              'ISO 9001:2015 Certified',
              'VMRDA Approved Builder',
            ].map((award) => (
              <div key={award} className="flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                {award}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
