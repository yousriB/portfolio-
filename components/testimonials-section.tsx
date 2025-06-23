"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

const testimonials = [
  {
    quote:
      "Yousri delivered a professional and responsive website for our dealership that truly impressed our clients. His work on the Forum Auto Gabès platform has helped us showcase our cars better and attract more leads.",
    name: "Khaled Ben Youssef",
    title: "Forum Auto Gabès",
    avatar: "/avatars/khaled.png",
  },
  {
    quote:
      "Yousri turned our vision into a clean, functional, and beautiful website. His ability to translate business needs into intuitive design is what sets him apart.",
    name: "Mouna Dhouib",
    title: "Founder, Elegant Events",
    avatar: "/avatars/mouna.png",
  },
  {
    quote:
      "I hired Yousri for a freelance project and he delivered beyond expectations. From booking systems to animations, everything was optimized and smooth.",
    name: "Nidhal Khemiri",
    title: "Freelance Client, SolarTech Project",
    avatar: "/avatars/nidhal.png",
  },
  {
    quote:
      "Working with Yousri on our beauty salon site was a game changer. The user experience, aesthetics, and responsiveness were exactly what we needed to boost our online presence.",
    name: "Rania Bouazizi",
    title: "Owner, Beauty Salon",
    avatar: "/avatars/rania.png",
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      // Animation is handled inline with initial x: 0
    }
  }, []);

  // Clone testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-b from-[#050505] to-[#030303] overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            Kind Words from Satisfied Clients
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say
            about working with me.
          </p>
        </motion.div>

        <div className="relative w-full">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none"></div>

          {/* Infinite scroll container */}
          <motion.div
            className="flex w-[calc(350px*${allTestimonials.length})] py-4"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              duration: 20,
            }}
          >
            {allTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 sm:w-1/3 w-1/2 px-4">
                <Card className="bg-white/[0.03] border-white/[0.08] h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-indigo-400 mb-4 opacity-50" />
                    <p className="text-white/80 mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/60 text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
