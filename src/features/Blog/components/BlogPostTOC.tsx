"use client";

import { useEffect, useRef, useState } from "react";

import { useLenis } from "@/common/components/SmoothScroll";

import { cn } from "@/lib/utils";

import type { HeadingItem } from "../utils/extract-headings";

interface BlogPostTOCProps {
  items: HeadingItem[];
  label: string;
}

export default function BlogPostTOC({ items, label }: BlogPostTOCProps) {
  const lenis = useLenis();
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);
  const [pinnedBottom, setPinnedBottom] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const lenisRef = useRef(lenis);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let raf = 0;
    const handle = () => {
      const boundary = document.querySelector<HTMLElement>(
        "[data-toc-boundary]"
      );
      if (!boundary) return;
      const navHeight = nav.offsetHeight;
      const stickyTopPx = window.innerHeight * 0.32;
      const boundaryBottom = boundary.getBoundingClientRect().bottom;
      const naturalBottom = stickyTopPx + navHeight;
      if (boundaryBottom < naturalBottom) {
        setPinnedBottom(window.innerHeight - boundaryBottom);
      } else {
        setPinnedBottom(null);
      }
    };

    const tick = () => {
      handle();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", handle);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handle);
    };
  }, []);

  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  useEffect(() => {
    if (items.length === 0) return;

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0% -70% 0%",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenisInstance = lenisRef.current;
    if (lenisInstance) {
      lenisInstance.scrollTo(el, { offset: -96 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      ref={navRef}
      aria-label={label}
      className="hidden lg:flex flex-col fixed left-16 xl:left-20 z-30 overflow-y-auto w-[14rem] max-h-[70vh] max-w-30 xl:max-w-46 2xl:max-w-80"
      style={
        pinnedBottom !== null
          ? { bottom: `${pinnedBottom}px`, top: "auto" }
          : { top: "32%" }
      }
    >
      <span className="text-[10px] uppercase tracking-[0.2em] font-inter-light text-dark/80 mb-3">
        {label}
      </span>
      <ul className="flex flex-col gap-2 border-l border-dark/15">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                className={cn(
                  "block text-left text-xs leading-snug font-inter-light pl-3 -ml-px border-l-2 transition-colors duration-200 cursor-pointer",
                  isActive
                    ? "border-dark text-dark"
                    : "border-transparent text-dark/50 hover:text-dark/80"
                )}
              >
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
