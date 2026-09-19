"use client";

import { useParams } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";
import { blogs } from "@/lib/data/blogs";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const blog = blogs.find((b) => b.slug === slug);

  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 4);

  const testimonialRef = useRef(null);
  const testimonialInView = useInView(testimonialRef, {
    once: true,
    margin: "-100px",
  });

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-fedsec-gray-100 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-normal text-fedsec-gray-900 mb-4 font-[family-name:var(--font-heading)]">
            Post Not Found
          </h1>
          <Link
            href="/blogs"
            className="text-fedsec-purple hover:underline font-[family-name:var(--font-accent)]"
          >
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Blog Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-fedsec-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fedsec-purple/20 via-transparent to-fedsec-pink/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="purple">{blog.category}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-fedsec-white leading-tight mb-6 font-[family-name:var(--font-heading)]">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-fedsec-gray-400 font-[family-name:var(--font-accent)]">
              <span>{blog.author}</span>
              <span>&middot;</span>
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Body with alternating text and images */}
      <section className="py-16 md:py-20 bg-fedsec-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* First content block with image on right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", damping: 40, stiffness: 200, mass: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <p className="text-lg text-fedsec-gray-600 leading-relaxed">
                  {blog.content}
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/protexy/blogs/blog-body1.png"
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Second content block with image on left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", damping: 40, stiffness: 200, mass: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/images/protexy/blogs/blog-body2.png"
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-lg text-fedsec-gray-600 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote Section */}
      <section
        ref={testimonialRef}
        className="py-16 md:py-24 bg-fedsec-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              testimonialInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ type: "spring", damping: 40, stiffness: 200 }}
          >
            <div className="text-6xl font-normal text-fedsec-purple/20 mb-4 font-[family-name:var(--font-heading)]">
              &ldquo;
            </div>
            <blockquote className="text-xl md:text-2xl text-fedsec-gray-700 leading-relaxed mb-6 italic font-[family-name:var(--font-heading)]">
              FEDSEC&apos;s cybersecurity solutions transformed our approach to
              cloud security. Their team delivered exceptional results and
              provided ongoing support throughout the entire engagement.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-fedsec-purple/20 flex items-center justify-center text-fedsec-purple font-normal font-[family-name:var(--font-heading)]">
                {blog.author.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-sm font-normal text-fedsec-gray-900 font-[family-name:var(--font-heading)]">
                  {blog.author}
                </p>
                <p className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">
                  {blog.authorRole}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Go Back Button */}
      <section className="py-12 bg-fedsec-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-fedsec-gray-500 hover:text-fedsec-purple transition-colors font-[family-name:var(--font-accent)]"
          >
            <ArrowLeft size={16} />
            Go Back
          </Link>
        </div>
      </section>

      {/* Related Blogs Section */}
      <section className="py-16 md:py-20 bg-fedsec-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Related Articles"
            title="More Insights"
            description="Continue exploring our latest cybersecurity research and analysis."
            align="left"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {relatedBlogs.map((relatedBlog) => (
              <motion.div key={relatedBlog.slug} variants={fadeInUp}>
                <Link
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group block h-full bg-fedsec-white border border-fedsec-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-fedsec-purple/5 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={
                        relatedBlog.image ||
                        `/images/protexy/blogs/blog-related${relatedBlogs.indexOf(relatedBlog) + 1}.png`
                      }
                      alt={relatedBlog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <Badge variant="purple">{relatedBlog.category}</Badge>
                    <h3 className="text-base font-normal text-fedsec-gray-900 mt-3 mb-2 font-[family-name:var(--font-heading)] group-hover:text-fedsec-purple transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-xs text-fedsec-gray-400 font-[family-name:var(--font-accent)]">
                      {new Date(relatedBlog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
