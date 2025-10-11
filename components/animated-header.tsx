"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

interface AnimatedHeaderProps {
  children: ReactNode;
}

export function AnimatedHeader({ children }: AnimatedHeaderProps) {
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Usar useTransform para transformar el valor de scrollY
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["0 0 0 rgba(0,0,0,0)", "0 1px 10px rgba(0,0,0,0.1)"]
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50"
        style={{
          boxShadow,
        }}
      >
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">{children}</nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b shadow-lg z-40"
          >
            <nav className="flex flex-col p-4 space-y-4" onClick={closeMenu}>
              {children}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Background Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black/20 z-30 top-16"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
