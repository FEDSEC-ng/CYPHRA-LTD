"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CTABanner from "@/components/ui/CTABanner";
import WordByWordReveal from "@/components/ui/WordByWordReveal";
import { SITE } from "@/lib/constants";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

const springTransition = { type: "spring" as const, damping: 40, stiffness: 200 };

const contactCards = [
  { icon: <Mail size={24} />, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: <Phone size={24} />, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
  { icon: <MapPin size={24} />, label: "Location", value: "Nigeria", href: "#" },
];

const faqItems = [
  { question: "What cybersecurity services does FEDSEC offer?", answer: "We offer a comprehensive range of services including Vulnerability Assessment & Penetration Testing, Security Analysis, GRC & Cybersecurity Advisory, Network Security, Software Security, and Security Operations. Our multidisciplinary approach covers the full spectrum of cybersecurity needs." },
  { question: "How does FEDSEC approach a new security engagement?", answer: "We begin with a thorough assessment of your current security posture, identify vulnerabilities and risks, then develop a tailored strategy that aligns with your business objectives. Our approach combines offensive security testing with defensive architecture recommendations." },
  { question: "What industries does FEDSEC serve?", answer: "We serve organizations across multiple industries including financial services, healthcare, technology, government, and education. Our solutions are designed to meet the specific compliance and security requirements of each sector." },
  { question: "How does FEDSEC ensure client confidentiality?", answer: "Confidentiality is one of our core values. We implement strict data handling protocols, use encrypted communication channels, and ensure all team members adhere to comprehensive non-disclosure agreements. Your sensitive information is protected as if it were our own." },
  { question: "What makes FEDSEC different from other cybersecurity firms?", answer: "Our multidisciplinary team brings together experts from different cybersecurity domains. Rather than a one-size-fits-all approach, we combine offensive testing, defensive architecture, governance expertise, and security operations to deliver comprehensive, integrated solutions." },
  { question: "How can I get started with FEDSEC?", answer: "Getting started is simple. Reach out through our contact form or book a free security consultation call. We will discuss your needs, assess your current situation, and recommend the most appropriate services for your organization." },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
    setFormState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springTransition}>
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-fedsec-purple/10 border border-fedsec-purple/20 text-sm font-semibold uppercase tracking-widest text-fedsec-pink font-[family-name:var(--font-accent)]">Contact Us</span>
              <WordByWordReveal text="Get in touch with security experts" className="text-5xl md:text-6xl lg:text-7xl font-normal text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]" tag="h1" />
              <p className="text-lg md:text-xl text-fedsec-gray-400 max-w-3xl leading-relaxed">Whether you have a specific security challenge or want to explore how FEDSEC can help your organization, we&apos;d love to hear from you.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...springTransition, delay: 0.2 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/images/protexy/contact/contact-main.png" alt="Contact our security experts" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-fedsec-gray-900/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <motion.a key={card.label} href={card.href} variants={fadeInUp} className="group flex items-start gap-4 p-6 bg-fedsec-gray-50 rounded-2xl border border-fedsec-gray-200 hover:border-fedsec-purple/30 hover:shadow-lg hover:shadow-fedsec-purple/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-fedsec-purple/10 flex items-center justify-center text-fedsec-purple group-hover:bg-fedsec-purple group-hover:text-fedsec-white transition-all shrink-0">{card.icon}</div>
                <div>
                  <p className="text-xs font-semibold text-fedsec-gray-400 uppercase tracking-wider mb-1 font-[family-name:var(--font-accent)]">{card.label}</p>
                  <p className="text-lg font-semibold text-fedsec-gray-900 font-[family-name:var(--font-heading)]">{card.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-fedsec-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="bg-fedsec-gray-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-fedsec-purple/20 flex items-center justify-center text-fedsec-purple"><Calendar size={24} /></div>
                  <div className="w-12 h-12 rounded-xl bg-fedsec-pink/20 flex items-center justify-center text-fedsec-pink"><Clock size={24} /></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-normal text-fedsec-white leading-tight mb-4 font-[family-name:var(--font-heading)]">Book Security Call</h2>
                <p className="text-lg text-fedsec-gray-300 leading-relaxed mb-8">Schedule a free consultation call with our cybersecurity experts. Discuss your security challenges, explore solutions, and get expert recommendations tailored to your organization.</p>
                <div><Button href="#" size="lg">Book Free Call <Calendar className="ml-2" size={18} /></Button></div>
              </div>
              <div className="relative hidden lg:block min-h-[400px]">
                <Image src="/images/protexy/contact/contact-call.png" alt="Book a security consultation" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-fedsec-gray-900 via-fedsec-gray-900/50 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-2">
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-fedsec-purple font-[family-name:var(--font-accent)]">Send a Message</span>
              <h2 className="text-3xl md:text-4xl font-normal text-fedsec-gray-900 leading-tight mb-6 font-[family-name:var(--font-heading)]">Let&apos;s Start a Conversation</h2>
              <p className="text-lg text-fedsec-gray-500 leading-relaxed mb-8">Fill out the form and our team will get back to you within 24 hours. We are committed to helping you find the right security solutions for your organization.</p>
              <div className="p-6 bg-fedsec-gray-900 rounded-2xl">
                <h3 className="text-lg font-normal text-fedsec-white mb-3 font-[family-name:var(--font-heading)]">{SITE.founder}</h3>
                <p className="text-sm text-fedsec-purple font-semibold mb-2 font-[family-name:var(--font-accent)]">{SITE.founderRole}</p>
                <p className="text-sm text-fedsec-gray-400 leading-relaxed">Built on the principle of trust, FEDSEC is committed to professionalism, confidentiality, continuous learning, and responsible security practices.</p>
              </div>
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-fedsec-gray-700 mb-2 font-[family-name:var(--font-accent)]">Full Name</label>
                    <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-xl text-fedsec-gray-900 focus:border-fedsec-purple focus:ring-2 focus:ring-fedsec-purple/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fedsec-gray-700 mb-2 font-[family-name:var(--font-accent)]">Email Address</label>
                    <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-xl text-fedsec-gray-900 focus:border-fedsec-purple focus:ring-2 focus:ring-fedsec-purple/20 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-fedsec-gray-700 mb-2 font-[family-name:var(--font-accent)]">Phone Number</label>
                    <input type="tel" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className="w-full px-4 py-3 bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-xl text-fedsec-gray-900 focus:border-fedsec-purple focus:ring-2 focus:ring-fedsec-purple/20 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fedsec-gray-700 mb-2 font-[family-name:var(--font-accent)]">Company Name</label>
                    <input type="text" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })} className="w-full px-4 py-3 bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-xl text-fedsec-gray-900 focus:border-fedsec-purple focus:ring-2 focus:ring-fedsec-purple/20 outline-none transition-all" placeholder="Company Name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-fedsec-gray-700 mb-2 font-[family-name:var(--font-accent)]">Message</label>
                  <textarea required rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 bg-fedsec-gray-50 border border-fedsec-gray-200 rounded-xl text-fedsec-gray-900 focus:border-fedsec-purple focus:ring-2 focus:ring-fedsec-purple/20 outline-none transition-all resize-none" placeholder="Tell us about your security needs..." />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-fedsec-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-fedsec-pink mb-4 font-[family-name:var(--font-accent)]">FAQ</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">Frequently asked questions</h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
