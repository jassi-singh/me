import React, { useEffect, useMemo, useState } from "react";

export default function useVisibility(
  ref: React.RefObject<Element>,
  rootMargin?: string
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        { rootMargin: rootMargin ?? "-100px" }
      ),
    [rootMargin]
  );

  useEffect(() => {
    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
