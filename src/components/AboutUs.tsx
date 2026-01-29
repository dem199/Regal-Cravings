import { motion } from 'framer-motion';
import { Utensils, Clock, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export const AboutUs = () => {
  const features = [
    {
      icon: <Utensils className="text-orange-600" size={24} />,
      title: "Royal Quality",
      desc: "Every meal is prepared with premium ingredients and traditional recipes passed down through generations."
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: "Swift Delivery",
      desc: "Hot and fresh delicacies delivered to your doorstep in record time, ensuring maximum freshness."
    },
    {
      icon: <ShieldCheck className="text-orange-600" size={24} />,
      title: "Hygienic Prep",
      desc: "Our kitchens follow world-class health and safety standards, certified and regularly inspected."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-32 pb-20 max-w-4xl mx-auto px-6"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black italic text-slate-900 mb-6 leading-tight">
          THE ART OF <span className="text-orange-600 underline decoration-4">CRAVING</span>
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
          At Regal Cravings, we believe food isn't just fuel—it's an experience, 
          a celebration, and a journey. Founded in the heart of Lagos, our mission 
          is to bring the luxury of a 5-star kitchen to the comfort of your home.
        </p>
      </motion.div>

      {/* Feature Grid */}
      <motion.div 
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8 mb-20"
      >
        {features.map((f, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
          >
            <motion.div 
              whileHover={{ rotate: 12 }}
              className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
            >
              {f.icon}
            </motion.div>
            <h3 className="font-bold text-slate-900 mb-2 text-lg">{f.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Story Section */}
      <motion.div 
        variants={itemVariants}
        className="bg-gradient-to-br from-orange-50 to-white rounded-[3rem] p-10 mb-20 border border-orange-100"
      >
        <h2 className="text-3xl font-black mb-4 text-slate-900">Our Story</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Founded in 2020, Regal Cravings emerged from a simple idea: authentic 
            Nigerian cuisine deserves to be accessible, convenient, and consistently 
            excellent. What started as a small kitchen operation has grown into 
            Lagos's most trusted food delivery service.
          </p>
          <p>
            Our chef-driven approach ensures every dish meets the highest standards. 
            We source ingredients from local farmers and suppliers who share our 
            commitment to quality. From our signature Jollof Rice to our rich 
            Egusi Soup, each recipe tells a story of tradition and innovation.
          </p>
        </div>
      </motion.div>

      {/* Contact Card */}
      <motion.div 
        variants={itemVariants}
        className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-6">Find Our Kitchen</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-slate-300 font-medium">Lekki Phase 1, Lagos, Nigeria</p>
                <p className="text-slate-400 text-sm mt-1">Behind Landmark Centre</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-orange-500 flex-shrink-0" size={20} />
              <span className="text-slate-300 font-medium">Open Daily: 08:00 AM - 10:00 PM</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-orange-500 flex-shrink-0" size={20} />
              <span className="text-slate-300 font-medium">+234 (0) 802 345 6789</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500 flex-shrink-0" size={20} />
              <span className="text-slate-300 font-medium">hello@regalcravings.ng</span>
            </div>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Footer */}
      <motion.footer 
        variants={itemVariants}
        className="mt-20 text-center"
      >
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          &copy; 2026 Regal Cravings | Developed by Opeyemi Olatunbosun
        </p>
      </motion.footer>
    </motion.main>
  );
};