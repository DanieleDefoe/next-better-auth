"use client";

import useEmblaCarousel from "embla-carousel-react";

export default function Carousel() {
  const [emlaRef] = useEmblaCarousel();

  return (
    <div ref={emlaRef}>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
