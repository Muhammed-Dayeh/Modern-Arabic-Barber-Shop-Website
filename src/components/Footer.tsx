'use client'

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">صالون الملك</h3>
            <p className="text-gray-400 text-sm">
              أفضل صالون حلاقة رجالية في الرياض. نقدم خدمات احترافية بأعلى معايير الجودة.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">الخدمات</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>قصات الشعر</li>
              <li>تهذيب اللحية</li>
              <li>العناية بالبشرة</li>
              <li>الباقات الخاصة</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">أوقات العمل</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>السبت - الأربعاء: 9:00 ص - 10:00 م</li>
              <li>الخميس: 9:00 ص - 11:00 م</li>
              <li>الجمعة: 2:00 م - 10:00 م</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📱 966500000000+</li>
              <li>📧 info@kingsbarber.com</li>
              <li>📍 الرياض، حي الملك فهد</li>
              <li>📷 @kingsbarber_riyadh</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 صالون الملك. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer