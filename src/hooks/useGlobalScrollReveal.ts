import { useEffect } from "react";

/**
 * useGlobalScrollReveal
 * Attach once in <App /> to observe ALL .reveal* elements on every page.
 * Uses a MutationObserver to pick up elements added after initial render.
 */
export function useGlobalScrollReveal() {
  useEffect(() => {
    const SELECTORS = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .stagger-children";

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const observe = (root: Document | Element) => {
      root.querySelectorAll<HTMLElement>(SELECTORS).forEach((el) => {
        if (!el.classList.contains("visible")) observer.observe(el);
      });
    };

    // Observe existing elements
    observe(document);

    // Watch for new elements added to the DOM
    const mutation = new MutationObserver((records) => {
      records.forEach((r) => {
        r.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            if (node.matches(SELECTORS)) observer.observe(node as HTMLElement);
            observe(node);
          }
        });
      });
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}
