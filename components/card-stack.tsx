"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { FireworksOverlay } from "@/components/fireworks";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCard002Props) => {
  const container = useRef(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const imageElements = imageRefs.current;
      const totalCards = imageElements.length;

      if (!imageElements[0]) return;

      gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!imageElements[i]) continue;
        gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageElements[i];
        const nextImage = imageElements[i + 1];
        const position = i;
        if (!currentImage || !nextImage) continue;

        scrollTimeline.to(
          currentImage,
          {
            scale: 0.7,
            rotation: 5,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextImage,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <div className={cn("relative h-full w-full", className)} ref={container}>
      <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={cn(
            "relative h-[90%] w-full max-w-sm overflow-hidden rounded-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl",
            containerClassName,
          )}
        >
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={encodeURIComponent(card.image)}
              alt={card.alt || ""}
              className={cn(
                "rounded-4xl absolute h-full w-full object-cover",
                imageClassName,
              )}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage component with default data
const Skiper17 = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const stickyCardsRef = useRef<HTMLDivElement>(null);

  const defaultCards = [
    {
      id: 1,
      image: "/bottom_image/10ba1c3a07f7ffb64699b1a2c012896e 2.JPG",
    },
    {
      id: 2,
      image: "/bottom_image/3182074c91766b7af09b84fcae6b2573 2.JPG",
    },
    {
      id: 3,
      image: "/bottom_image/3271b9ac63490c167e1aaa6338203c40 2.JPG",
    },
    {
      id: 4,
      image: "/bottom_image/3c55170e4c9c7bbaee3164a4b01a0365 2.JPG",
    },
    {
      id: 5,
      image: "/bottom_image/419da94ae466823f9321b2471af4de28 2.JPG",
    },
    {
      id: 6,
      image: "/bottom_image/5db1f1776b7f0102a4dd6d45ceb9070d 2.JPG",
    },
    {
      id: 7,
      image: "/bottom_image/7de20ad181f9b5b96a458ad5d7b2d0db 2.JPG",
    },
    {
      id: 8,
      image: "/bottom_image/b0e380acab02a3198aa2ecf448ce5b13 2.JPG",
    },
    {
      id: 9,
      image: "/bottom_image/b98ee110cb49e4496922bec938076529 2.JPG",
    },
    {
      id: 10,
      image: "/bottom_image/c2d13d25c5f0d4fbbca40c0f501cacfd 2.JPG",
    },
    {
      id: 11,
      image: "/bottom_image/d567f4299aee1347c552f2fe2e1973f9 2.JPG",
    },
    {
      id: 12,
      image: "/bottom_image/e047e8d34efa69c0acd6458375391aa8 2.JPG",
    },
    {
      id: 13,
      image: "/bottom_image/IMG_3276.jpg",
    },
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const totalCards = defaultCards.length;
      const triggerElement = stickyCardsRef.current?.querySelector(".sticky-cards");

      if (!triggerElement) return;

      let hasTriggered = false;

      // 监听滚动进度，当滚动到最后一张图片时触发烟花
      const trigger = ScrollTrigger.create({
        trigger: triggerElement,
        start: "top top",
        end: `+=${window.innerHeight * (totalCards - 1)}`,
        scrub: false,
        onUpdate: (self) => {
          // 当滚动进度超过 85% 时（接近最后一张图片），显示烟花
          if (self.progress >= 0.85 && !hasTriggered) {
            hasTriggered = true;
            setShowFireworks(true);
          } else if (self.progress < 0.85 && hasTriggered) {
            hasTriggered = false;
            setShowFireworks(false);
          }
        },
        onEnter: () => {
          // 当进入最后一张图片区域时也触发
          if (!hasTriggered) {
            hasTriggered = true;
            setShowFireworks(true);
          }
        },
        onLeaveBack: () => {
          // 当向上滚动离开时隐藏
          hasTriggered = false;
          setShowFireworks(false);
        },
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: stickyCardsRef },
  );

  return (
    <ReactLenis root>
      <div className="w-full" ref={stickyCardsRef}>
        <StickyCard002 
          cards={defaultCards} 
          className="h-screen"
          containerClassName="h-screen"
        />
      </div>
      {/* Spacer to allow scroll for animation */}
      <div className="h-[400vh]" />
      {showFireworks && <FireworksOverlay delay={0} duration={5000} />}
    </ReactLenis>
  );
};

export { Skiper17, StickyCard002 };

/**
 * Skiper 17 StickyCard_002 — React + Gsap + scrollTrigger
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
