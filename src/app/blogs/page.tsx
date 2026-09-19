"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { blogs } from "@/lib/data/blogs";
import CTABanner from "@/components/ui/CTABanner";

export default function BlogsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-fedsec-purple bg-fedsec-purple/10 rounded-full font-[family-name:var(--font-accent)]">
              Our blogs
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]">
              Latest cybersecurity news updates
            </h1>
            <p className="text-lg md:text-xl text-fedsec-gray-400 max-w-3xl leading-relaxed">
              Articles, research, security awareness content, and technical
              write-ups from our team of cybersecurity professionals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-fedsec-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((blog) => (
              <motion.div key={blog.slug} variants={fadeInUp}>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group block h-full"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">{blog.author}</span>
                    <span className="w-1 h-1 rounded-full bg-fedsec-gray-300" />
                    <span className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-normal text-fedsec-gray-900 mb-3 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-fedsec-purple font-[family-name:var(--font-accent)] group-hover:gap-3 transition-all">
                    View details <span className="text-lg">&rarr;</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
