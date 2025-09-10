import React, { useState } from 'react';
import { Play, Instagram, Twitter, Youtube, Mail, User, Palette, Zap, TrendingUp, Star, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Play className="w-8 h-8" />,
    title: "YouTube & Social Media",
    description: "Professional editing for YouTube videos, Instagram reels, and TikTok shorts",
    features: ["Gaming Content", "Beauty & Lifestyle", "Documentary Style"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Anime & Gaming",
    description: "High-energy AMVs, gaming montages, and esports content",
    features: ["AMV Creation", "Gaming Highlights", "Montage Videos"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Brand & Marketing",
    description: "Logo animations, promotional content, and brand videos",
    features: ["Logo Animations", "Promo Videos", "Brand Content"]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "SMMA Services",
    description: "Complete social media management and advertising solutions",
    features: ["Ad Management", "Content Strategy", "Profile Management"]
  }
];

const portfolioItems = [
  {
    id: 1,
    title: "Gaming Montage - Valorant",
    category: "Gaming",
    thumbnail: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "2:34"
  },
  {
    id: 2,
    title: "Beauty Routine Reel",
    category: "Beauty",
    thumbnail: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "0:45"
  },
  {
    id: 3,
    title: "Anime AMV - Attack on Titan",
    category: "Anime",
    thumbnail: "https://images.pexels.com/photos/3693041/pexels-photo-3693041.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "3:12"
  },
  {
    id: 4,
    title: "Brand Logo Animation",
    category: "Animation",
    thumbnail: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "0:15"
  },
  {
    id: 5,
    title: "Documentary Short",
    category: "Documentary",
    thumbnail: "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "5:47"
  },
  {
    id: 6,
    title: "Discord Shop GIF",
    category: "Animation",
    thumbnail: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "0:08"
  }
];

const pricingPlans = [
  {
    name: "Basic Edit",
    price: "$25",
    description: "Perfect for simple projects",
    features: [
      "Basic cuts and transitions",
      "Color correction",
      "Audio sync",
      "Up to 5 minutes",
      "2 revisions"
    ]
  },
  {
    name: "Professional",
    price: "$75",
    description: "Advanced editing with effects",
    features: [
      "Advanced transitions",
      "Motion graphics",
      "Color grading",
      "Audio enhancement",
      "Up to 15 minutes",
      "5 revisions"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "$150",
    description: "Complete video production",
    features: [
      "Full production pipeline",
      "Custom animations",
      "Professional color grade",
      "Sound design",
      "Unlimited length",
      "Unlimited revisions"
    ]
  },
  {
    name: "Custom",
    price: "Quote",
    description: "Tailored to your budget",
    features: [
      "Budget-friendly options",
      "Flexible scope",
      "Custom requirements",
      "Negotiable timeline",
      "Pay as you go"
    ]
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });

  const categories = ['All', 'Gaming', 'Beauty', 'Anime', 'Animation', 'Documentary'];
  
  const filteredPortfolio = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', project: '', budget: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526] text-white overflow-x-hidden">
    <div className="min-h-screen bg-gradient-to-br from-[#23140C] via-[#91040C] to-[#23140C] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#23140C] via-[#91040C] to-[#23140C] animate-gradient-shift"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-glow-float"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 25}s`,
                background: `radial-gradient(circle, ${Math.random() > 0.5 ? '#D0BA98' : '#91040C'}80, transparent)`,
                boxShadow: `0 0 ${4 + Math.random() * 8}px ${Math.random() > 0.5 ? '#D0BA98' : '#91040C'}40`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#D0BA98] to-[#91040C] bg-clip-text text-transparent">
            Aelricon Productions
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#D0BA98] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#D0BA98] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#D0BA98] transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-[#D0BA98] transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-[#D0BA98] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[#D0BA98] to-[#91040C] bg-clip-text text-transparent animate-fade-in">
            Aelricon Productions
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Premium Video Editor & SMMA Specialist
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto">
            Transforming your vision into captivating content. From viral social media videos to comprehensive social media management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-gradient-to-r from-[#91040C] to-[#23140C] rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#91040C]/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-[#91040C] rounded-lg font-semibold hover:bg-[#91040C]/10 transition-colors duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#D0BA98] to-[#91040C] bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#23140C]/80 to-[#91040C]/20 p-8 rounded-xl backdrop-blur-sm border border-[#D0BA98]/20 hover:border-[#91040C]/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-[#D0BA98] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#D0BA98] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#D0BA98] to-[#91040C] bg-clip-text text-transparent">
            Portfolio
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#91040C] to-[#23140C] text-white shadow-lg shadow-[#91040C]/25'
                    : 'bg-[#23140C]/50 text-gray-300 hover:bg-[#23140C]/70 border border-[#D0BA98]/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#23140C]/80 to-[#91040C]/20 backdrop-blur-sm border border-[#D0BA98]/20 hover:border-[#91040C]/50 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-[#91040C]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded text-sm font-medium">
                    {item.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-[#91040C]/90 px-3 py-1 rounded text-sm font-medium">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">Click to preview</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#D0BA98] to-[#91040C] bg-clip-text text-transparent">
            Pricing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-[#23140C]/80 to-[#91040C]/20 p-8 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-[#91040C]/50 shadow-lg shadow-[#91040C]/25'
                    : 'border-[#D0BA98]/20 hover:border-[#91040C]/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#91040C] to-[#23140C] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-[#D0BA98] mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-[#D0BA98] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#91040C] to-[#23140C] text-white hover:shadow-lg hover:shadow-[#91040C]/25'
                    : 'bg-[#23140C]/50 text-gray-300 hover:bg-[#23140C]/70 border border-[#D0BA98]/30'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#D0BA98] to-[#91040C] bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#23140C]/80 to-[#91040C]/20 p-8 rounded-xl backdrop-blur-sm border border-[#D0BA98]/20">
              <h3 className="text-2xl font-bold mb-6">Get a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#23140C]/50 border border-[#D0BA98]/30 rounded-lg focus:outline-none focus:border-[#91040C] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#23140C]/50 border border-[#D0BA98]/30 rounded-lg focus:outline-none focus:border-[#91040C] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#23140C]/50 border border-[#D0BA98]/30 rounded-lg focus:outline-none focus:border-[#91040C] transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="youtube">YouTube Video</option>
                    <option value="social">Social Media Content</option>
                    <option value="anime">Anime AMV</option>
                    <option value="gaming">Gaming Content</option>
                    <option value="animation">Logo Animation</option>
                    <option value="smma">SMMA Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#23140C]/50 border border-[#D0BA98]/30 rounded-lg focus:outline-none focus:border-[#91040C] transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="25-50">$25 - $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-250">$100 - $250</option>
                    <option value="250+">$250+</option>
                    <option value="custom">Custom/Negotiable</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#23140C]/50 border border-[#D0BA98]/30 rounded-lg focus:outline-none focus:border-[#91040C] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#91040C] to-[#23140C] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#91040C]/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#23140C]/80 to-[#91040C]/20 p-8 rounded-xl backdrop-blur-sm border border-[#D0BA98]/20">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#D0BA98]" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-400">4rm4xn@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Instagram className="w-6 h-6 text-[#D0BA98]" />
                    <div>
                      <div className="font-semibold">Instagram</div>
                      <div className="text-gray-400">@4rm4xn</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Twitter className="w-6 h-6 text-[#D0BA98]" />
                    <div>
                      <div className="font-semibold">Twitter</div>
                      <div className="text-gray-400">@4rm4xn</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <User className="w-6 h-6 text-[#D0BA98]" />
                    <div>
                      <div className="font-semibold">Discord</div>
                      <div className="text-gray-400">@4rm4xn</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Youtube className="w-6 h-6 text-[#D0BA98]" />
                    <div>
                      <div className="font-semibold">YouTube</div>
                      <a 
                        href="https://www.youtube.com/@rx3ze_zt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#D0BA98] transition-colors"
                      >
                        @rx3ze_zt
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#23140C]/80 to-[#91040C]/20 p-8 rounded-xl backdrop-blur-sm border border-[#D0BA98]/20">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-gray-400 mb-4">
                  I typically respond to all inquiries within 24 hours. For urgent projects, feel free to reach out on Discord for faster communication.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#D0BA98]">
                  <div className="w-2 h-2 bg-[#D0BA98] rounded-full animate-pulse"></div>
                  Available for new projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#D0BA98] to-[#91040C] bg-clip-text text-transparent">
            Aelricon Productions
          </div>
          <p className="text-gray-400 mb-6">
            Premium Video Editing & SMMA Services
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Aelricon Productions. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(-15px) rotate(240deg); }
        }

        @keyframes glow-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-40px) translateX(20px) scale(1.2);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-20px) translateX(-15px) scale(0.8);
            opacity: 0.5;
          }
          75% { 
            transform: translateY(-60px) translateX(30px) scale(1.1);
            opacity: 0.9;
          }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-glow-float {
          animation: glow-float linear infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
    </div>
  );
}

export default App;