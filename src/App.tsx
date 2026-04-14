import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Settings, 
  Zap, 
  Shield, 
  ChevronRight, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Menu,
  X,
  Gauge,
  Car,
  Battery,
  Disc
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Gauge className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold text-white tracking-tighter uppercase">Fast<span className="text-red-600">Tuning</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider">Services</a>
            <a href="#about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider">About</a>
            <a href="#pricing" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider">Pricing</a>
            <a href="#contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider">Contact</a>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors">
              Book Appointment
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 md:hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300 hover:text-white uppercase tracking-wider">Services</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300 hover:text-white uppercase tracking-wider">About</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300 hover:text-white uppercase tracking-wider">Pricing</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300 hover:text-white uppercase tracking-wider">Contact</a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider w-full mt-4">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=2071&auto=format&fit=crop" 
          alt="Tuned sports car in garage" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-600/30 bg-red-600/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Premium Workshop & Tuning
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase">
            Unleash Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Car's Potential.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl font-light leading-relaxed">
            Comprehensive automotive workshop. Routine maintenance, professional bodywork, and custom ECU tuning — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group">
              Check Offers
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border border-zinc-700 hover:border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "12K+", label: "Vehicles Serviced" },
    { value: "15+", label: "Years Experience" },
    { value: "99%", label: "Satisfied Clients" },
    { value: "50+", label: "Awards Won" },
  ];

  return (
    <section className="py-12 border-y border-zinc-900 bg-zinc-950/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-900">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Gauge className="w-8 h-8" />, title: "ECU Tuning", desc: "Custom remaps to unlock hidden horsepower and improve fuel efficiency." },
    { icon: <Wrench className="w-8 h-8" />, title: "Engine Repair", desc: "Comprehensive diagnostics and repair for all major engine components." },
    { icon: <Disc className="w-8 h-8" />, title: "Brake Systems", desc: "High-performance brake pad replacement, rotor resurfacing, and fluid flushes." },
    { icon: <Settings className="w-8 h-8" />, title: "Suspension", desc: "Coilover installation, alignment, and handling optimization." },
    { icon: <Battery className="w-8 h-8" />, title: "Diagnostics", desc: "Advanced computer diagnostics to pinpoint issues quickly and accurately." },
    { icon: <Car className="w-8 h-8" />, title: "Restoration", desc: "Full bodywork, paint correction, and classic car restoration services." },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Tailored Automotive <br/>Services</h3>
          </div>
          <button className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 hover:text-red-500 transition-colors">
            View All Services <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 p-8 hover:bg-zinc-900 hover:border-red-600/50 transition-all group"
            >
              <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{service.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2012&auto=format&fit=crop" 
                alt="Mechanic working on engine" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-red-600 p-8 hidden md:block">
              <div className="text-5xl font-black text-white mb-1">100%</div>
              <div className="text-xs font-bold text-white uppercase tracking-widest">Pure Passion</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Gasoline in our blood</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">Driven by Performance.</h3>
            <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
              <p>
                Meet the story that started with a single project car and two cousins with an unquenchable passion for four wheels. What began in a small home garage has evolved into a premier tuning facility.
              </p>
              <p>
                We quickly realized it was more than just a job. It was a chance to turn passion into a mission – helping others achieve their automotive dreams. Combining a great location with state-of-the-art equipment, we created a unique place where every car is treated with respect.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6 pt-10 border-t border-zinc-800">
              <div>
                <div className="text-white font-bold uppercase tracking-wide mb-1">Honest Diagnostics</div>
                <div className="text-sm text-zinc-500">We only fix what needs fixing.</div>
              </div>
              <div>
                <div className="text-white font-bold uppercase tracking-wide mb-1">Premium Parts</div>
                <div className="text-sm text-zinc-500">Only the best for your vehicle.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const offers = [
    {
      tag: "Best Offer",
      discount: "-15%",
      title: "Full Synthetic Oil Change",
      desc: "Enjoy exclusive discounts on select services and experience the difference with our expert care.",
      price: "From $89.00"
    },
    {
      tag: "Hot Offer",
      discount: "-20%",
      title: "Stage 1 ECU Tune",
      desc: "Unlock safe, reliable power gains without hardware modifications. Perfect for daily drivers.",
      price: "From $399.00"
    },
    {
      tag: "Seasonal",
      discount: "-10%",
      title: "Brake Pad & Rotor Combo",
      desc: "Complete front or rear brake service using premium ceramic pads and slotted rotors.",
      price: "From $249.00"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Special Packages</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Explore Our Offers</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 p-8 relative overflow-hidden group hover:border-red-600/50 transition-colors">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest border-l-2 border-red-500 pl-2">{offer.tag}</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">{offer.discount}</span>
              </div>
              <h4 className="text-2xl font-bold text-white uppercase tracking-wide mb-4 pr-8">{offer.title}</h4>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed">{offer.desc}</p>
              <div className="flex justify-between items-end mt-auto">
                <span className="text-xl font-bold text-white">{offer.price}</span>
                <button className="w-10 h-10 bg-zinc-800 group-hover:bg-red-600 text-white flex items-center justify-center transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-transparent border border-zinc-700 hover:border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2">
            View Full Price List
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Client Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">What They Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-zinc-950 p-8 border border-zinc-800">
              <div className="flex text-red-500 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-8 italic">
                "Absolutely stellar service. They diagnosed an issue with my turbo that two other shops missed. The car runs better than it did from the factory. Highly recommended for any serious enthusiast."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?img=${i * 10}`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm uppercase tracking-wide">Alex Mercer</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wider">BMW M3 Owner</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Gauge className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold text-white tracking-tighter uppercase">Fast<span className="text-red-600">Tuning</span></span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Premium automotive workshop specializing in performance tuning, maintenance, and restoration.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-colors cursor-pointer"><span className="font-bold text-xs">IG</span></div>
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-colors cursor-pointer"><span className="font-bold text-xs">FB</span></div>
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-colors cursor-pointer"><span className="font-bold text-xs">YT</span></div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <span>1234 Performance Way<br/>Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span>service@fasttuning.ca</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Working Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <Clock className="w-5 h-5 text-red-600 shrink-0" />
                <div>
                  <div className="flex justify-between w-40 mb-2">
                    <span>Mon - Fri:</span>
                    <span className="text-white">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between w-40 mb-2">
                    <span>Saturday:</span>
                    <span className="text-white">9:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between w-40">
                    <span>Sunday:</span>
                    <span className="text-red-500">Closed</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-4">Subscribe for the latest news and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 text-sm w-full focus:outline-none focus:border-red-600"
              />
              <button className="bg-red-600 text-white px-4 py-3 hover:bg-red-700 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Fast Tuning. All rights reserved.
          </p>
          <div className="flex gap-6 text-zinc-600 text-xs uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
