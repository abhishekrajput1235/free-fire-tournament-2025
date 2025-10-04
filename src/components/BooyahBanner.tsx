import { motion } from 'framer-motion';
import { Flame, Zap, Target } from 'lucide-react';

const BooyahBanner = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-fire-gradient opacity-20" />
      <div className="absolute inset-0 bg-glow-gradient opacity-40" />

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Flame className="w-8 h-8 text-fire-500" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 sm:gap-8 mb-8"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 animate-pulse" />
            <Target className="w-12 h-12 sm:w-16 sm:h-16 text-fire-500 animate-float" />
            <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 animate-pulse" />
          </motion.div>

          <motion.h2
            className="text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block text-fire-gradient glow-text animate-pulse-glow">
              BOOYAH!
            </span>
          </motion.h2>

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-fire-gradient opacity-20 blur-3xl" />
            <div className="relative bg-black/80 backdrop-blur-sm border-4 border-fire-500 rounded-3xl p-8 sm:p-12 shadow-fire-glow-lg">
              <div className="mb-6">
                <div className="inline-block px-6 py-2 bg-fire-gradient rounded-full text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-fire-glow">
                  Battle Anthem
                </div>
              </div>

              <blockquote className="space-y-4">
                <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Squad – Battle of Equality!
                </p>
                <p className="text-xl sm:text-3xl lg:text-4xl font-bold text-fire-400 leading-tight">
                  Winner is the Champion!
                </p>
              </blockquote>

              <div className="mt-8 flex justify-center gap-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-fire-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { label: 'Fair Play', icon: Target },
              { label: 'Pure Skills', icon: Zap },
              { label: 'Glory Awaits', icon: Flame },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-black/60 backdrop-blur-sm border-2 border-fire-600/50 rounded-xl p-6 hover:border-fire-500 hover:shadow-fire-glow transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <IconComponent className="w-10 h-10 text-fire-500 mx-auto mb-3" />
                  <p className="text-lg sm:text-xl font-bold text-white">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BooyahBanner;
