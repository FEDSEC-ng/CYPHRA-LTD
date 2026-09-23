"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with the team transformed the way we approach cybersecurity. Their AI-powered monitoring and rapid response capabilities helped us identify potential threats before they could impact our operations",
    name: "Olivia Bennett",
    role: "IT Director, NexaBank",
    avatar: "/images/protexy/team/avatar-olivia.png",
  },
  {
    quote:
      "The cybersecurity solutions delivered exceeded our expectations. The real-time monitoring and automated incident response have significantly reduced our security risks and improved overall operational stability.",
    name: "Adebayo O.",
    role: "CTO, SecureTech",
    avatar: "/images/protexy/team/avatar-james.png",
  },
  {
    quote:
      "AI-powered monitoring transformed cybersecurity, preventing threats before disrupting business operations completely.",
    name: "Emeka N.",
    role: "CISO, SafeNet",
    avatar: "/images/protexy/team/avatar-emma.png",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-fedsec-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 40, stiffness: 200, mass: 1 }}
              className="flex flex-col items-center"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-fedsec-gray-900 leading-relaxed mb-8 font-[family-name:var(--font-heading)]">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-fedsec-gray-200">
                  <Image
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-fedsec-gray-900">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-fedsec-gray-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group relative w-2 h-2 rounded-full transition-all duration-500 overflow-hidden"
            >
              <span
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  i === current
                    ? "bg-fedsec-purple w-8 -translate-x-3"
                    : "bg-fedsec-gray-300 group-hover:bg-fedsec-gray-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
