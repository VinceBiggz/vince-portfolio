import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const testimonials = [
    {
      id: 1,
      name: "Tridiv Vasavada",
      role: "CTO",
      company: "Wasoko",
      content: "I worked with Vincent for little less than a year. He reported to me directly initially. However Vincent came into my org where IT was mostly manual with little to no focus on cybersecurity. Vincent was quick to get up to speed and started taking comprehensive view of variety of services IT org was providing. One of his primary contribution was to standardize our tier-1 and tier-2 support process by applying automation in JIRA to make the system act similar to pager duty. He also changed the team mindset to develop knowledge base and move towards automation and self service. He was also skillful at taking over existing org with where some support engineers had old loyalties but still carried deeper support knowledge and strong work ethic. I was happy with how he managed to create a team environment in such dynamics by developing trust and getting into details himself. Overall, I could see Vincent has clear potential to take over IT, support and security team under him and increase his scope. He is a great asset and is under utilized due to lack of growth opportunities in Africa.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      id: 2,
      name: "Samuel Aduamah-Yeboah",
      role: "Senior Networks and Security Manager",
      company: "Victory Farms",
      content: "Vincent is a talented professional who always prioritizes his work, is committed to critical thinking, and likes to delve into the root cause of a challenge or an issue. Using his \"5 whys\" method, he transformed his subordinates into change catalysts over time. He is committed to cost-saving ideas, especially during cloud migration discussions around the table.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      id: 3,
      name: "Edwin Rimui",
      role: "Senior Application Developer",
      company: "National Bank of Kenya",
      content: "Vincent is an exceptional colleague who consistently demonstrates uncommon dedication. His work ethic is exemplary, combining reliability with adaptability that makes him invaluable in any situation. What truly sets Vincent apart is his genuine willingness to go beyond expectations to support team members - something I've personally experienced numerous times. His collaborative approach, combined with his professional expertise, makes him someone I cannot recommend highly enough as a colleague and team member.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      id: 4,
      name: "Jackline Njeri",
      role: "HR and People Manager",
      company: "Odex Chemicals Ltd",
      content: "Vincent had very good technical skills in IT, good personality, good communication skills, good interpersonal skills, and abides by company regulations. He worked well with other departments especially training them on how to automate processes using power automate. I would recommend him for the IT role in the organization.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      id: 5,
      name: "Priya Ramaraj",
      role: "HR and People Manager",
      company: "Wasoko",
      content: "I am pleased to recommend Vincent for his exceptional leadership as the Programmatic Head of IT. Vincent's remarkable skills in navigating positive change management within his department have significantly contributed to the organization's success. His adeptness at fostering collaboration and facilitating effective communication has made it remarkably easy to navigate through various transitions, ensuring smooth and successful outcomes. Vincent's visionary approach and dedication to fostering a positive work culture have truly set him apart as an exemplary leader. I enthusiastically support Vincent for any leadership position, confident in his ability to drive innovation and inspire excellence.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      id: 6,
      name: "Jonathan Lungu",
      role: "Senior Technical Support Engineer",
      company: "Wasoko",
      content: "As a leader one of the most important skills Vincent possesses is the ability to not only listen before advising, but also trusting his team to proceed accordingly. This inspires and motivates everyone around him, making him very approachable. Vincent's focus on his teams individual improvements brings a sense of responsibility and willingness for everyone he meets to want to do better. His leadership methods provides a sense of belonging that most people look for in a mentor, and he leads by example to those who want to become leaders one day. Any organization would definitely benefit from having Vincent on their team.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      id: 7,
      name: "Reuben Muraya",
      role: "Senior Technical Support Engineer",
      company: "Wasoko",
      content: "I highly recommend Vincent for his exceptional leadership. As our manager, he consistently demonstrated strategic acumen, fostering a collaborative and results-driven environment. Vincent excels in communication, motivates teams effectively, and actively supports professional growth. His dedication and skills make him an asset to any organization.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      id: 8,
      name: "Fabian Kimambo",
      role: "Senior Technical Support Engineer",
      company: "Wasoko",
      content: "I am delighted to recommend Vincent for his exceptional skills and expertise as a Tech Support Engineer Specialist. During our time working together, Vincent consistently demonstrated an unparalleled level of professionalism, dedication, and technical proficiency. Vincent possesses a deep understanding of technical systems and a keen ability to troubleshoot and resolve complex issues efficiently. His problem-solving skills are truly remarkable, and he approaches challenges with a systematic and analytical mindset, always ensuring that issues are not only addressed but also prevented from reoccurring. What truly sets Vincent apart is his unwavering commitment to customer satisfaction. He goes above and beyond to ensure that clients receive the highest level of support and assistance, consistently exceeding their expectations. Vincent's excellent communication skills enable him to convey technical concepts in a clear and understandable manner, fostering strong relationships with clients and earning their trust and confidence. Furthermore, Vincent is a valuable team player who collaborates effectively with colleagues to deliver outstanding results. His positive attitude, willingness to help others, and ability to work under pressure make him a highly valuable asset to any team. In conclusion, I wholeheartedly recommend Vincent for any role that requires a skilled and dedicated Tech Support Engineer Specialist. His brilliant skills, professionalism, and commitment to excellence make him an invaluable asset to any organization.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      id: 9,
      name: "Harrison Muhia",
      role: "IT Manager",
      company: "Wasoko",
      content: "I am writing to express my sincere recommendation for Vincent Wachira, with whom I have had the privilege of working closely during my time at Wasoko. As IT Manager, I had the opportunity to observe Mr Vincent Wachira in various capacities and can attest to their exceptional leadership qualities, dedication, and expertise. During his tenure as my boss, Vincent Wachira consistently demonstrated strong leadership skills. He effectively guided our team through ICT Project, providing clear direction, support, and motivation. His ability to communicate goals and expectations clearly contributed significantly to the success of our team's endeavors. Furthermore, Vincent Wachira has a remarkable ability to foster a positive and collaborative work environment. He actively encouraged open communication, welcomed feedback, and valued the contributions of every team member. His approachable demeanor and willingness to listen created a sense of trust and camaraderie among the team, leading to increased productivity and morale. In addition to his leadership skills, Vincent Wachira possesses a wealth of expertise in Tech Field. He consistently demonstrated a deep understanding of IT Management, AI/ML, RPA, AWS, AZURE and Google, providing invaluable insights and guidance that propelled our projects forward. His strategic thinking and problem-solving abilities were instrumental in overcoming challenges and achieving our objectives. Overall, I wholeheartedly recommend Vincent Wachira for any leadership position or opportunity. He exemplify the qualities of an exceptional leader and have made a significant impact on both our team and the organization as a whole.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      id: 10,
      name: "Maurice Eilec",
      role: "Technology Leader and Cybersecurity Advocate",
      company: "4SquareIT",
      content: "Vincent is an exceptional person and a very interesting character. His passion for technology combined with his hunger for knowledge and abilities are dangerously good, seriously. I had a pleasure of interviewing him in multiple rounds to join my IT support team and while at the time he only ended in the second place out of over 300 candidates, there was unfortunately only one position available. I would not hesitate for a moment to offer him a job if I would have a second chance, so wherever Vincent ends, he'll make his manager and the firm very proud and very lucky to have him. Vincent is there to make an impact! Good luck wherever your career takes you.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      id: 11,
      name: "Nick Rotich",
      role: "Vice President and Application Developer",
      company: "JPMorgan Chase",
      content: "I've known Vincent for well over 20 years and throughout that time, I've seen his work ethic and consistent pursuit of knowledge, and desire to develop oneself. Vincent has a deep knowledge and expertise to be individually responsible for the implementation of a specific deliverable. His great communication and interpersonal skills are a great asset to any team. Vincent has consistently shown that he can work on multiple tasks within a high-pressure environment while meeting service quality and turnaround times. I highly recommend Vincent.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      id: 12,
      name: "Samuel Ratemo",
      role: "Senior Software Engineer III",
      company: "ASRC Federal",
      content: "I strongly recommend Vincent for any ICT management role. His expertise in communication, budgeting, information security, infrastructure management, and IT infrastructure management is exceptional. He possess excellent interpersonal skills, can manage budgets effectively, and has a thorough understanding of the latest technologies and industry best practices. He is an asset to any organization, and I am confident that he will excel in any ICT management role he undertakes.",
      rating: 5,
      avatar: "👨‍💻",
    },
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Client Testimonials
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Don&apos;t just take my word for it. Here&apos;s what industry leaders, 
            colleagues, and clients have to say about working together.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-shadow h-80 flex flex-col"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              
              <blockquote className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300 flex-grow overflow-hidden">
                &ldquo;{truncateText(testimonial.content, 120)}&rdquo;
              </blockquote>
              
              <div className="flex items-center mb-4">
                <div className="mr-3 text-2xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {testimonial.content.length > 120 && (
                <motion.button
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className="w-full text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </motion.button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Full Testimonial */}
      {selectedTestimonial && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedTestimonial(null)}
        >
          <motion.div
            className="max-w-4xl w-full rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6">
              <StarRating rating={selectedTestimonial.rating} />
            </div>
            
            <blockquote className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              &ldquo;{selectedTestimonial.content}&rdquo;
            </blockquote>
            
            <div className="flex items-center mb-6">
              <div className="mr-4 text-4xl">{selectedTestimonial.avatar}</div>
              <div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedTestimonial.name}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400">
                  {selectedTestimonial.role}
                </div>
                <div className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  {selectedTestimonial.company}
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => setSelectedTestimonial(null)}
              className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
