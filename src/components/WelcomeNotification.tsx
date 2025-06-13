
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';

const WelcomeNotification = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    
    if (!hasSeenWelcome) {
      setTimeout(() => {
        toast.custom(
          (t) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-md mx-auto"
            >
              {/* Close button */}
              <button
                onClick={() => toast.dismiss(t)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Warning Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <AlertCircle className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <motion.h3
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl font-bold text-gray-900 mb-3"
                    >
                      FIRIBGARLARDAN EHTIYOT BO'LING!
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      Bizning menejerlarimiz hech qachon birinchi bo'lib hisobingizni to'ldirish taklifi bilan yozmaydi va faqat kiruvchi so'rovlar bilan ishlaydi!
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-red-500 to-orange-500"
              />
            </motion.div>
          ),
          {
            duration: 8000,
            position: 'top-center',
            style: {
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              width: '400px',
              maxWidth: '95vw'
            },
          }
        );
        localStorage.setItem('hasSeenWelcome', 'true');
      }, 2000);
    }
  }, [t]);

  return null;
};

export default WelcomeNotification;
