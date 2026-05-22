import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'BAGADI TARAKESWARA RAO',
    location: 'Sector 4, Last Bus Stop Road, Near ACA-VDCA Cricket Stadium, Visakhapatnam',
    rating: 5,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    review: 'TarakConstructions built our dream home in exactly 11 months. The quality of construction, the attention to detail, and the transparency in pricing was exceptional. Tarak sir himself visited our site twice a week. Highly recommended!',
  },
  {
    name: 'Lakshmi Prasanna',
    location: 'Rushikonda, Vizag',
    rating: 5,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    review: 'As a first-time homeowner, I was nervous about the construction process. TarakConstructions made it stress-free with regular updates, transparent billing, and genuine care for quality. The home looks stunning!',
  },
  {
    name: 'Venkat Suresh',
    location: 'Madhurawada, Vizag',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    review: 'I compared 5 builders in Vizag before choosing TarakConstructions. Best decision ever. They stayed within budget, completed ahead of schedule, and the finishing quality is on par with premium builders in Hyderabad.',
  },
  {
    name: 'Durga Bhavani',
    location: 'Seethammadhara, Vizag',
    rating: 5,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    review: 'The team is professional, responsive, and honest. They suggested cost-saving alternatives without compromising quality. Our G+1 home came out even better than our expectations. Will definitely recommend.',
  },
  {
    name: 'Srinivas Murthy',
    location: 'Kommadi, Vizag',
    rating: 5,
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    review: 'From plan approval to final handover — TarakConstructions handled everything smoothly. The WhatsApp updates and weekly photos kept us informed throughout. Quality of tiles, paint, and electrical work is top-notch.',
  },
  {
    name: 'Anitha Reddy',
    location: 'Pendurthi, Vizag',
    rating: 5,
    image: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    review: 'My husband and I are thrilled with our new home. TarakConstructions exceeded our expectations in every way. The structural quality is excellent and the interiors are beautifully done. Thank you Tarak sir!',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const visibleCount = 3;
  const total = testimonials.length;

  const go = (dir: 1 | -1) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + dir + total) % total);
    setTimeout(() => setIsAnimating(false), 400);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  });

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(current + i) % total]);
    }
    return items;
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="section-subtitle">Client Stories</p>
          <h2 className="section-title mb-4">
            What Our Clients{' '}
            <span className="text-orange-500">Say About Us</span>
          </h2>
          <p className="text-gray-500 text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
            Don't take our word for it. Here's what 500+ happy homeowners across
            Visakhapatnam have to say about TarakConstructions.
          </p>
        </div>

        {/* Rating summary */}
        <div className="flex items-center justify-center gap-6 mb-12 reveal">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>4.9</div>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-1">Average Rating</div>
          </div>
          <div className="w-px h-16 bg-gray-200" />
          <div className="text-center">
            <div className="text-5xl font-extrabold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>500+</div>
            <div className="text-sm text-gray-500 mt-2">Reviews</div>
          </div>
          <div className="w-px h-16 bg-gray-200" />
          <div className="text-center">
            <div className="text-5xl font-extrabold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>98%</div>
            <div className="text-sm text-gray-500 mt-2">Satisfied</div>
          </div>
        </div>

        {/* Testimonials slider */}
        <div className="reveal">
          <div className="grid md:grid-cols-3 gap-6">
            {getVisible().map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className={`bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover hover:border-orange-100 transition-all duration-300 ${
                  isAnimating ? 'opacity-70' : 'opacity-100'
                }`}
              >
                {/* Quote icon */}
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-orange-500" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Review */}
                <p
                  className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  "{t.review}"
                </p>

                {/* Client */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-orange-100"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 bg-white border border-gray-200 hover:border-orange-400 rounded-full flex items-center justify-center text-gray-600 hover:text-orange-500 transition-all duration-200 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-orange-500' : 'w-2 h-2 bg-gray-300 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 bg-white border border-gray-200 hover:border-orange-400 rounded-full flex items-center justify-center text-gray-600 hover:text-orange-500 transition-all duration-200 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
