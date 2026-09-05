import { useEffect, useRef, type ReactNode, type ElementType } from "react";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  initialShow = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  initialShow?: boolean;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        }),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal${initialShow ? " show" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Tag>
  );
}
