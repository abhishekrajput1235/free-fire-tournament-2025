import { motion } from 'framer-motion';
import { Flame, Trophy, ChevronDown, Target } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2025-10-07T20:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToRegistration = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdONbaHzCBiqT9KIjTD1bXry0JKhrDEqGGPlfu8aCRLmFl7pQ/viewform","_blank")
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-glow-gradient opacity-30 animate-pulse-glow" />

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-fire-500 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Flame className="w-12 h-12 sm:w-16 sm:h-16 text-fire-500 animate-fire-flicker" />
            <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400 animate-float" />
            <Flame className="w-12 h-12 sm:w-16 sm:h-16 text-fire-500 animate-fire-flicker" />
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="block text-fire-gradient glow-text">
              Free Fire
            </span>
            <span className="block text-white mt-2">
              Tournament 2025
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-fire-300 font-semibold max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Show your skill and become the winner!
          </motion.p>

          <motion.div
            className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-black/50 backdrop-blur-sm border-2 border-fire-600 rounded-lg p-4 shadow-fire-glow"
              >
                <div className="text-3xl sm:text-4xl font-bold text-fire-500">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.button
            onClick={scrollToRegistration}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 mt-8 text-lg sm:text-xl font-bold uppercase bg-fire-gradient rounded-full overflow-hidden shadow-fire-glow-lg transition-all hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-white">Register Now</span>
            <Flame className="w-6 h-6 text-white relative z-10 animate-fire-flicker" />
            <div className="absolute inset-0 bg-gradient-to-r from-fire-700 to-fire-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <motion.div
            className="mt-12 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-fire-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
