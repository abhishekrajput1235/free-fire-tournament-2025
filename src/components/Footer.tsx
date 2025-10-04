import { motion } from 'framer-motion';
import { Flame, Instagram, MessageCircle, ChevronUp, Shield } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: MessageCircle, label: 'Discord', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="relative py-12 sm:py-16 overflow-hidden border-t-2 border-fire-600/30">
      <div className="absolute inset-0 bg-glow-gradient opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Flame className="w-8 h-8 text-fire-500 animate-fire-flicker" />
              <h3 className="text-2xl font-black text-fire-gradient uppercase">
                Free Fire
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Join the ultimate Free Fire tournament and showcase your skills. Battle for glory, honor, and amazing rewards!
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
              Connect With Us
            </h4>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-black/50 border-2 border-fire-600/30 rounded-full flex items-center justify-center hover:border-fire-500 hover:shadow-fire-glow transition-all group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5 text-fire-400 group-hover:text-fire-300 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
              Event Info
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Date: October 7, 2025</p>
              <p>Time: 8:00 PM</p>
              <p>Mode: Squad (Custom Rooms)</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t-2 border-fire-600/30 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-fire-500" />
              <span>© 2025 The Elimination Organiser. All rights reserved.</span>
            </div>

            <div className="text-sm text-gray-400 text-center md:text-right max-w-md">
              <p className="mb-2 text-xs leading-relaxed">
                <span className="text-fire-400 font-semibold">Disclaimer:</span> This is an independent community tournament. All participants must follow Fair Play guidelines. Registration fees are non-refundable.
              </p>
            </div>
          </div>

          <motion.div className="mt-8 text-center">
            <p className="text-xs text-gray-500 mb-4">
              Built with passion for the Free Fire community
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-fire-gradient rounded-full shadow-fire-glow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </motion.button>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-fire-gradient opacity-50" />
    </footer>
  );
};

export default Footer;
