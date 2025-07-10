'use client'

import React from 'react'
import { Scissors, Menu, X } from 'lucide-react'

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navigation = [
    { key: 'home', label: 'الرئيسية', labelEn: 'Home' },
    { key: 'services', label: 'الخدمات', labelEn: 'Services' },
    { key: 'gallery', label: 'المعرض', labelEn: 'Gallery' },
    { key: 'testimonials', label: 'آراء العملاء', labelEn: 'Testimonials' },
    { key: 'about', label: 'من نحن', labelEn: 'About' },
    { key: 'contact', label: 'اتصل بنا', labelEn: 'Contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Scissors className="h-8 w-8 text-amber-400 rotate-45" />
            <div className="text-right rtl:text-left">
              <h1 className="text-xl font-bold text-white">صالون الملك</h1>
              <p className="text-xs text-amber-400">King&apos;s Barber Shop</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  currentPage === item.key ? 'text-amber-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Book Now Button */}
          <button
            onClick={() => onNavigate('booking')}
            className="hidden md:block bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            احجز الآن
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <div className="flex flex-col space-y-3 pt-4">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key)
                    setIsMenuOpen(false)
                  }}
                  className={`text-right rtl:text-left text-sm font-medium transition-colors hover:text-amber-400 ${
                    currentPage === item.key ? 'text-amber-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('booking')
                  setIsMenuOpen(false)
                }}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2 rounded-lg font-semibold transition-colors text-center mt-4"
              >
                احجز الآن
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header