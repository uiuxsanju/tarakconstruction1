import { useEffect, useState } from 'react';
import { ChevronDown, Phone, Star } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const msg = encodeURIComponent(`Hello TarakConstructions Team,

I am interested in constructing my dream house in Visakhapatnam and would like to get a FREE construction estimate.

Please contact me regarding:
🏠 House Construction Consultation
📐 Plot Evaluation & Planning
💰 Budget Estimation
🧱 Construction Services Details
📍 Site Visit Availability

Please share complete details on WhatsApp.

Thank you.`);
    window.open(`https://wa.me/919381476076?text=Hello%20TarakConstructions,%20I'm%20interested%20in%20your%20construction%20services.=${msg}`, '_blank');
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Premium home construction"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
      </div>

      {/* Orange accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 backdrop-blur-sm text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: 'Montserrat, sans-serif', transitionDelay: '0.1s' }}
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            Trusted Construction Partner in Visakhapatnam
          </div>

          {/* Main headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 transition-all duration-700 text-shadow ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif', transitionDelay: '0.2s' }}
          >
            Building Your{' '}
            <span className="text-orange-400 relative">
              Dream Home
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500 rounded-full" />
            </span>
            <br className="hidden sm:block" />
            {' '}with Precision & Trust
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ fontFamily: 'Inter, sans-serif', transitionDelay: '0.35s' }}
          >
            Premium Individual House Construction Services in Visakhapatnam.
            Quality craftsmanship, transparent pricing, and end-to-end project management.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-orange-lg transform hover:-translate-y-1 text-base"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get Free Estimate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <a
              href="https://wa.me/+919381476076?text=Hello%20TarakConstructions%2C%20I'm%20interested%20in%20building%20a%20house%20in%20Vizag."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-base"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Now
            </a>

            <a
              href="tel:+919381476076"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-base"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Stats row */}
          <div
            className={`flex flex-wrap gap-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.65s' }}
          >
            {[
              { value: '500+', label: 'Projects Done' },
              { value: '12+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-px h-8 bg-orange-500/60" />
                <div>
                  <div className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-1 ml-auto">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
              ))}
              <span className="text-gray-300 text-sm ml-1">4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors scroll-indicator"
      >
        <span className="text-xs font-medium tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Scroll Down
        </span>
        <ChevronDown className="w-5 h-5" />
      </button>

      {/* Bottom orange accent bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
