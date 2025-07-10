'use client'

import React from 'react'
import Image from 'next/image'
import { Scissors, Award, Clock, Users, Heart, MapPin } from 'lucide-react'

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Scissors className="h-8 w-8 text-amber-400" />,
      title: "الاحترافية",
      description: "نلتزم بأعلى معايير الجودة والدقة في كل خدمة نقدمها"
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-400" />,
      title: "الاهتمام بالعميل",
      description: "راحة وسعادة عملائنا هي أولويتنا الأولى دائماً"
    },
    {
      icon: <Award className="h-8 w-8 text-amber-400" />,
      title: "التميز",
      description: "نسعى للتميز في كل تفصيل لنقدم تجربة لا تُنسى"
    },
    {
      icon: <Users className="h-8 w-8 text-amber-400" />,
      title: "الخبرة",
      description: "فريق من أمهر الحلاقين مع سنوات من الخبرة والتدريب"
    }
  ]

  const team = [
    {
      name: "أستاذ محمد",
      position: "الحلاق الرئيسي",
      experience: "15 سنة خبرة",
      specialty: "قصات كلاسيكية وعصرية",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "أستاذ أحمد",
      position: "متخصص اللحية",
      experience: "12 سنة خبرة",
      specialty: "تهذيب اللحية والحلاقة",
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "أستاذ سعد",
      position: "متخصص القصات العصرية",
      experience: "10 سنوات خبرة",
      specialty: "قصات الفيد والأساليب الحديثة",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">من نحن</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            نحن أكثر من مجرد صالون حلاقة - نحن مكان يلتقي فيه الفن بالحرفية لنقدم لك أفضل تجربة
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">قصتنا</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              بدأت قصة &quot;صالون الملك&quot; في عام 2021 برؤية بسيطة: تقديم خدمات حلاقة تجمع بين الأصالة والحداثة. 
              أردنا إنشاء مكان يشعر فيه كل رجل بالراحة والثقة، مكان يحصل فيه على أكثر من مجرد قصة شعر.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              اليوم، بعد خدمة أكثر من 500 عميل سعيد، نفخر بكوننا وجهة مفضلة للرجال الذين يقدرون الجودة والاحترافية. 
              نحن لسنا مجرد حلاقين، بل فنانون نهتم بكل تفصيل لنضمن خروجك بأفضل إطلالة.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-amber-400">500+</div>
                <div className="text-gray-400">عميل سعيد</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-amber-400">3</div>
                <div className="text-gray-400">سنوات خبرة</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <Image
              src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="صالون الملك"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">قيمنا</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">فريقنا</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-amber-400/50 transition-all duration-300 text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-amber-400 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-400 text-sm mb-2">{member.experience}</p>
                <p className="text-gray-300">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">رسالتنا</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              &quot;نسعى لتقديم تجربة حلاقة استثنائية تجمع بين الحرفية العالية والخدمة المميزة، 
              لنساعد كل رجل في الحصول على الثقة والإطلالة التي يستحقها&quot;
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">الالتزام بالمواعيد</h3>
              <p className="text-gray-400">نحترم وقتك ونضمن الدقة في المواعيد</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">الجودة العالية</h3>
              <p className="text-gray-400">نستخدم أفضل المنتجات والأدوات</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">الموقع المميز</h3>
              <p className="text-gray-400">في قلب المدينة وسهولة الوصول</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              انضم لعائلة صالون الملك
            </h2>
            <p className="text-xl text-slate-800 mb-6">
              احجز موعدك الآن واكتشف الفرق الحقيقي في الخدمة والجودة
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

export default AboutPage