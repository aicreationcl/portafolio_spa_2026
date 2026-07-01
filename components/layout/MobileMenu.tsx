"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "@/components/icons";
import { menuPanel } from "@/lib/motion";
import { Nav } from "@/components/layout/Nav";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    function getFocusable() {
      return Array.from(wrapperRef.current?.querySelectorAll<HTMLElement>("a, button") ?? []);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-foreground hover:bg-surface-high focus-visible:outline-primary rounded-sm p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu-panel"
            ref={panelRef}
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            exit={shouldReduceMotion ? undefined : "hidden"}
            variants={menuPanel}
            className="border-border bg-surface absolute inset-x-0 top-full border-b px-6 py-8 shadow-sm"
          >
            <Nav onNavigate={() => setIsOpen(false)} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
