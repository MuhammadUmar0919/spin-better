
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Country, State, City } from 'country-state-city';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');

  const schema = z.object({
    username: z.string().min(2, t('usernameMin')).nonempty(t('usernameRequired')),
    email: z.string().email(t('emailInvalid')).nonempty(t('emailRequired')),
    phone: z.string().min(10, t('phoneInvalid')).nonempty(t('phoneRequired')),
    country: z.string().nonempty(t('countryRequired')),
    city: z.string().nonempty(t('cityRequired')),
    message: z.string().min(10, t('messageMin')).nonempty(t('messageRequired')),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const watchCountry = watch('country');

  useEffect(() => {
    if (watchCountry) {
      const countryStates = State.getStatesOfCountry(watchCountry);
      const countryCities = City.getCitiesOfCountry(watchCountry);
      setCities(countryCities || []);
    }
  }, [watchCountry]);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const message = `
New Contact Form Submission:
Username: ${data.username}
Email: ${data.email}
Phone: ${data.phone}
Country: ${Country.getCountryByCode(data.country)?.name}
City: ${data.city}
Message: ${data.message}
      `;

      console.log('Sending to Telegram:', message);
      
      toast.success(t('messageSent'));
      reset();
      setPhoneValue('');
    } catch (error) {
      toast.error(t('messageError'));
    } finally {
      setIsLoading(false);
    }
  };

  const countries = Country.getAllCountries();

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            {t('contactTitle')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contactDesc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-400">{t('getInTouch')}</h3>
              <p className="text-muted-foreground mb-8">
                {t('contactSupport')}
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: t('email'), value: 'support@spinbetter.com', href: 'mailto:support@spinbetter.com' },
                { icon: Phone, title: t('phone'), value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: MapPin, title: t('address'), value: '123 Gaming Street, Casino City', href: '#' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg border border-teal-400/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-400">{item.title}</h4>
                    <a href={item.href} className="text-muted-foreground hover:text-teal-400 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-teal-400/20">
              <CardHeader>
                <CardTitle className="text-center text-teal-400">{t('sendMessage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Username */}
                  <div>
                    <Label htmlFor="username" className="text-teal-400">{t('username')}</Label>
                    <Input
                      id="username"
                      {...register('username')}
                      placeholder={t('username')}
                      className="bg-slate-900/50 border-teal-400/30 focus:border-teal-400 text-white"
                    />
                    {errors.username && (
                      <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-teal-400">{t('email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder={t('email')}
                      className="bg-slate-900/50 border-teal-400/30 focus:border-teal-400 text-white"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-teal-400">{t('phone')}</Label>
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="UZ"
                      value={phoneValue}
                      onChange={(value) => {
                        setPhoneValue(value || '');
                        setValue('phone', value || '');
                      }}
                      className="phone-input-custom"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <Label htmlFor="country" className="text-teal-400">{t('country')}</Label>
                    <Select onValueChange={(value) => setValue('country', value)}>
                      <SelectTrigger className="bg-slate-900/50 border-teal-400/30 focus:border-teal-400 text-white">
                        <SelectValue placeholder={t('selectCountry')} />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-teal-400/30 max-h-60">
                        {countries.map((country) => (
                          <SelectItem key={country.isoCode} value={country.isoCode} className="text-white hover:bg-teal-400/20">
                            {country.flag} {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.country && (
                      <p className="text-red-400 text-sm mt-1">{errors.country.message}</p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <Label htmlFor="city" className="text-teal-400">{t('city')}</Label>
                    <Select onValueChange={(value) => setValue('city', value)} disabled={!watchCountry}>
                      <SelectTrigger className="bg-slate-900/50 border-teal-400/30 focus:border-teal-400 text-white">
                        <SelectValue placeholder={t('selectCity')} />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-teal-400/30 max-h-60">
                        {cities.map((city) => (
                          <SelectItem key={city.name} value={city.name} className="text-white hover:bg-teal-400/20">
                            {city.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.city && (
                      <p className="text-red-400 text-sm mt-1">{errors.city.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-teal-400">{t('message')}</Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder={t('message')}
                      rows={5}
                      className="bg-slate-900/50 border-teal-400/30 focus:border-teal-400 text-white resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-slate-900 font-semibold"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                        {t('sending')}
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        {t('send')}
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
