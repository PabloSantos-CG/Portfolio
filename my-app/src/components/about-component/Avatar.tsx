import { motion } from "framer-motion";
import Image from "next/image";

export default function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ delay: 0.3, duration: 1.5 }}
      className="flex justify-end flex-1"
    >
      <Image
        src="/profile.png"
        alt="Avatar"
        width={320}
        height={320}
        quality={70}
        className="rounded-full border-4 border-white"
      />
    </motion.div>
  );
}
