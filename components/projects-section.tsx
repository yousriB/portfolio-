"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "DreamHouse Luxury Estates",
    description:
      "A sleek real estate site showcasing luxury properties with search filters and a blog for market insights.",
    image: "/projects/houses.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Real Estate",
      "Search Filters",
    ],
    liveUrl: "https://dreamhouse-elegance.vercel.app/",
    githubUrl: "https://github.com/yousriB/dreamhouse-luxury",
  },
  {
    title: "SolarTech",
    description:
      "A clean site promoting solar solutions with product showcases and easy quote requests.",
    image: "/projects/solair.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Renewable Energy",
      "Lead Generation",
    ],
    liveUrl: "https://solartech-web-oasis.vercel.app/",
    githubUrl: "https://github.com/yousriB/solartech",
  },
  {
    title: "مركز عليسة للتميز المهني",
    description:
      "موقع مركز تكوين مهني لتحويل الطموح إلى نجاح بطريقة بسيطة وجذابة.",
    image: "/projects/ellisa.png",
    tags: ["Next.js", "Tailwind CSS", "Formation", "Responsive Design"],
    liveUrl: "https://ellisa-three.vercel.app/",
    githubUrl: "https://github.com/yousriB/Ellisa",
  },
  {
    title: "ForumAuto Gabès",
    description:
      "موقع معرض سيارات حديث لعرض مجموعة واسعة من السيارات مع تفاصيل كاملة وتصميم أنيق.",
    image: "/projects/forum.png",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design", "Car Showcase"],
    liveUrl: "https://autogabes.vercel.app/",
    githubUrl: "https://github.com/yousriB/autogabes",
  },
  {
    title: "Bus Management System",
    description:
      "منصة لإدارة النقل بالحافلات تشمل تتبع المسارات وجدولة الرحلات وبيانات السائقين.",
    image: "/projects/bus.png",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design", "Transportation"],
    liveUrl: "https://busses-pi.vercel.app/",
    githubUrl: "https://github.com/yousriB/busses",
  },
  {
    title: "Gaming Project",
    description:
      "منصة ألعاب تفاعلية مع رسوم متحركة سلسة وتجربة مستخدم ديناميكية.",
    image: "/projects/gaming.png",
    tags: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Animation",
      "Responsive Design",
    ],
    liveUrl: "https://gaming-two-teal.vercel.app/",
    githubUrl: "https://github.com/yousriB/gaming",
  },
  {
    title: "Elegant Events",
    description:
      "موقع تخطيط فعاليات أنيق يعرض الخدمات والشهادات ونظام حجز استشارات.",
    image: "/projects/wedding.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX",
      "Event Booking",
    ],
    liveUrl: "https://eventsplanning.vercel.app/",
    githubUrl: "https://github.com/yousriB/elegant-events",
  },
  {
    title: "Serenity Beauty Salon",
    description:
      "موقع صالون تجميل فاخر يعرض الخدمات ويتيح الحجز بسهولة بتصميم هادئ وجذاب.",
    image: "/projects/sallon.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Beauty",
      "Booking System",
    ],
    liveUrl: "https://beauty-salon-delta-lilac.vercel.app/",
    githubUrl: "https://github.com/yousriB/serenity-beauty",
  },
  {
    title: "SmileWell Dental Clinic",
    description:
      "موقع عيادة أسنان حديث يعرض الخدمات والفريق مع نظام حجز مواعيد بسيط وموثوق.",
    image: "/projects/dental.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Healthcare",
      "Booking System",
    ],
    liveUrl: "https://smile-well.vercel.app/",
    githubUrl: "https://github.com/yousriB/smilewell-dental",
  },
  {
    title: "تمور تونس (Tunisian Dates)",
    description:
      "موقع يعرض أجود أنواع التمور التونسية الأصيلة مع قصة المنتج وخيارات طلب سهلة.",
    image: "/projects/dagla.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "E-commerce",
      "Multilingual",
    ],
    liveUrl: "https://dagla.vercel.app/",
    githubUrl: "https://github.com/yousriB/tmour-tunisia",
  },
];

export default function ProjectsSection() {
  // State to control how many projects are visible
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 initially

  // Show more projects handler
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      // Animation is handled inline with initial x: 0
    }
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-10 bg-gradient-to-b from-[#050505] to-[#050505] overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-gray-300 to-indigo-500">
            Recent Projects Showcase
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my latest works that highlight my expertise in creating
            innovative and impactful web solutions.
          </p>
        </motion.div>

        {/* Grid layout for projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <Card
              key={index}
              className="bg-white/[0.03] border-white/[0.08] backdrop-blur-sm overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/20"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 300px, 340px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2.5 py-1 rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-indigo-800/50 text-indigo-300 bg-gray-900/30 hover:bg-indigo-900/50 hover:text-gray-100 transition-colors"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-indigo-800/50 text-indigo-300 bg-gray-900/30 hover:bg-indigo-900/50 hover:text-gray-100 transition-colors"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More button */}
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              size="lg"
              className="border-indigo-800/50 text-indigo-300 bg-gray-900/30 hover:bg-indigo-900/50 hover:text-gray-100 transition-colors"
              onClick={handleShowMore}
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
