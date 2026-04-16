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
    <section className="py-12" style={{ background: '#f7f9fc', borderTop: '1px solid #dce6f0', borderBottom: '1px solid #dce6f0' }}>
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="font-serif text-4xl md:text-5xl font-bold leading-none mb-2" style={{ color: '#0d1b2a' }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: '#8a9ab0' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
