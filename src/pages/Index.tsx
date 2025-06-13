
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SportsSection from '@/components/SportsSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WelcomeNotification from '@/components/WelcomeNotification';
import LoadingSpinner from '@/components/LoadingSpinner';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  const { i18n, t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set document direction based on language
    const isRTL = i18n.language === 'ae';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center gradient-bg"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          {/* Updated Logo */}
          <motion.div 
            className="w-20 h-20 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl relative"
            animate={{ 
              boxShadow: [
                "0 0 30px rgba(16, 185, 129, 0.5)",
                "0 0 50px rgba(16, 185, 129, 0.8)",
                "0 0 30px rgba(16, 185, 129, 0.5)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="text-white font-bold text-3xl">
              S
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold mb-6">
            <span className="text-white mr-1">Spin</span>
            <span className="text-teal-400">better</span>
          </h1>
          <LoadingSpinner size="lg" />
          <p className="text-muted-foreground mt-6 text-lg">{t('loadingExperience')}</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen gradient-bg text-foreground"
      >
        <WelcomeNotification />
        <Navbar />
        
        <main>
          <section id="home">
            <HeroSection />
          </section>
          <section id="sports">
            <SportsSection />
          </section>
          <section id="features">
            <FeaturesSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </main>
        
        <Footer />
        <BackToTop />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
