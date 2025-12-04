"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Database } from "lucide-react";

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  description: string;
  delay?: number;
}

export function MetricCard({ icon: Icon, label, value, description, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 border border-gray-700 backdrop-blur-sm overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon className="text-blue-400" size={32} />
          <div className="text-right">
            <p className="text-3xl font-bold text-blue-400">{value}</p>
            <p className="text-sm text-gray-400">{label}</p>
          </div>
        </div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

export function MetricsSection() {
  const metrics = [
    {
      icon: Users,
      label: "Users",
      value: "200K+",
      description: "Active users across platforms",
    },
    {
      icon: Zap,
      label: "Performance",
      value: "<100ms",
      description: "Average API response time",
    },
    {
      icon: Database,
      label: "Queries",
      value: "1M+",
      description: "Database queries optimized",
    },
    {
      icon: TrendingUp,
      label: "Uptime",
      value: "99.9%",
      description: "System availability",
    },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <TrendingUp className="text-blue-400" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Performance Metrics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              icon={metric.icon}
              label={metric.label}
              value={metric.value}
              description={metric.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

