"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import './AnimatedCard.css';
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 15;
  };

  return (
    <div className="animated-card-container">
      <div className="md:mx-auto md:text-center md:max-w-7xl xl:max-w-none md:pt-6">
        <Heading>Beautiful Visualization Toolkit</Heading>
        <Subheading>
          Evaluate your trading strategy with our tailored visual analytics and customizable dashboards.
        </Subheading>
      </div>
      <div className="animated-card-grid pt-[60px] pb-[60px]">
        <div>
          <div className="animated-card-image-container">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="animated-card-image">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="animated-card-image-content" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="animated-card-text-container, pl-[20px]">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}>
            <h3 className="animated-card-title">
              {testimonials[active].name}
            </h3>
            <p className="animated-card-designation">
              {testimonials[active].designation}
            </p>
            <motion.p className="animated-card-quote">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="animated-card-quote-word">
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="animated-card-buttons">
            <button
              onClick={handlePrev}
              className="animated-card-button">
              <IconArrowLeft className="animated-card-icon" />
            </button>
            <button
              onClick={handleNext}
              className="animated-card-button">
              <IconArrowRight className="animated-card-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
