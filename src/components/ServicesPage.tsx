'use client'

import React from 'react'
import { Scissors, Zap, Sparkles, Crown } from 'lucide-react'

interface ServicesPageProps {
  onNavigate: (page: string) => void
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const services = [
    {
      category: 'قصات الشعر',
      categoryEn: 'Hair Cuts',
      icon: <Scissors className="h-8 w-8 text-amber-400" />,
      items: [
        { name: 'قصة كلاسيكية', nameEn: 'Classic Cut', description: 'قصة تقليدية أنيقة ومناسبة لجميع المناسبات', price: 80 },
        { name: 'قصة عصرية', nameEn: 'Modern Cut', description: 'قصات حديثة تواكب أحدث الصيحات العالمية', price: 100 },
        { name: 'قصة فيد', nameEn: 'Fade Cut', description: 'قصة متدرجة بتقنية الفيد المحترفة', price: 120 },
        { name: 'قصة الأطفال', nameEn: 'Kids Cut', description: 'قصات مخصصة للأطفال في بيئة مريحة', price: 60 },
      ],
    },
    {
      category: 'تهذيب اللحية',
      categoryEn: 'Beard Grooming',
      icon: <Crown className="h-8 w-8 text-amber-400" />,
      items: [
        { name: 'تهذيب اللحية', nameEn: 'Beard Trim', description: 'تهذيب وتشكيل اللحية بالطريقة المثلى', price: 50 },
        { name: 'حلاقة كاملة', nameEn: 'Full Shave', description: 'حلاقة كاملة بالموس مع التدليك المهدئ', price: 70 },
        { name: 'تهذيب الشارب', nameEn: 'Mustache Trim', description: 'تهذيب الشارب بدقة وإتقان', price: 30 },
        { name: 'حلاقة ملكية', nameEn: 'Royal Shave', description: 'حلاقة فاخرة مع العناية الكاملة والتدليك', price: 150 },
      ],
    },
    {
      category: 'العناية والتجميل',
      categoryEn: 'Grooming & Beauty',
      icon: <Sparkles className="h-8 w-8 text-amber-400" />,
      items: [
        { name: 'قناع الوجه', nameEn: 'Face Mask', description: 'قناع مغذي ومنظف للبشرة', price: 80 },
        { name: 'تنظيف البشرة', nameEn: 'Facial Cleansing', description: 'تنظيف عميق للبشرة مع الترطيب', price: 100 },
        { name: 'علاج الشعر', nameEn: 'Hair Treatment', description: 'علاج مكثف لتقوية وتغذية الشعر', price: 120 },
        { name: 'تدليك الرأس', nameEn: 'Head Massage', description: 'تدليك مريح للرأس والرقبة', price: 60 },
      ],
    },
    {
      category: 'الباقات الخاصة',
      categoryEn: 'Special Packages',
      icon: <Zap className="h-8 w-8 text-amber-400" />,
      items: [
        { name: 'باقة الملك', nameEn: 'King Package', description: 'قصة + لحية + تنظيف بشرة + تدليك', price: 250 },
        { name: 'باقة الأمير', nameEn: 'Prince Package', description: 'قصة + لحية + قناع وجه', price: 180 },
        { name: 'باقة العريس', nameEn: 'Groom Package', description: 'إعداد كامل للعريس مع العناية الفاخرة', price: 300 },
        { name: 'باقة VIP', nameEn: 'VIP Package', description: 'جميع الخدمات مع مشروبات وحلويات', price: 400 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">خدماتنا</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات الحلاقة والتجميل الرجالية بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-8">
                {category.icon}
                <h2 className="text-3xl font-bold text-white mr-4">{category.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-slate-900/50 rounded-xl p-6 border border-slate-600 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <span className="text-2xl font-bold text-amber-400">{service.price} ريال</span>
                    </div>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <button
                      onClick={() => onNavigate('booking')}
                      className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2 rounded-lg font-semibold transition-colors w-full"
                    >
                      احجز الآن
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              هل تريد استشارة مجانية؟
            </h2>
            <p className="text-xl text-slate-800 mb-6">
              تواصل معنا للحصول على استشارة مجانية حول أفضل الخدمات المناسبة لك
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              اتصل بنا الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage