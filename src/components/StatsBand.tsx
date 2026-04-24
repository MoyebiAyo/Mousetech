"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "4.9 / 5", label: "Average Client Rating" },
  { value: "7 Days", label: "Average Launch Time" },
];

export default function StatsBand() {
  return (
    <section className="py-16 border-t border-b" style={{ borderColor: '#eaeaea' }}>
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="md:border-r last:md:border-r-0 px-4" style={{ borderColor: '#eaeaea' }}
            >
              <div className="font-serif text-4xl md:text-5xl font-bold leading-none mb-2" style={{ color: '#000', letterSpacing: '-0.03em' }}>
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-medium" style={{ color: '#666' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
