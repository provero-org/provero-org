"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface DropdownNavProps {
  label: string;
  items: NavDropdownItem[];
}

export function DropdownNav({ label, items }: DropdownNavProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[0.938rem] font-medium text-slate/60 transition-colors hover:text-navy hover:bg-neutral-100/80"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-neutral-200/80 bg-white p-2 shadow-xl shadow-black/[0.08]"
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3.5 py-2.5 text-[0.875rem] font-medium text-slate/70 transition-colors hover:text-navy hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
                {item.description && (
                  <span className="block mt-0.5 text-xs font-normal text-slate/40">
                    {item.description}
                  </span>
                )}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MobileAccordionProps {
  label: string;
  items: NavDropdownItem[];
  onNavigate: () => void;
}

export function MobileAccordion({ label, items, onNavigate }: MobileAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        className="flex w-full items-center justify-between py-3 text-sm font-medium text-slate/70"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-4 space-y-1">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg py-2 px-3 text-sm text-slate/50 hover:text-navy hover:bg-neutral-50"
                  onClick={onNavigate}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
