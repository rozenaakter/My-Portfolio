// components/PageTitleHandler.tsx
"use client";

import { useEffect } from 'react';

export default function PageTitleHandler() {
  useEffect(() => {
    type SectionKey = "home" | "about" | "service" | "protfolio" | "blog" | "testimonials" | "contact";

    const sectionMeta: Record<SectionKey, { title: string; description: string }> = {
      home: {
        title: "Rozena Akter - Frontend Developer",
        description: "Welcome to Rozena Akter's portfolio - Creative Frontend Developer & UI/UX Enthusiast",
      },
      about: {
        title: "About Me - Rozena Akter",
        description: "Learn more about Rozena Akter's journey as a frontend developer and technical skills",
      },
      service: {
        title: "Services - Rozena Akter",
        description: "Frontend development services including React, Next.js, TailwindCSS and modern web technologies",
      },
      protfolio: {
        title: "Portfolio - Rozena Akter",
        description: "Explore Rozena Akter's portfolio projects and real-world case studies",
      },
      blog: {
        title: "Blog - Rozena Akter",
        description: "Read articles and insights about web development from Rozena Akter",
      },
      testimonials: {
        title: "Testimonials - Rozena Akter",
        description: "See what clients and colleagues say about working with Rozena Akter",
      },
      contact: {
        title: "Contact - Rozena Akter",
        description: "Get in touch with Rozena Akter for collaborations or opportunities",
      },
    };

    const updatePageMeta = (sectionId: SectionKey) => {
      const meta = sectionMeta[sectionId];
      
      // Update page title
      document.title = meta.title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', meta.description);
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      let currentSection: SectionKey = 'home';
      
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionBottom - 100) {
          currentSection = element.id as SectionKey;
        }
      });

      // Update page meta when section changes
      updatePageMeta(currentSection);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial update
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}