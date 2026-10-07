import { useEffect, useRef, type RefObject } from "react";

/**
 * useScrollReveal
 * Adds the "visible" class to every element matching [data-reveal]
 * inside the component root ref once it enters the viewport.
 * Supports delay via data-reveal-delay="ms" attribute.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  enabled = true
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.revealDelay ?? "0", 10);
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .stagger-children"
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [enabled]);

  return ref;
}
