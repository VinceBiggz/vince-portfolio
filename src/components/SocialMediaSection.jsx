import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ExternalLink,
  Users,
  MessageCircle,
  Heart
} from "lucide-react";

export default function SocialMediaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialPlatforms = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/VinceBiggz",
      username: "@VinceBiggz",
      followers: "1.2k",
      description: "Open source contributions and code repositories",
      color: "bg-gray-900 hover:bg-gray-800",
      textColor: "text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vincentwachira",
      username: "@vincentwachira",
      followers: "850+",
      description: "Professional network and industry connections",
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/VinceBiggz",
      username: "@VinceBiggz",
      followers: "650+",
      description: "Tech insights and industry updates",
      color: "bg-blue-400 hover:bg-blue-500",
      textColor: "text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/vincentwachira",
      username: "@vincentwachira",
      followers: "450+",
      description: "Behind-the-scenes and personal updates",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      textColor: "text-purple-600",
    },
  ];

  const stats = [
    {
      icon: Users,
      label: "Total Followers",
      value: "3.1k+",
      description: "Across all platforms",
    },
    {
      icon: MessageCircle,
      label: "Engagement Rate",
      value: "8.5%",
      description: "Average interaction",
    },
    {
      icon: Heart,
      label: "Content Reach",
      value: "25k+",
      description: "Monthly impressions",
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
      className="bg-gray-50 py-20"
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
            Connect With Me
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-xl text-gray-600"
            variants={itemVariants}
          >
            Stay updated with my latest projects, insights, and industry thoughts 
            across various social media platforms.
          </motion.p>
        </motion.div>

        {/* Social Media Stats */}
        <motion.div
          className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl bg-white p-6 text-center shadow-lg"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-indigo-100">
                <stat.icon className="size-6 text-indigo-600" />
              </div>
              <div className="mb-2 text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="mb-1 text-lg font-medium text-gray-700">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Platforms */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {socialPlatforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className={`inline-flex size-10 items-center justify-center rounded-lg ${platform.color} text-white`}>
                  <platform.icon className="size-5" />
                </div>
                <ExternalLink className="size-4 text-gray-400 transition-colors group-hover:text-gray-600" />
              </div>
              
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {platform.name}
              </h3>
              
              <p className="mb-3 text-sm text-gray-600">
                {platform.username}
              </p>
              
              <div className="mb-2 text-2xl font-bold text-gray-900">
                {platform.followers}
              </div>
              
              <p className="text-sm leading-relaxed text-gray-500">
                {platform.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 rounded-2xl bg-white p-8 shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Stay Updated
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">
              Get the latest insights on cloud computing, DevOps, and digital transformation 
              delivered directly to your inbox.
            </p>
            
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.button
                className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

