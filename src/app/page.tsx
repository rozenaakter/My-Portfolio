// src/app/page.tsx
import About from '@/components/About';
import BlogSection from '@/components/BlogSection';
import ClientReviews from '@/components/ClientReviews';
import Contact from '@/components/Contact';
// import ContactPage from '@/components/ContactPage';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Service from '@/components/Service';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <Hero/>
      <About/>
      <Service/>
      <ClientReviews/>
      <Portfolio/>
      <BlogSection/>
      <Contact/>
      {/* <ContactPage/> */}
      
      <Footer/>
      
      
    </main>
  );
}