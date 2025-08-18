import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    // Simulate API call (replace with actual newsletter service)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically call your newsletter service
      // For now, we'll simulate success
      setStatus("success");
      setMessage("Thank you for subscribing! You'll receive updates soon.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
              <Mail className="size-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Stay Updated with Tech Insights
            </h2>
            
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Get the latest insights on cloud architecture, DevOps best practices, and emerging technologies delivered to your inbox.
            </p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="mx-auto max-w-md" variants={itemVariants}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-gray-800"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading" ? (
                  <div className="flex items-center gap-2">
                    <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Subscribing...
                  </div>
                ) : (
                  "Subscribe"
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Status Message */}
          {message && (
            <motion.div
              className="mt-4 flex items-center justify-center gap-2 rounded-lg p-3 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {status === "success" ? (
                <>
                  <CheckCircle className="size-4 text-green-500" />
                  <span className="text-green-700 dark:text-green-400">{message}</span>
                </>
              ) : (
                <>
                  <AlertCircle className="size-4 text-red-500" />
                  <span className="text-red-700 dark:text-red-400">{message}</span>
                </>
              )}
            </motion.div>
          )}

          <motion.p 
            className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400"
            variants={itemVariants}
          >
            No spam, unsubscribe at any time. We respect your privacy.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
