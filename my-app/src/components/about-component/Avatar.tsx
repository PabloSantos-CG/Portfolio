import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Avatar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="hidden md:flex justify-end flex-1"
    >
      <Image
        src="/profile.webp"
        alt="Avatar"
        width={320}
        height={320}
        quality={70}
        className="rounded-full border-4 border-white"
      />
    </motion.div>
  );
}
