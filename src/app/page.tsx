'use client'

import { useState } from "react";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import ServicesPage from "../components/ServicesPage";
import BookingPage from "../components/BookingPage";
import GalleryPage from "../components/GalleryPage";
import TestimonialsPage from "../components/TestimonialsPage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />
      case 'booking':
        return <BookingPage onNavigate={setCurrentPage} />
      case 'gallery':
        return <GalleryPage />
      case 'testimonials':
        return <TestimonialsPage />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-slate-900" dir="rtl">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}