import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const ref = useRef(null);
  const scrollContainerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Cloud Infrastructure",
      excerpt: "Learn how to design and implement cloud-native solutions that scale with your business needs. From microservices architecture to container orchestration, discover the best practices for building robust cloud infrastructure.",
      category: "Cloud Architecture",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>In today's rapidly evolving digital landscape, building scalable cloud infrastructure is crucial for business success. This comprehensive guide explores the key principles and best practices for designing cloud-native solutions that can grow with your organization.</p>
        
        <h2>Microservices Architecture</h2>
        <p>Microservices architecture is a fundamental approach to building scalable applications. By breaking down monolithic applications into smaller, independent services, organizations can achieve greater flexibility, maintainability, and scalability.</p>
        
        <h2>Container Orchestration</h2>
        <p>Container orchestration platforms like Kubernetes provide the tools needed to manage complex distributed systems. Learn how to effectively deploy, scale, and manage containerized applications in production environments.</p>
        
        <h2>Best Practices</h2>
        <ul>
          <li>Design for failure and implement proper error handling</li>
          <li>Use auto-scaling to handle varying load patterns</li>
          <li>Implement comprehensive monitoring and logging</li>
          <li>Ensure security at every layer of your infrastructure</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building scalable cloud infrastructure requires careful planning, proper architecture design, and ongoing optimization. By following these best practices, organizations can create robust, scalable systems that support their growth and success.</p>
      `,
      tags: ["Cloud Computing", "Microservices", "Kubernetes", "Scalability"],
    },
    {
      id: 2,
      title: "DevOps Best Practices for 2024",
      excerpt: "Essential DevOps practices and tools that every engineering team should implement. From CI/CD pipelines to infrastructure as code, learn how to streamline your development workflow.",
      category: "DevOps",
      date: "2024-01-10",
      readTime: "7 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=200&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>DevOps has evolved significantly over the past decade, becoming an essential practice for modern software development. This article explores the latest best practices and tools that engineering teams should adopt in 2024.</p>
        
        <h2>CI/CD Pipeline Optimization</h2>
        <p>Continuous Integration and Continuous Deployment pipelines are the backbone of modern DevOps practices. Learn how to build efficient, reliable pipelines that accelerate your development process while maintaining quality.</p>
        
        <h2>Infrastructure as Code</h2>
        <p>Infrastructure as Code (IaC) enables teams to manage infrastructure using the same version control and testing practices as application code. Discover how tools like Terraform and CloudFormation can transform your infrastructure management.</p>
        
        <h2>Monitoring and Observability</h2>
        <p>Effective monitoring and observability are crucial for maintaining system reliability. Learn about modern monitoring tools and practices that provide deep insights into your application performance.</p>
        
        <h2>Security in DevOps</h2>
        <p>Security should be integrated into every stage of the DevOps pipeline. Explore DevSecOps practices that ensure security is built into your development process from the ground up.</p>
      `,
      tags: ["DevOps", "CI/CD", "Infrastructure as Code", "Monitoring"],
    },
    {
      id: 3,
      title: "Cybersecurity in the Cloud Era",
      excerpt: "Protecting your applications and data in modern cloud environments. Explore security best practices, threat detection, and compliance frameworks for cloud-native applications.",
      category: "Security",
      date: "2024-01-05",
      readTime: "6 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>As organizations increasingly adopt cloud technologies, cybersecurity has become more complex and critical than ever. This comprehensive guide explores the security challenges and solutions for cloud-native applications.</p>
        
        <h2>Cloud Security Challenges</h2>
        <p>Cloud environments introduce unique security challenges, including shared responsibility models, dynamic infrastructure, and increased attack surfaces. Understanding these challenges is the first step toward effective security.</p>
        
        <h2>Security Best Practices</h2>
        <p>Implementing security best practices is essential for protecting cloud workloads. Learn about identity and access management, network security, data encryption, and other critical security measures.</p>
        
        <h2>Threat Detection and Response</h2>
        <p>Modern threat detection systems use machine learning and behavioral analysis to identify potential security threats. Discover how to implement effective threat detection and response strategies.</p>
        
        <h2>Compliance and Governance</h2>
        <p>Meeting regulatory requirements and maintaining compliance is crucial for organizations operating in regulated industries. Learn about frameworks like SOC 2, ISO 27001, and GDPR compliance in cloud environments.</p>
      `,
      tags: ["Cybersecurity", "Cloud Security", "Compliance", "Threat Detection"],
    },
    {
      id: 4,
      title: "AI/ML Integration in Enterprise Systems",
      excerpt: "How to successfully integrate artificial intelligence and machine learning into existing enterprise infrastructure. From data pipelines to model deployment strategies.",
      category: "AI/ML",
      date: "2024-01-03",
      readTime: "8 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>Artificial Intelligence and Machine Learning are transforming enterprise systems, enabling organizations to gain insights from data and automate complex processes. This guide explores successful AI/ML integration strategies.</p>
        
        <h2>Data Pipeline Architecture</h2>
        <p>Building robust data pipelines is fundamental to successful AI/ML integration. Learn how to design scalable data architectures that can handle the volume, velocity, and variety of enterprise data.</p>
        
        <h2>Model Development and Training</h2>
        <p>Developing and training machine learning models requires careful consideration of data quality, feature engineering, and model selection. Discover best practices for building effective ML models.</p>
        
        <h2>Model Deployment and MLOps</h2>
        <p>Deploying ML models in production requires specialized practices and tools. Learn about MLOps principles, model versioning, and deployment strategies that ensure reliable model performance.</p>
        
        <h2>Ethical AI and Governance</h2>
        <p>As AI systems become more prevalent, ensuring ethical AI practices and proper governance is crucial. Explore frameworks for responsible AI development and deployment.</p>
      `,
      tags: ["AI/ML", "Data Pipelines", "MLOps", "Ethical AI"],
    },
    {
      id: 5,
      title: "Automation Strategies for IT Operations",
      excerpt: "Streamline your IT operations with intelligent automation. Learn about RPA, workflow automation, and reducing manual tasks in enterprise environments.",
      category: "Automation",
      date: "2023-12-28",
      readTime: "6 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>IT operations automation is essential for modern organizations seeking to improve efficiency, reduce errors, and scale their operations. This comprehensive guide explores automation strategies and tools.</p>
        
        <h2>Robotic Process Automation (RPA)</h2>
        <p>RPA enables organizations to automate repetitive, rule-based tasks that were previously performed manually. Learn how to identify automation opportunities and implement RPA solutions effectively.</p>
        
        <h2>Workflow Automation</h2>
        <p>Workflow automation streamlines business processes by automating the flow of tasks and information between systems and people. Discover how to design and implement effective workflow automation.</p>
        
        <h2>Infrastructure Automation</h2>
        <p>Automating infrastructure provisioning, configuration, and management reduces manual effort and improves consistency. Learn about tools and practices for infrastructure automation.</p>
        
        <h2>Measuring Automation Success</h2>
        <p>Measuring the success of automation initiatives is crucial for demonstrating value and identifying improvement opportunities. Explore key metrics and KPIs for automation projects.</p>
      `,
      tags: ["Automation", "RPA", "Workflow", "Infrastructure"],
    },
    {
      id: 6,
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world case studies of successful digital transformation initiatives. Learn from organizations that have successfully modernized their technology stack.",
      category: "Digital Transformation",
      date: "2023-12-20",
      readTime: "9 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>Digital transformation is a journey that requires careful planning, strong leadership, and a clear vision. This article explores real-world success stories and the lessons learned from successful digital transformation initiatives.</p>
        
        <h2>Case Study 1: Financial Services Modernization</h2>
        <p>A leading financial institution successfully modernized its legacy systems, implementing cloud-native solutions and improving customer experience while reducing operational costs by 40%.</p>
        
        <h2>Case Study 2: Healthcare Digital Innovation</h2>
        <p>A healthcare organization transformed its patient care delivery through digital innovation, implementing telemedicine solutions and improving patient outcomes while increasing operational efficiency.</p>
        
        <h2>Case Study 3: Manufacturing 4.0</h2>
        <p>A manufacturing company embraced Industry 4.0 principles, implementing IoT sensors, predictive analytics, and automated quality control systems, resulting in 30% improvement in production efficiency.</p>
        
        <h2>Key Success Factors</h2>
        <p>Successful digital transformation initiatives share common characteristics: strong leadership commitment, clear vision and strategy, employee engagement, and a focus on customer value.</p>
        
        <h2>Lessons Learned</h2>
        <p>Digital transformation is not just about technology; it's about people, processes, and culture. Organizations that succeed focus on change management, continuous learning, and iterative improvement.</p>
      `,
      tags: ["Digital Transformation", "Case Studies", "Innovation", "Change Management"],
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft >= scrollWidth - clientWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 6000); // Auto-scroll every 6 seconds

    return () => clearInterval(interval);
  }, [isInView]);

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

        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 rounded-full bg-white dark:bg-gray-800 p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="size-6 text-gray-600 dark:text-gray-300" />
          </motion.button>

          <motion.button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white dark:bg-gray-800 p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="size-6 text-gray-600 dark:text-gray-300" />
          </motion.button>

          <motion.div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                className="min-w-[350px] max-w-[350px] overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-700"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
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
                  
                  <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">
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
                      onClick={() => setSelectedPost(post)}
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
        </div>

        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Link to="/blog">
            <motion.button
              className="inline-flex items-center rounded-xl border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View All Articles
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white dark:bg-gray-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white dark:bg-gray-700 p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <X className="size-5 text-gray-600 dark:text-gray-300" />
              </button>

              {/* Hero Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block rounded-full bg-indigo-100 dark:bg-indigo-900 px-3 py-1 text-xs font-medium text-indigo-800 dark:text-indigo-200 mb-3">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Meta Information */}
                <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="size-4 mr-1" />
                    <span>
                      {new Date(selectedPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="size-4 mr-1" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <span>By {selectedPost.author}</span>
                  </div>
                </div>

                {/* Blog Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-h2:text-gray-900 dark:prose-h2:text-white prose-h3:text-gray-900 dark:prose-h3:text-white prose-h4:text-gray-900 dark:prose-h4:text-white prose-h5:text-gray-900 dark:prose-h5:text-white prose-h6:text-gray-900 dark:prose-h6:text-white prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-pre:text-gray-100 dark:prose-pre:text-gray-100 prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <Tag className="size-4 mr-2 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <Link to="/blog">
                    <motion.button
                      className="w-full rounded-lg border border-indigo-600 bg-transparent px-6 py-3 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900/20 transition-colors sm:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View All Articles
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={() => setSelectedPost(null)}
                    className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition-colors sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close Article
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

