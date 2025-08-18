import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      company: "TechCorp Solutions",
      content: "Vincent's expertise in cloud architecture transformed our infrastructure. His strategic approach and attention to detail resulted in a 40% reduction in operational costs while improving system reliability.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "DevOps Lead",
      company: "InnovateTech",
      content: "Working with Vincent was a game-changer for our DevOps practices. He implemented CI/CD pipelines that reduced our deployment time from hours to minutes, and his knowledge of security best practices is exceptional.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "DataFlow Inc",
      content: "Vincent's ability to translate complex technical requirements into actionable solutions is remarkable. He consistently delivered projects on time and exceeded our expectations with innovative approaches.",
      rating: 5,
      avatar: "👩‍💼",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`size-4 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <motion.section
      ref={ref}
      className="bg-white py-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="mb-4 text-4xl font-bold text-gray-900"
            variants={itemVariants}
          >
            What Clients Say
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-xl text-gray-600"
            variants={itemVariants}
          >
            Don&apos;t just take my word for it. Here&apos;s what industry leaders 
            and colleagues have to say about working together.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="rounded-2xl bg-gray-50 p-8 shadow-lg"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <StarRating rating={testimonial.rating} />
              </div>
              
              <blockquote className="mb-6 leading-relaxed text-gray-700">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              <div className="flex items-center">
                <div className="mr-4 text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm font-medium text-indigo-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.button
            className="inline-flex items-center rounded-xl border border-indigo-600 bg-white px-6 py-3 text-base font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View More Testimonials
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

