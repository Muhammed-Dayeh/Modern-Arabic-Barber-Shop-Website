'use client'

import React from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      nameEn: "Ahmed Mohammed",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "أفضل صالون حلاقة في المدينة! الخدمة ممتازة والحلاقين محترفين جداً. أنصح الجميع بالتجربة.",
      service: "باقة الملك"
    },
    {
      id: 2,
      name: "سعد العلي",
      nameEn: "Saad Al-Ali",
      rating: 5,
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "تجربة رائعة! الأجواء مريحة والنتيجة فوق التوقعات. صرت أحجز هنا بانتظام.",
      service: "قصة فيد + تهذيب لحية"
    },
    {
      id: 3,
      name: "خالد الأحمد",
      nameEn: "Khalid Al-Ahmad",
      rating: 5,
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "الحلاق عنده خبرة عالية وفهم احتياجي بسرعة. النتيجة كانت بالضبط اللي أبيها.",
      service: "قصة كلاسيكية"
    },
    {
      id: 4,
      name: "فهد السعيد",
      nameEn: "Fahad Al-Saeed",
      rating: 5,
      image: "https://images.pexels.com/photos/1300401/pexels-photo-1300401.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "صالون راقي بمعنى الكلمة! من النظافة للخدمة للنتيجة، كل شيء على أعلى مستوى.",
      service: "باقة العريس"
    },
    {
      id: 5,
      name: "محمد الخالد",
      nameEn: "Mohammed Al-Khalid",
      rating: 5,
      image: "https://images.pexels.com/photos/1300403/pexels-photo-1300403.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "أول مرة أحس بالفرق الكبير بعد الحلاقة! شكراً لكم على الخدمة الممتازة.",
      service: "قصة عصرية"
    },
    {
      id: 6,
      name: "عبدالله الرشيد",
      nameEn: "Abdullah Al-Rashid",
      rating: 5,
      image: "https://images.pexels.com/photos/1300404/pexels-photo-1300404.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "الموقع ممتاز والحجز سهل عبر الواتساب. تجربة سلسة من البداية للنهاية.",
      service: "حلاقة كاملة"
    }
  ]

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-amber-400 fill-current' : 'text-gray-600'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">آراء العملاء</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            اكتشف لماذا يثق بنا المئات من العملاء ويعتبروننا الخيار الأول للحلاقة الفاخرة
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 max-w-md mx-auto">
            <div className="text-6xl font-bold text-amber-400 mb-4">4.9</div>
            <div className="flex justify-center mb-4">
              {renderStars(5)}
            </div>
            <p className="text-gray-400 text-lg">من أصل 5 نجوم</p>
            <p className="text-gray-500 text-sm mt-2">بناءً على 500+ تقييم</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105 relative"
            >
              <Quote className="absolute top-4 left-4 h-8 w-8 text-amber-400/30" />
              
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover ml-4"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="text-amber-400 text-sm font-semibold">
                الخدمة: {testimonial.service}
              </div>
            </div>
          ))}
        </div>

        {/* Customer Satisfaction Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
            <div className="text-gray-400">رضا العملاء</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-amber-400 mb-2">95%</div>
            <div className="text-gray-400">عملاء يعودون</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-amber-400 mb-2">92%</div>
            <div className="text-gray-400">ينصحون الآخرين</div>
          </div>
        </div>

        {/* Customer Reviews Summary */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            ماذا يقول عملاؤنا عنا؟
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">أكثر التعليقات تكراراً:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• &quot;خدمة احترافية ونتائج مبهرة&quot;</li>
                <li>• &quot;أفضل صالون حلاقة في المدينة&quot;</li>
                <li>• &quot;نظافة عالية وأجواء مريحة&quot;</li>
                <li>• &quot;حلاقين محترفين وودودين&quot;</li>
                <li>• &quot;أسعار معقولة مقابل الجودة&quot;</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">الخدمات الأكثر إعجاباً:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• باقة الملك - 98% رضا</li>
                <li>• قصة الفيد - 96% رضا</li>
                <li>• تهذيب اللحية - 95% رضا</li>
                <li>• باقة العريس - 97% رضا</li>
                <li>• الحلاقة الكاملة - 94% رضا</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              انضم لعملائنا السعداء!
            </h2>
            <p className="text-xl text-slate-800 mb-6">
              احجز موعدك الآن واكتشف لماذا نحن الأفضل في المدينة
            </p>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
              احجز موعدك الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsPage