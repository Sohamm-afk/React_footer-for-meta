import { useEffect, useState, useRef } from 'react';

/*
 * Scroll-triggered "Back to top" control.
 * Hidden until the page is scrolled past a threshold, then shown.
 * Scrolls smoothly to the top (respects prefers-reduced-motion).
 */
export default function BackToTop({ threshold = 300 }) {
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    setVisible(window.scrollY > threshold);

    const onScroll = () => {
      rafRef.current = requestAnimationFrame(() => {
        setVisible(window.scrollY > threshold);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [threshold]);

  const handleClick = () => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <button
      className={`backToTop ${visible ? 'visible' : ''}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14" />
        <path d="m7 10 5-5 5 5" />
      </svg>
    </button>
  );
}
