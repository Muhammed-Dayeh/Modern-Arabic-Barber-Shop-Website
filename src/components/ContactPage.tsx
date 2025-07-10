'use client'

import React from 'react'
import { MapPin, Phone, Clock, MessageCircle, Instagram, Mail } from 'lucide-react'

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-amber-400" />,
      title: "الهاتف",
      details: ["966112345678+", "966500000000+"],
      action: "tel:+966112345678"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-amber-400" />,
      title: "واتساب",
      details: ["966500000000+", "متاح 24/7"],
      action: "https://wa.me/966500000000"
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-400" />,
      title: "البريد الإلكتروني",
      details: ["info@kingsbarber.com", "booking@kingsbarber.com"],
      action: "mailto:info@kingsbarber.com"
    },
    {
      icon: <Instagram className="h-6 w-6 text-amber-400" />,
      title: "انستقرام",
      details: ["@kingsbarber_riyadh", "تابع أعمالنا"],
      action: "https://instagram.com/kingsbarber_riyadh"
    }
  ]

  const workingHours = [
    { day: "السبت - الأربعاء", hours: "9:00 ص - 10:00 م" },
    { day: "الخميس", hours: "9:00 ص - 11:00 م" },
    { day: "الجمعة", hours: "2:00 م - 10:00 م" },
  ]

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">تواصل معنا</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            نحن هنا لخدمتك. تواصل معنا بأي طريقة تناسبك واحجز موعدك الآن
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0 p-3 bg-slate-900/50 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-400">
                          {detail}
                        </p>
                      ))}
                      <a
                        href={info.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        اتصل الآن
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="h-6 w-6 text-amber-400 ml-3" />
                أوقات العمل
              </h2>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-amber-400 font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl text-center transition-colors"
              >
                <MessageCircle className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-semibold">واتساب</span>
              </a>
              <a
                href="tel:+966112345678"
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl text-center transition-colors"
              >
                <Phone className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-semibold">اتصال</span>
              </a>
            </div>
          </div>

          {/* Map and Location */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-amber-400 ml-3" />
                موقعنا
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-slate-900/50 rounded-xl p-8 text-center border border-slate-600 mb-6">
                <MapPin className="h-16 w-16 text-amber-400 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">
                  الرياض، حي الملك فهد<br />
                  شارع الملك فهد، مجمع الملك فهد التجاري<br />
                  الطابق الثاني، محل رقم 205
                </p>
                <a
                  href="https://goo.gl/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  اعرض على الخريطة
                </a>
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-amber-400 ml-3" />
                  <span>مواقف سيارات مجانية متوفرة</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-amber-400 ml-3" />
                  <span>قريب من محطة مترو الملك فهد</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-amber-400 ml-3" />
                  <span>بجانب مطعم الأندلس الشهير</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">تابعنا على السوشيال ميديا</h2>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/kingsbarber_riyadh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <Instagram className="h-8 w-8 text-white ml-4" />
                  <div>
                    <p className="text-white font-semibold">انستقرام</p>
                    <p className="text-gray-200 text-sm">@kingsbarber_riyadh</p>
                  </div>
                </a>
                <div className="text-center text-gray-400">
                  <p>تابع أحدث أعمالنا وعروضنا الخاصة</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              جاهز للحجز؟
            </h2>
            <p className="text-xl text-slate-800 mb-6">
              تواصل معنا الآن واحجز موعدك بسهولة عبر الواتساب
            </p>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              احجز عبر الواتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage