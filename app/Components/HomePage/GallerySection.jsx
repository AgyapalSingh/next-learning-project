"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  useEffect(() => {
    gsap.utils.toArray(".gallery-section-images div").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-section-container">
          <div className="gallery-section-images">
            <div className="full">
              <img src="/projects/CalledtoSurf.png" alt="" />
            </div>

            <div className="half">
              <img src="/projects/ClaretWorld.png" alt="" />
            </div>

            <div className="half">
              <img src="/projects/UniqayaLifeStyles.png" alt="" />
            </div>

            <div className="full">
              <img src="/projects/vixenAndFox.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
