
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Award, Users, Globe } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const AboutSection = () => {
  const { t } = useTranslation();

  const achievements = [
    { icon: Shield, value: 256, label: t('sslEncryption'), suffix: '-bit' },
    { icon: Award, value: 5, label: t('industryLeader'), suffix: ' Years' },
    { icon: Users, value: 10, label: t('satisfiedUsers'), suffix: 'M+' },
    { icon: Globe, value: 50, label: t('countriesServed'), suffix: '+' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {t('aboutTitle')}
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {t('aboutDesc')}
            </p>
            
            <div className="space-y-4">
              {[
                t('licensedPlatform'),
                t('advancedSecurity'),
                t('fairGaming'),
                t('responsibleGaming'),
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-slate-800/60 p-8 rounded-2xl border border-emerald-400/30 relative backdrop-blur-sm">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center"
              >
                <Shield className="w-6 h-6 text-slate-900" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-6 text-emerald-300">{t('ourAchievements')}</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-slate-700/50 rounded-lg"
                  >
                    <achievement.icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-teal-300">
                      <AnimatedCounter 
                        end={achievement.value} 
                        suffix={achievement.suffix}
                      />
                    </div>
                    <div className="text-sm text-gray-400">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full opacity-20 blur-xl"
            ></motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 blur-xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
