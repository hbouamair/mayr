"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Item = { src: string; alt: string };

export function AboutGallery({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [items.length]);

  return (
    <div className="grid min-w-0 gap-5 overflow-x-clip sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {items.map((item, i) => (
        <figure
          key={item.src}
          className={`group relative overflow-hidden rounded-[1.35rem] border border-white/55 bg-white/25 shadow-[0_20px_48px_-22px_rgba(36,28,23,0.14)] ring-1 ring-gold-logo/10 transition duration-700 ${
            i === active
              ? "ring-2 ring-terracotta/35 shadow-[0_24px_56px_-18px_rgba(166,75,42,0.18)] sm:scale-[1.02]"
              : "opacity-92 hover:opacity-100"
          }`}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              quality={100}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
