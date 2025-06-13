
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Play, TrendingUp, Zap, Smartphone } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Play,
      titleKey: 'liveStreaming',
      descKey: 'liveStreamingDesc',
      gradient: 'from-primary to-accent',
    },
    {
      icon: TrendingUp,
      titleKey: 'bestOdds',
      descKey: 'bestOddsDesc',
      gradient: 'from-accent to-cyan-500',
    },
    {
      icon: Zap,
      titleKey: 'quickPayouts',
      descKey: 'quickPayoutsDesc',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Smartphone,
      titleKey: 'mobileApp',
      descKey: 'mobileAppDesc',
      gradient: 'from-blue-400 to-indigo-500',
    },
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('whyChooseSpinBetter')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('featuresDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-card/60 border-primary/30 hover:border-primary/60 transition-all duration-300 h-full backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(feature.descKey)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-card/60 rounded-lg border border-primary/30"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              $<AnimatedCounter end={10} suffix="M+" />
            </div>
            <div className="text-sm text-muted-foreground">
              {t('dailyVolume')}
            </div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-card/60 rounded-lg border border-primary/30"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div className="text-sm text-muted-foreground">
              {t('countries')}
            </div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-card/60 rounded-lg border border-primary/30"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              {t('support')}
            </div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-card/60 rounded-lg border border-primary/30"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              <AnimatedCounter end={99} suffix=".9%" />
            </div>
            <div className="text-sm text-muted-foreground">
              {t('uptime')}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
