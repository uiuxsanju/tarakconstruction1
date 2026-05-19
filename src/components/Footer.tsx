import { HardHat, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Custom Home Design',
  'Foundation Works',
  'RCC Structural Framing',
  'Interior Design',
  'Electrical & Plumbing',
  'Smart Home Automation',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Orange top accent */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600" />

      {/* Pre-footer CTA */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ready to Build Your Dream Home?
              </h3>
              <p className="text-gray-400 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get a free estimate from Vizag's most trusted construction company.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello TarakConstructions Team,\n\nI am interested in constructing my dream house in Visakhapatnam and would like to get a FREE construction estimate.\n\nPlease contact me regarding:\n🏠 House Construction Consultation\n📐 Plot Evaluation & Planning\n💰 Budget Estimation\n🧱 Construction Services Details\n📍 Site Visit Availability\n\nPlease share complete details on WhatsApp.\n\nThank you.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-extrabold text-white text-lg leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Tarak<span className="text-orange-500">Constructions</span>
                </span>
                <span className="text-xs text-gray-500">Visakhapatnam</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Visakhapatnam's most trusted premium house construction company. Building dreams
              since 2012 with quality, precision, and transparency.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-orange-500 transition-all duration-200 rounded-full overflow-hidden" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2 group text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-orange-500 transition-all duration-200 rounded-full overflow-hidden flex-shrink-0" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Plot 42, Dwaraka Nagar, 4th Lane,<br />
                  Visakhapatnam — 530016, AP
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-sm hover:text-orange-400 transition-colors block" style={{ fontFamily: 'Inter, sans-serif' }}>
                    +91 98765 43210
                  </a>
                  <a href="tel:+919876543211" className="text-sm hover:text-orange-400 transition-colors block" style={{ fontFamily: 'Inter, sans-serif' }}>
                    +91 98765 43211
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@tarakonstructions.com" className="text-sm hover:text-orange-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  info@tarakonstructions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            &copy; {new Date().getFullYear()} TarakConstructions. All rights reserved.
          </p>
          <p className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            Built with pride in{' '}
            <span className="text-orange-500">Visakhapatnam, Andhra Pradesh</span>
          </p>
        </div>
      </div>

      {/* Bottom spacing for mobile sticky bar */}
      <div className="lg:hidden h-16" />
    </footer>
  );
}
