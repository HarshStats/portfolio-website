"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing my Master's in <span className="font-medium">Data Science</span> at TU Dortmund. My journey has equipped me with hands-on experience in collecting, processing, and analyzing large and complex datasets. I am passionate about <span className="font-medium">statistics, machine learning, AWS, and natural language processing</span>. Recently, I have been expanding my expertise in <span className="font-medium">data engineering</span> and <span className="font-medium">MLOps</span> to build robust and scalable data solutions. I enjoy tackling challenging problems and am always eager to learn new technologies. I am currently seeking opportunities in data science and engineering roles.
      </p>

      <p>
        <span className="italic">Outside of academics and work</span>, I am actively learning <span className="font-medium">German</span> to better integrate and collaborate in international environments. In my free time, I enjoy exploring new technologies, reading about advancements in AI, and staying curious about the world. I am committed to continuous learning and personal growth.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        guitar and singing, watching movies, and cooking. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and geopolitics</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
