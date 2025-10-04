import { motion } from 'framer-motion';
import { Calendar, Clock, Users, DollarSign, Trophy, Gamepad2, Award, User } from 'lucide-react';

const EventDetails = () => {
  const details = [
    {
      icon: User,
      label: 'Organizer',
      value: 'The Elimination Organiser',
      color: 'text-fire-500',
    },
    {
      icon: Users,
      label: 'Mode',
      value: 'Squad',
      color: 'text-yellow-400',
    },
    {
      icon: DollarSign,
      label: 'Entry Fee',
      value: '₹259 / Team',
      color: 'text-green-400',
    },
    {
      icon: Trophy,
      label: 'Reward',
      value: '₹1499',
      subtext: '(if 10 teams participate)',
      color: 'text-yellow-500',
    },
    {
      icon: Calendar,
      label: 'Date',
      value: '07/10/2025',
      color: 'text-fire-400',
    },
    {
      icon: Clock,
      label: 'Time',
      value: '8:00 PM',
      color: 'text-fire-300',
    },
    {
      icon: Gamepad2,
      label: 'Platform',
      value: 'Free Fire',
      subtext: '(Via Custom)',
      color: 'text-fire-500',
    },
    {
      icon: Award,
      label: 'Special',
      value: 'MVP Rewards',
      subtext: 'For top performers',
      color: 'text-yellow-400',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-gradient opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-4">
            <span className="text-fire-gradient glow-text">Event Details</span>
          </h2>
          <div className="h-1 w-32 bg-fire-gradient mx-auto rounded-full shadow-fire-glow" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {details.map((detail, idx) => {
            const IconComponent = detail.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                className="group relative bg-black/60 backdrop-blur-sm border-2 border-fire-600/30 rounded-2xl p-6 hover:border-fire-500 transition-all duration-300 hover:shadow-fire-glow hover:scale-105"
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-fire-gradient opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`w-10 h-10 ${detail.color}`} />
                    <div className="w-10 h-10 bg-fire-600/20 rounded-full flex items-center justify-center group-hover:bg-fire-600/40 transition-colors">
                      <div className="w-2 h-2 bg-fire-500 rounded-full animate-pulse" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      {detail.label}
                    </h3>
                    <p className="text-xl sm:text-2xl font-bold text-white">
                      {detail.value}
                    </p>
                    {detail.subtext && (
                      <p className="text-xs text-gray-500 mt-1">
                        {detail.subtext}
                      </p>
                    )}
                  </div>
                </div>

                <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-fire-600/10 rounded-full blur-2xl group-hover:bg-fire-600/20 transition-colors" />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="inline-block bg-black/70 backdrop-blur-sm border-2 border-yellow-500/50 rounded-2xl p-8 shadow-fire-glow">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-float" />
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
              Special MVP Rewards
            </h3>
            <p className="text-gray-300 text-lg">
              Outstanding players will receive exclusive prizes!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
