
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Play, TrendingUp, Shield, Zap, Zap as Soccer, Target, Trophy, Gamepad2 } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <TrendingUp className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">{t('freeBets')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              {t('heroTitle')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg lg:max-w-none"
            >
              {t('heroSubtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                {t('joinNow')}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10 text-primary transform hover:scale-105 transition-all duration-300"
              >
                <Shield className="w-5 h-5 mr-2" />
                {t('learnMore')}
              </Button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter end={10} suffix="M+" />
                </div>
                <div className="text-sm text-muted-foreground">{t('activeUsers')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">{t('sportsCount')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter end={99} suffix=".9%" />
                </div>
                <div className="text-sm text-muted-foreground">{t('uptime')}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Sports Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Soccer, name: t('football'), odds: '2.5x' },
                  { icon: Target, name: t('basketball'), odds: '1.8x' },
                  { icon: Trophy, name: t('tennis'), odds: '3.2x' },
                  { icon: Gamepad2, name: t('iceHockey'), odds: '2.1x' },
                ].map((sport, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="bg-card/60 p-4 rounded-lg border border-primary/30 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 mb-2 text-primary">
                      <sport.icon className="w-full h-full" />
                    </div>
                    <div className="text-sm font-medium text-primary">{sport.name}</div>
                    <div className="text-xs text-accent font-bold">{sport.odds}</div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-background" />
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center"
              >
                <span className="text-background font-bold">$</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
