'use client'

import React, { useState } from 'react'
import { Calendar, Clock, User, Phone, MessageCircle } from 'lucide-react'

interface BookingPageProps {
  onNavigate: (page: string) => void
}

const BookingPage: React.FC<BookingPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })

  const services = [
    'قصة كلاسيكية - 80 ريال',
    'قصة عصرية - 100 ريال',
    'قصة فيد - 120 ريال',
    'تهذيب اللحية - 50 ريال',
    'حلاقة كاملة - 70 ريال',
    'باقة الملك - 250 ريال',
    'باقة الأمير - 180 ريال',
    'باقة العريس - 300 ريال',
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `
مرحباً، أريد حجز موعد في صالون الملك:

الاسم: ${formData.name}
الهاتف: ${formData.phone}
الخدمة: ${formData.service}
التاريخ: ${formData.date}
الوقت: ${formData.time}
ملاحظات: ${formData.notes || 'لا توجد ملاحظات'}

أرجو تأكيد الحجز، شكراً.
    `.trim()

    const whatsappUrl = `https://wa.me/966500000000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">احجز موعدك</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            احجز موعدك الآن واحصل على أفضل تجربة حلاقة في المدينة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-amber-400 ml-3" />
                معلومات الحجز
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <User className="h-5 w-5 inline ml-2 text-amber-400" />
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Phone className="h-5 w-5 inline ml-2 text-amber-400" />
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                    placeholder="05xxxxxxxx"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    نوع الخدمة
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="">اختر الخدمة</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    التاريخ
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={today}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Clock className="h-5 w-5 inline ml-2 text-amber-400" />
                    الوقت المفضل
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="">اختر الوقت</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    ملاحظات إضافية
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none resize-none"
                    placeholder="أي طلبات خاصة أو ملاحظات..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 ml-2" />
                  احجز عبر الواتساب
                </button>
              </form>
            </div>

            {/* Booking Info */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">معلومات مهمة</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-amber-400 mt-1 ml-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">مواعيد العمل</p>
                      <p>السبت - الخميس: 9:00 ص - 10:00 م</p>
                      <p>الجمعة: 2:00 م - 10:00 م</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageCircle className="h-5 w-5 text-amber-400 mt-1 ml-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">طريقة الحجز</p>
                      <p>سيتم توجيهك للواتساب لتأكيد الحجز مع فريقنا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-amber-400 mt-1 ml-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">سياسة الإلغاء</p>
                      <p>يمكن إلغاء أو تعديل الحجز قبل 24 ساعة من الموعد</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">عرض خاص!</h3>
                <p className="text-slate-800 mb-4">
                  احصل على خصم 20% على حجزك الأول معنا
                </p>
                <p className="text-slate-900 font-semibold">
                  استخدم الكود: KING20
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">تواصل معنا</h3>
                <div className="space-y-3 text-gray-300">
                  <p>📱 واتساب: 966500000000+</p>
                  <p>📞 هاتف: 966112345678+</p>
                  <p>📧 إيميل: info@kingsbarber.com</p>
                  <p>📍 العنوان: الرياض، حي الملك فهد، شارع الملك فهد</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage