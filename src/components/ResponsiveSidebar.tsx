
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Menu, Home, Phone, User, Gamepad2, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';

interface ResponsiveSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> = ({ isOpen, onToggle }) => {
  const { t } = useTranslation();

  const menuItems = [
    { icon: Home, label: t('home'), href: '#home' },
    { icon: Trophy, label: t('sports'), href: '#sports' },
    { icon: Gamepad2, label: t('casino'), href: '#casino' },
    { icon: Star, label: t('features'), href: '#features' },
    { icon: User, label: t('about'), href: '#about' },
    { icon: Phone, label: t('contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onToggle();
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Only visible on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-card to-secondary z-50 shadow-2xl border-r border-teal-400/20 md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-teal-400/20">
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(20, 184, 166, 0.3)",
                      "0 0 30px rgba(20, 184, 166, 0.6)",
                      "0 0 20px rgba(20, 184, 166, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <span className="text-slate-900 font-bold text-xl">S</span>
                </motion.div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Spinbetter
                </h2>
              </div>
              <Button
                onClick={onToggle}
                variant="ghost"
                size="sm"
                className="text-teal-400 hover:bg-teal-400/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Language Selector */}
            <div className="p-4 border-b border-teal-400/20">
              <LanguageSelector />
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-left text-foreground hover:bg-teal-400/20 hover:text-teal-400 transition-all duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-center text-sm text-muted-foreground">
                <p>{t('footerDesc')}</p>
                <p className="mt-2 text-teal-400">© 2024 Spinbetter</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveSidebar;
