// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // স্ট্যাটিক এক্সপোর্ট সক্রিয় করুন
  output: 'export',
  
  // ট্রেইলিং স্ল্যাশ সক্রিয় করুন (স্ট্যাটিক হোস্টিংয়ের জন্য প্রয়োজন)
  trailingSlash: true,
  
  // ইমেজ অপ্টিমাইজেশন ডিসেবল করুন (স্ট্যাটিক এক্সপোর্টের জন্য)
  images: {
    unoptimized: true,
    // বাইরের ইমেজ ডোমেইন যোগ করুন (যেমন Unsplash, Pexels)
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
  
  // যদি আপনার অন্য কনফিগারেশন থাকে
  // উদাহরণস্বরূপ:
  experimental: {
    // যদি আপনি অ্যাপ ডিরেক্টরি ব্যবহার করেন
    appDir: true,
  },
  
  // যদি আপনার এনভায়রনমেন্ট ভেরিয়েবল থাকে
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;