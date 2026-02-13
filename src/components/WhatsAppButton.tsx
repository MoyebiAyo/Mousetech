"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "2348078933943"; // Replace with actual WhatsApp number

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[90] w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
    </motion.a>
  );
}
