"use client";
import React, { useEffect } from "react";
import { motion, useScroll, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { clientSteps, providerSteps } from "../collections/data";
import HeaderText from "../components/HeaderText";
import DesktopView from "../components/howItWorks/DesktopView";
import MobileView from "../components/howItWorks/MobileView";

const HowItWorks = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.4", "end 0.9"],
  });

  const [view, setView] = useState<"client" | "provider">("client");
  const steps = view === "client" ? clientSteps : providerSteps;
  
  return (
    <section
      id="how-it-works"
      ref={ref}
      className=" w-full bg-primary-200/50 py-16 font-inter text-white"
    >
      <div className="max-w-4xl mx-auto">
         <div className="text-center mb-16">
        <HeaderText className="text-primary-100">How Uni-SkillsMart Works</HeaderText>
        <button
          onClick={() => setView(view === "client" ? "provider" : "client")}
          className="mt-7 px-6 py-2 bg-gray-300 border border-primary-100 text-primary-100 font-semibold rounded-md hover:bg-primary-200 transition duration-300 ease-in-out"
        >
          {view === "client" ? "View Provider Steps" : "View Client Steps"}
        </button>
      </div>
      {/* for progressbar and content */}
      <DesktopView className="hidden md:block" steps={steps} view={view} scrollYProgress={scrollYProgress}/>
      <MobileView className="block md:hidden" steps={steps} view={view} scrollYProgress={scrollYProgress}/>
      </div>
     
    </section>
  );
};

export default HowItWorks;
