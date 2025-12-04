"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

interface TerminalWindowProps {
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({ children, className = "" }: TerminalWindowProps) {
  return (
    <motion.div
      className={`relative rounded-lg border border-gray-700 bg-gray-900/90 backdrop-blur-sm shadow-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2 ml-4 text-gray-400 text-sm">
          <Terminal size={14} />
          <span>terminal</span>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm">
        {children}
      </div>
    </motion.div>
  );
}

