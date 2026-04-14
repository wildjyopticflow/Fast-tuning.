import React, { useState, useEffect } from 'react';
import { 
  Wrench, Settings, Zap, Shield, ChevronRight, Star, MapPin, Phone, Mail, Clock, Menu, X, Gauge, Car, Battery, Disc 
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
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'top-4 px-4' : 'top-0 px-0'}`}>
      <div className={`mx-auto transition-all duration-500 ${isScrolled ? 'max-w-7xl bg-zinc-950/85 backdrop-blur-lg border border-zinc-800 shadow-2xl rounded-sm py-3 px-6' : 'w-full bg-gradient-to-b from-zinc-950/80 to-transparent py-5 px-4 sm:px-6 lg:px-8'}`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <a href="#" className="flex items-center cursor-pointer group">
            <img 
              src="https://fasttuning.ca/wp-content/uploads/2021/09/fast_tuning_logo_accueil.png" 
              alt="Fast Tuning" 
              className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300" 
            />
          </a>

          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors uppercase tracking-widest cursor-pointer mt-1">Nos Services</a>
            <a href="#about" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors uppercase tracking-widest cursor-pointer mt-1">À Propos</a>
            <a href="#promotions" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors uppercase tracking-widest cursor-pointer mt-1">Promotions</a>
            <a href="#contact" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors uppercase tracking-widest cursor-pointer mt-1">Contact</a>
            <a href="tel:4504701333" className="bg-[#E3000F] hover:bg-red-700 text-white px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer shadow-[0_0_15px_rgba(227,0,15,0.4)] hover:shadow-[0_0_25px_rgba(227,0,15,0.6)] flex items-center gap-2">
              <Phone className="w-4 h-4" /> 450 470-1333
            </a>
          </div>

          <button className="md:hidden text-white cursor-pointer hover:text-[#E3000F] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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
            className={`absolute left-0 w-full bg-zinc-950 border-b border-zinc-800 md:hidden ${isScrolled ? 'top-full mt-4 shadow-xl' : 'top-full block'}`}
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-zinc-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#E3000F]" />Nos Services</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-zinc-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#E3000F]" />À Propos</a>
              <a href="#promotions" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-zinc-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#E3000F]" />Promotions</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-zinc-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#E3000F]" />Contact</a>
              <a href="tel:4504701333" className="bg-[#E3000F] hover:bg-red-700 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider w-full mt-6 text-center block rounded-sm shadow-[0_0_15px_rgba(227,0,15,0.3)] cursor-pointer transition-all duration-300">
                Appeler : 450 470-1333
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          src="https://fasttuning.ca/wp-content/uploads/2021/10/Fast_Tuning_Porte.jpg" 
          alt="Fast Tuning Garage Door" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#E3000F]/30 bg-[#E3000F]/10 text-[#E3000F] text-xs md:text-sm font-bold uppercase tracking-widest mb-8 rounded-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E3000F] animate-pulse"></span>
            ATELIER DE MÉCANIQUE — EXPERTS EN REPENTIGNY
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8 uppercase drop-shadow-2xl">
            La Puissance à <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E3000F] to-red-800">L'État Pur.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-12 max-w-xl font-light leading-relaxed">
            Spécialistes Honda, Acura, BMW et Mercedes. Diagnostics électroniques de pointe, réparations fiables, équipe formée en continu pour sublimer votre véhicule.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="tel:4504701333" className="bg-[#E3000F] hover:bg-red-700 text-white px-8 py-4 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group rounded-sm shadow-[0_0_20px_rgba(227,0,15,0.4)] hover:shadow-[0_0_30px_rgba(227,0,15,0.6)] cursor-pointer">
              Appeler maintenant
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="#services" className="bg-zinc-900/40 backdrop-blur-md border border-zinc-700 hover:border-[#E3000F] hover:bg-zinc-900/80 text-white px-8 py-4 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 rounded-sm cursor-pointer group">
              Voir nos services
              <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "25+", label: "Ans d'expérience" },
    { value: "4", label: "Marques spécialisées" },
    { value: "100%", label: "Transparence" },
    { value: "5★", label: "Avis Clients" },
  ];

  return (
    <section className="py-12 border-y border-zinc-900 bg-zinc-950 relative z-10 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E3000F]/5 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-900">
          {stats.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="text-center px-4 group cursor-default"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-[#E3000F] transition-colors duration-300">{stat.value}</div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Car className="w-8 h-8" />, title: "Voitures importées", desc: "Spécialistes Honda, Acura, BMW et Mercedes. Nous connaissons chaque modèle en profondeur pour un service précis.", span: "col-span-1 md:col-span-2 lg:col-span-2" },
    { icon: <Wrench className="w-8 h-8" />, title: "Moteur & transmission", desc: "Réparations complètes du moteur et transmission — diagnostics approfondis et pièces de haute qualité.", span: "col-span-1 border-t-0 md:border-t lg:border-t-0 border-l" },
    { icon: <Settings className="w-8 h-8" />, title: "Suspension & air", desc: "Inspection, ajustement et réparation de suspension pour un contrôle infaillible en toute saison.", span: "col-span-1" },
    { icon: <Gauge className="w-8 h-8" />, title: "Mise au point", desc: "Entretien préventif complet pour un véhicule au sommet de sa forme.", span: "col-span-1 md:col-span-2 border-l" },
    { icon: <Zap className="w-8 h-8" />, title: "Climatisation", desc: "Recharge, réparation et entretien pour un confort thermique absolu.", span: "col-span-1" },
    { icon: <Disc className="w-8 h-8" />, title: "Pneus et Mags", desc: "Vaste sélection de pneus de performance. Pose professionnelle sur place.", span: "col-span-1 md:col-span-2 border-l" },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-[#E3000F] uppercase tracking-widest mb-3 flex items-center gap-2"><span className="w-8 h-[2px] bg-[#E3000F]"></span>Notre expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1] drop-shadow-lg">Des services pour<br/>l'élite automobile</h3>
          </div>
          <a href="tel:4504701333" className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 group hover:text-[#E3000F] transition-colors cursor-pointer">
            Prendre rendez-vous <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 hover:bg-zinc-900 border-zinc-800 transition-all duration-300 group cursor-pointer ${service.span} border-b md:[&:nth-child(5)]:border-b-0 md:[&:nth-child(6)]:border-b-0`}
            >
              <div className="w-16 h-16 bg-zinc-950 rounded-sm flex items-center justify-center text-zinc-500 mb-8 group-hover:text-[#E3000F] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,0,15,0.2)] transition-all duration-300 border border-zinc-800 group-hover:border-[#E3000F]/30">
                {service.icon}
              </div>
              <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-[#E3000F] transition-colors">{service.title}</h4>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900/80 border-y border-zinc-800 relative overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold text-[#E3000F] uppercase tracking-widest mb-3 flex items-center gap-2"><span className="w-8 h-[2px] bg-[#E3000F]"></span>Confiance & Réputation</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-8 leading-[1]">À votre service depuis plus de 25 ans.</h3>
            <div className="space-y-6 text-zinc-300 text-lg font-light leading-relaxed">
              <p>
                Le garage Fast Tuning est un atelier de mécanique établi à Repentigny. Connu pour sa spécialité dans les voitures importées — Honda, Acura, BMW, Mercedes — nos maîtres mécaniciens abordent chaque véhicule avec une rigueur absolue.
              </p>
              <p className="pl-6 border-l-2 border-[#E3000F] italic text-zinc-400">
                "Notre atelier est équipé d'appareils de diagnostic de pointe. Nous sommes obsédés par les résultats, la transparence et le respect de votre machinerie."
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 pt-10 border-t border-zinc-800">
              <div className="group cursor-pointer">
                <div className="text-white font-black text-xl uppercase tracking-wide mb-2 group-hover:text-[#E3000F] transition-colors">Diagnostics honnêtes</div>
                <div className="text-sm text-zinc-400">Réparations essentielles, zéro compromis.</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-white font-black text-xl uppercase tracking-wide mb-2 group-hover:text-[#E3000F] transition-colors">Expertise pure</div>
                <div className="text-sm text-zinc-400">Formation continue sur les technologies importées.</div>
              </div>
            </div>
            
            <div className="mt-12">
              <a href="#contact" className="bg-transparent border border-zinc-700 hover:border-[#E3000F] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2 rounded-sm cursor-pointer group">
                Nous trouver sur la carte <MapPin className="w-4 h-4 group-hover:animate-bounce" />
              </a>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-sm overflow-hidden border border-zinc-800 shadow-2xl group"
            >
              <div className="aspect-[4/3] w-full">
                <img 
                  src="http://fasttuning.ca/wp-content/uploads/2021/10/fast_tuning_facade.jpg" 
                  alt="Fast Tuning Facade" 
                  className="w-full h-full object-cover grayscale-[0.8] hover:grayscale-0 transition-all duration-700 hover:scale-105 cursor-pointer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 pointer-events-none"></div>
            </motion.div>

            <motion.div 
              initial={{ rotate: -10, opacity: 0, x: 50 }}
              whileInView={{ rotate: 0, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-[#E3000F] p-8 hidden md:block rounded-sm shadow-[0_10px_40px_rgba(227,0,15,0.4)] z-20"
            >
              <div className="text-6xl font-black text-white mb-0 leading-none">25<span className="text-3xl">+</span></div>
              <div className="text-xs font-black text-white uppercase tracking-widest mt-2">Ans à Repentigny</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Promotions = () => {
  const offers = [
    {
      tag: "Populaire",
      icon: <Wrench className="w-8 h-8" />,
      title: "Changement d'huile synthétique",
      desc: "Huile synthétique complète avec filtre, inspection visuelle. Parfaitement adapté pour Honda, Acura, BMW et Mercedes.",
    },
    {
      tag: "En ce moment",
      icon: <Disc className="w-8 h-8" />,
      title: "Pneus 4 saisons & hiver",
      desc: "Vente et pose. Profitez de nos promotions saisonnières exclusives — appelez pour les offres sur mesure.",
    },
    {
      tag: "Service complet",
      icon: <Settings className="w-8 h-8" />,
      title: "Mise au point & inspection",
      desc: "Freins, suspension, fluides, filtres. Confiez-nous votre véhicule pour préparer la saison avec assurance.",
    }
  ];

  return (
    <section id="promotions" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#E3000F] uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <span className="w-12 h-[2px] bg-[#E3000F]"></span>
            Offres Exclusives
            <span className="w-12 h-[2px] bg-[#E3000F]"></span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">Services en vue</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              key={index} 
              className="bg-zinc-900/80 border border-zinc-800 p-8 relative overflow-hidden group hover:border-[#E3000F]/60 transition-all duration-300 rounded-sm hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(227,0,15,0.15)] flex flex-col"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-black bg-zinc-800 text-[#E3000F] px-3 py-1 uppercase tracking-widest rounded-sm">{offer.tag}</span>
                <div className="text-zinc-600 group-hover:text-[#E3000F] transition-colors">{offer.icon}</div>
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-wide mb-4 group-hover:text-white transition-colors">{offer.title}</h4>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed flex-grow">{offer.desc}</p>
              <a href="tel:4504701333" className="w-full bg-zinc-950 hover:bg-[#E3000F] text-white text-sm font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 transition-all duration-300 rounded-sm border border-zinc-800 hover:border-[#E3000F] cursor-pointer">
                <Phone className="w-4 h-4" /> Réserver
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="tel:4504701333" className="bg-[#E3000F] hover:bg-red-700 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-3 rounded-sm shadow-[0_0_20px_rgba(227,0,15,0.4)] cursor-pointer hover:shadow-[0_0_30px_rgba(227,0,15,0.6)] group">
            Parler à nos experts <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "Ça fait 10 ans que j'amène ma BMW chez Fast Tuning. Toujours honnêtes, toujours bien fait. Pas de surprises sur la facture. Je recommande à tous.",
      name: "Marc-André L.",
      vehicle: "BMW M3",
      img: 10,
    },
    {
      text: "J'ai une Acura TLX et c'est le seul atelier où je fais confiance. Ils connaissent les voitures importées comme personne d'autre à Repentigny.",
      name: "Sophie T.",
      vehicle: "Acura TLX",
      img: 20,
    },
    {
      text: "Rapide, professionnel et transparent. Mon Honda a eu un problème de transmission et ils ont réglé ça avec précision. Excellent !",
      name: "Jonathan R.",
      vehicle: "Honda Civic Type R",
      img: 30,
    },
  ];

  return (
    <section className="py-24 bg-zinc-900/50 border-t border-zinc-800 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#E3000F] uppercase tracking-widest mb-3">Témoignages</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Ils nous font confiance</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-zinc-950 p-8 border border-zinc-800 hover:border-zinc-700 transition-colors rounded-sm shadow-xl"
            >
              <div className="flex text-[#E3000F] mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-300 text-base leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden border-2 border-zinc-800">
                  <img src={`https://i.pravatar.cc/150?img=${review.img}`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-black text-sm uppercase tracking-wide">{review.name}</div>
                  <div className="text-[#E3000F] text-xs font-bold uppercase tracking-wider mt-1">{review.vehicle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-zinc-900 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E3000F] to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="https://fasttuning.ca/wp-content/uploads/2021/09/fast_tuning_logo_accueil.png" 
                alt="Fast Tuning" 
                className="h-12 w-auto" 
              />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
              Atelier de mécanique spécialisé en voitures importées. La performance et le style à Repentigny depuis plus de 25 ans.
            </p>
            <div className="flex gap-4">
              <a href="https://fr-ca.facebook.com/fast.tuning.inc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#E3000F] transition-all duration-300 rounded-sm cursor-pointer shadow-lg">
                <span className="font-bold text-xs uppercase tracking-widest">FB</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6 text-sm">Nous joindre</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-zinc-400 text-sm group cursor-pointer">
                <div className="p-2 bg-zinc-900 rounded-sm group-hover:bg-[#E3000F]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#E3000F]" />
                </div>
                <span className="group-hover:text-white transition-colors mt-1">223 Rue Notre-Dame<br/>Repentigny, QC, J6A 2R4</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-400 text-sm group cursor-pointer">
                <div className="p-2 bg-zinc-900 rounded-sm group-hover:bg-[#E3000F]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#E3000F]" />
                </div>
                <a href="tel:4504701333" className="group-hover:text-white hover:underline transition-colors">450 470-1333</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6 text-sm">Heures d'ouverture</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-zinc-400 text-sm">
                <div className="p-2 bg-zinc-900 rounded-sm">
                  <Clock className="w-5 h-5 text-[#E3000F]" />
                </div>
                <div className="mt-1">
                  <div className="flex justify-between w-48 mb-2 border-b border-zinc-800 pb-2">
                    <span>Lundi — Vendredi</span>
                    <span className="text-white font-bold ml-2">8h00 — 17h00</span>
                  </div>
                  <div className="flex justify-between w-48 mb-2">
                    <span>Samedi</span>
                    <span className="text-[#E3000F] font-bold ml-2">Fermé</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span>Dimanche</span>
                    <span className="text-[#E3000F] font-bold ml-2">Fermé</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6 text-sm">Action Rapide</h4>
            <p className="text-zinc-500 text-sm mb-6 font-light">Un problème ou un projet en tête pour votre véhicule ? Nos maîtres mécaniciens répondent présent.</p>
            <a href="tel:4504701333" className="bg-[#E3000F] hover:bg-red-700 text-white px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-3 w-full justify-center rounded-sm cursor-pointer shadow-[0_0_15px_rgba(227,0,15,0.3)] hover:shadow-[0_0_25px_rgba(227,0,15,0.5)]">
              <Phone className="w-4 h-4" /> 450 470-1333
            </a>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Fast Tuning Inc. — Repentigny, QC.
          </p>
          <div className="flex gap-6 text-zinc-600 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Termes</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-[#E3000F] selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Promotions />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
