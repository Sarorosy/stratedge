import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

import { testimonials, GOOGLE_REVIEWS_LINK } from '../data/testimonials';

const TestimonialCard = ({ testimonial }) => (
    <div className="px-4 py-4 h-full">
        <div className="p-8 rounded-3xl shadow-lg flex flex-col h-full group transition-all duration-300 hover:shadow-xl"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg uppercase shrink-0 shadow-md"
                    style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))", color: "var(--color-accent-contrast)", boxShadow: "0 0 0 3px var(--color-accent-soft)" }}>
                    {testimonial.name.charAt(0)}
                </div>
                <div className="overflow-hidden">
                    <h4 className="font-bold transition-colors truncate" style={{ color: "var(--color-text-strong)" }}>
                        {testimonial.name}
                    </h4>
                </div>
            </div>

            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            <div className="relative flex-grow">
                <p className="relative z-10 leading-relaxed italic line-clamp-4" style={{ color: "var(--color-text-muted)" }}>
                    "{testimonial.text}"
                </p>
            </div>

            <div className="mt-6 pt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-accent)" }}>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4" />
                Verified Review
            </div>
        </div>
    </div>
);

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const containerRef = useRef(null);

    // Update visible count based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - visibleCount + 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + (testimonials.length - visibleCount + 1)) % (testimonials.length - visibleCount + 1));
    };

    // Auto play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextIndex = prev + 1;
                if (nextIndex > testimonials.length - visibleCount) {
                    return 0;
                }
                return nextIndex;
            });
        }, 5000);
        return () => clearInterval(timer);
    }, [visibleCount]);

    return (
        <section className="py-8  border-b border-accent relative overflow-hidden" style={{ background: "var(--color-bg)" }}>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--color-text-strong)" }}>
                        What Our Clients Say
                    </h2>
                </div>

                <div className="relative group max-w-6xl mx-auto">
                    {/* Carousel Container */}
                    <div className="overflow-hidden" ref={containerRef}>
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    style={{ width: `${100 / visibleCount}%` }}
                                    className="shrink-0"
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 hidden md:flex"
                        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-strong)" }}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 hidden md:flex"
                        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-strong)" }}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(testimonials.length - visibleCount + 1)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className="h-2 rounded-full transition-all duration-300"
                                style={{
                                    width: currentIndex === i ? 32 : 8,
                                    background: currentIndex === i ? "var(--color-accent)" : "var(--color-accent-soft)"
                                }}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href={GOOGLE_REVIEWS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 group"
                        style={{ background: "var(--color-surface)", color: "var(--color-text-strong)", border: "1px solid var(--color-border)" }}
                    >
                        <span>Read More Reviews on Google</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>

                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold" style={{ color: "var(--color-text-strong)" }}>4.9/5</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:block h-4 w-px" style={{ background: "var(--color-border)" }}></div>
                        <span className="font-medium whitespace-nowrap" style={{ color: "var(--color-text-muted)" }}>Based on 100+ Google Reviews</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
