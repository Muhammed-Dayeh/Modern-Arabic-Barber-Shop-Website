'use client'

import React from 'react'
import Image from 'next/image'
import { Scissors, Star, Clock, MapPin } from 'lucide-react'

interface HomePageProps {
  onNavigate: (page: string) => void
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <Scissors className="h-8 w-8 text-amber-400" />,
      title: 'قصات احترافية',
      titleEn: 'Professional Cuts',
      description: 'قصات شعر عصرية بأيدي خبراء متخصصين',
    },
    {
      icon: <Star className="h-8 w-8 text-amber-400" />,
      title: 'جودة عالية',
      titleEn: 'Premium Quality',
      description: 'أفضل المنتجات والأدوات المستوردة',
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-400" />,
      title: 'مواعيد مرنة',
      titleEn: 'Flexible Hours',
      description: 'مفتوح يومياً من 9 صباحاً حتى 10 مساءً',
    },
    {
      icon: <MapPin className="h-8 w-8 text-amber-400" />,
      title: 'موقع مميز',
      titleEn: 'Prime Location',
      description: 'في قلب المدينة مع مواقف سيارات متوفرة',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="صالون الملك"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            صالون الملك
            <span className="block text-2xl md:text-3xl text-amber-400 mt-2 font-normal">
              للحلاقة الرجالية الفاخرة
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            تجربة حلاقة استثنائية في أجواء ملكية مع أفضل الحلاقين المحترفين
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('booking')}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              احجز موعدك الآن
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              اطلع على الخدمات
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">لماذا تختار صالون الملك؟</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              نقدم لك أفضل تجربة حلاقة في المدينة مع الاهتمام بكل التفاصيل
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            جاهز للحصول على إطلالة ملكية؟
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            احجز موعدك الآن واحصل على أفضل قصة شعر في المدينة
          </p>
          <button
            onClick={() => onNavigate('booking')}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            احجز الآن - خصم 20% للعملاء الجدد
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage