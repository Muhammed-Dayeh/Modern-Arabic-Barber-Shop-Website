'use client'

import React from 'react'
import Image from 'next/image'
import { Camera, Star } from 'lucide-react'

const GalleryPage: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      before: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "قصة فيد عصرية",
      description: "تحول كامل مع قصة فيد محترفة"
    },
    {
      id: 2,
      before: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "تهذيب اللحية الكلاسيكي",
      description: "إطلالة أنيقة مع تهذيب اللحية المحترف"
    },
    {
      id: 3,
      before: "https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "قصة كلاسيكية مع اللحية",
      description: "مظهر متوازن وأنيق للرجل المعاصر"
    },
    {
      id: 4,
      before: "https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1300401/pexels-photo-1300401.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "قصة شعر قصيرة",
      description: "مظهر منظم ومهني للعمل"
    },
    {
      id: 5,
      before: "https://images.pexels.com/photos/1043476/pexels-photo-1043476.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1300403/pexels-photo-1300403.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "تسريحة عصرية",
      description: "أسلوب جديد يواكب الموضة"
    },
    {
      id: 6,
      before: "https://images.pexels.com/photos/1043477/pexels-photo-1043477.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1300404/pexels-photo-1300404.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "حلاقة كاملة",
      description: "تجربة حلاقة فاخرة مع النتيجة المثالية"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">معرض الأعمال</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            شاهد التحولات المذهلة التي نحققها لعملائنا - من الشكل العادي إلى الإطلالة الملكية
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative group">
                    <Image
                      src={item.before}
                      alt="قبل"
                      width={200}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-semibold">قبل</span>
                    </div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={item.after}
                      alt="بعد"
                      width={200}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-semibold">بعد</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                  تحول مذهل
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-gray-300 mr-2">5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
            <div className="text-gray-400">عميل راضٍ</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-amber-400 mb-2">3</div>
            <div className="text-gray-400">سنوات خبرة</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-amber-400 mb-2">4.9</div>
            <div className="text-gray-400">تقييم العملاء</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
            <div className="text-gray-400">ضمان الرضا</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8">
            <Camera className="h-12 w-12 text-slate-900 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              جاهز لتحولك الخاص؟
            </h2>
            <p className="text-xl text-slate-800 mb-6">
              احجز موعدك الآن واكتشف الفرق الذي يمكن أن نصنعه لك
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

export default GalleryPage