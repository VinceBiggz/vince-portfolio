import { motion } from "framer-motion";

export default function LoadingSkeleton({ type = "card", count = 3 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const pulseVariants = {
    initial: { opacity: 0.6 },
    animate: { opacity: 1 },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const renderSkeleton = () => {
    switch (type) {
      case "blog-card":
        return (
          <motion.div
            className="min-w-[350px] max-w-[350px] overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-700"
            variants={itemVariants}
          >
            <motion.div
              className="h-48 w-full bg-gray-200 dark:bg-gray-600"
              variants={pulseVariants}
              initial="initial"
              animate="animate"
            />
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <motion.div
                  className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
              
              <motion.div
                className="mb-3 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-600"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
              
              <div className="mb-4 space-y-2">
                <motion.div
                  className="h-4 w-full rounded bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <motion.div
                  className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
            </div>
          </motion.div>
        );

      case "testimonial":
        return (
          <motion.div
            className="min-w-[350px] max-w-[350px] rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-700"
            variants={itemVariants}
          >
            <div className="mb-4 flex items-center gap-4">
              <motion.div
                className="size-12 rounded-full bg-gray-200 dark:bg-gray-600"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
              <div className="flex-1">
                <motion.div
                  className="mb-1 h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  className="h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <motion.div
                className="h-4 w-full rounded bg-gray-200 dark:bg-gray-600"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
              <motion.div
                className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-600"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
              <motion.div
                className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-600"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
            </div>
          </motion.div>
        );

      case "project-card":
        return (
          <motion.div
            className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-700"
            variants={itemVariants}
          >
            <motion.div
              className="h-48 w-full bg-gray-200 dark:bg-gray-600"
              variants={pulseVariants}
              initial="initial"
              animate="animate"
            />
            <div className="p-6">
              <motion.div
                className="mb-2 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-600"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
              
              <div className="mb-4 space-y-2">
                <motion.div
                  className="h-4 w-full rounded bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-600"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-600"
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        );

      default:
        return (
          <motion.div
            className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700"
            variants={itemVariants}
          >
            <motion.div
              className="mb-4 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-600"
              variants={pulseVariants}
              initial="initial"
              animate="animate"
            />
            <div className="space-y-2">
              <motion.div
                className="h-4 w-full rounded bg-gray-200 dark:bg-gray-600"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
              <motion.div
                className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-600"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
              <motion.div
                className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-600"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
            </div>
          </motion.div>
        );
    }
  };

  return (
    <motion.div
      className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Array.from({ length: count }, (_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </motion.div>
  );
}
