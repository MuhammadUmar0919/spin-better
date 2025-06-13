
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  Target, 
  Trophy, 
  Gamepad2, 
  Crown, 
  Flame, 
  Star, 
  Sparkles,
  Dice1,
  Dices,
  MonitorPlay
} from 'lucide-react';

const SportsSection = () => {
  const { t } = useTranslation();

  const sports = [
    { key: 'football', icon: Zap, color: 'from-primary to-accent' },
    { key: 'basketball', icon: Target, color: 'from-orange-400 to-red-500' },
    { key: 'tennis', icon: Trophy, color: 'from-cyan-400 to-blue-500' },
    { key: 'iceHockey', icon: Gamepad2, color: 'from-blue-400 to-indigo-500' },
    { key: 'volleyball', icon: Crown, color: 'from-indigo-400 to-purple-500' },
    { key: 'tableTennis', icon: Flame, color: 'from-pink-400 to-rose-500' },
    { key: 'cricket', icon: Star, color: 'from-yellow-400 to-orange-500' },
    { key: 'americanFootball', icon: Sparkles, color: 'from-purple-400 to-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="sports" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('sports')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('sportsDesc')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {sports.map((sport, index) => (
            <motion.div
              key={sport.key}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-card/60 border-primary/30 hover:border-primary/60 transition-all duration-300 cursor-pointer group backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${sport.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <sport.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-primary group-hover:text-primary/80 transition-colors">
                    {t(sport.key)}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('liveBettingAvailable')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Game Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          id="casino"
        >
          {[
            { key: 'casino', icon: Dice1, desc: t('casinoDesc') },
            { key: 'liveCasino', icon: MonitorPlay, desc: t('liveCasinoDesc') },
            { key: 'esports', icon: Dices, desc: t('esportsDesc') },
          ].map((category, index) => (
            <motion.div
              key={category.key}
              whileHover={{ scale: 1.02 }}
              className="text-center p-8 bg-card/60 rounded-lg border border-primary/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{t(category.key)}</h3>
              <p className="text-muted-foreground">{category.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SportsSection;
