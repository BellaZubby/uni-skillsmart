import { Steps } from "@/app/collections/types";
import { motion, AnimatePresence, MotionValue } from "framer-motion";

type Props = {
  className: string;
  view: "client" | "provider";
  steps: Steps[];
  scrollYProgress: MotionValue<number>;
};

const DesktopView = ({ className, view, steps, scrollYProgress }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2" />
      {/* vertical divider with scroll progress */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-1/2 top-0 w-1 h-full bg-primary-100 origin-top -translate-x-1/2"
      />

      {/* animate presence handles cross-fade between cleint/provider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view} // important for AnimatePresence to detect change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-24 relative z-10"
        >
          {steps.map((step, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                //   whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin:"-10%" }}
                className="flex flex-col md:flex-row items-center justify-between w-full"
              >
                {i % 2 === 0 ? ( // for items with even numbers as index to create the alternating arrangement
                  <>
                    {/* icon left */}
                    <div className="md:w-1/2 flex justify-end pr-12">
                      <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 transition-colors duration-300 bg-primary-200 text-white border-primary-100">
                        <step.icon className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="md:w-1/2 pl-12 text-left md:text-left flex flex-col gap-4">
                      <span className="font-bold text-3xl text-primary-100">
                        {step.stepNumber}
                      </span>
                      <h3 className="text-xl font-bold text-primary-100">
                        {step.title}
                      </h3>
                      <p className="text-gray-900">{step.detail}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* text left */}
                    <div className="md:w-1/2 pr-12 text-right flex flex-col gap-4">
                      <span className="font-bold text-3xl text-primary-100">
                        {step.stepNumber}
                      </span>
                      <h3 className="text-xl font-bold text-primary-100">
                        {step.title}
                      </h3>
                      <p className="text-gray-900">{step.detail}</p>
                    </div>

                    {/* icon right */}
                    <div className="md:w-1/2 pl-12">
                      <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 transition-colors duration-300 bg-primary-200 text-white border-primary-100">
                        <step.icon className="w-10 h-10" />
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DesktopView;
