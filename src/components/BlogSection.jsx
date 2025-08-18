import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Cloud Infrastructure",
      excerpt: "Learn how to design and implement cloud-native solutions that scale with your business needs.",
      category: "Cloud Architecture",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "DevOps Best Practices for 2024",
      excerpt: "Essential DevOps practices and tools that every engineering team should implement.",
      category: "DevOps",
      date: "2024-01-10",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Cybersecurity in the Cloud Era",
      excerpt: "Protecting your applications and data in modern cloud environments.",
      category: "Security",
      date: "2024-01-05",
      readTime: "6 min read",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="bg-gray-50 py-20 dark:bg-gray-800"
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
            className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Latest Insights
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            Sharing knowledge and experiences from the world of cloud computing, 
            DevOps, and digital transformation.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-700"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                
                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  
                  <motion.button
                    className="font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.button
            className="inline-flex items-center rounded-xl border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

