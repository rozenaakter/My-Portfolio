// src/app/page.tsx
import About from '@/components/About';
import BlogSection from '@/components/BlogSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PageTitleHandler from '@/components/PageTitleHandler';
import Portfolio from '@/components/Portfolio';
import Service from '@/components/Service';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <PageTitleHandler/>
      <Header />
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
      <BlogSection/>
      <Testimonials/>
      <Contact/>      
      <Footer/>
      
    </main>
  );
}