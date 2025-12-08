import { Steps } from "@/app/collections/types";
import { AnimatePresence, motion, MotionValue } from "framer-motion";

type Props = {
  className: string;
  view: "client" | "provider";
  steps: Steps[];
  scrollYProgress: MotionValue<number>;
};

const MobileView = ({ className, view, steps}: Props) => {
  return (
    <div className={`${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={view} // important for AnimatePresence to detect change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10 relative z-10 px-5 xs:px-16"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              viewport={{ once: true, margin: "-10%" }} // triggers earlier, no blank screen
              className="flex flex-col gap-2"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 transition-colors duration-300 bg-primary-200 text-white border-primary-100">
                        <step.icon className="w-7 h-7" />
                      </div>
              <h3 className="text-xl font-bold text-primary-100">{step.title}</h3>
              <p className="text-gray-900">{step.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MobileView;
