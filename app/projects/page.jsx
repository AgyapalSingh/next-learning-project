"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import SplitType from "split-type";
import { FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(Observer);

const projects = [
  { id: 1, name: "Project One", link: "https://calledtosurf.com/" },
  { id: 2, name: "Project Two", link: "https://claretworld.com/" },
  { id: 3, name: "Project Three", link: "https://uniqaya.com/" },
  { id: 4, name: "Project Four", link: "https://vixenandfox.com.au/" },
];

export default function AnimatedSections() {
  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");
  //   const images = document.querySelectorAll(".bg");
  //   const headings = gsap.utils.toArray(".animated-section-heading");
  //   const outerWrappers = gsap.utils.toArray(".outer");
  //   const innerWrappers = gsap.utils.toArray(".inner");
  //   const scrollHint = document.querySelector(".scroll-hint");

  //   const splitHeadings = headings.map((heading) => {
  //     return new SplitType(heading, {
  //       types: "words, chars",
  //       tagName: "span",
  //     });
  //   });

  //   let currentIndex = -1;
  //   let animating;
  //   const wrap = gsap.utils.wrap(0, sections.length);

  //   gsap.set(outerWrappers, { yPercent: 100 });
  //   gsap.set(innerWrappers, { yPercent: -100 });

  //   function gotoSection(index, direction) {
  //     index = wrap(index);
  //     animating = true;
  //     const fromTop = direction === -1;
  //     const dFactor = fromTop ? -1 : 1;

  //     const tl = gsap.timeline({
  //       defaults: { duration: 1.25, ease: "power1.inOut" },
  //       onComplete: () => (animating = false),
  //     });

  //     if (currentIndex >= 0) {
  //       gsap.set(sections[currentIndex], { zIndex: 0 });
  //       tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
  //         sections[currentIndex],
  //         { autoAlpha: 0 }
  //       );
  //     }

  //     gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  //     tl.fromTo(
  //       [outerWrappers[index], innerWrappers[index]],
  //       { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
  //       { yPercent: 0 },
  //       0
  //     )
  //       .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
  //       .fromTo(
  //         splitHeadings[index]?.chars || [],
  //         { autoAlpha: 0, yPercent: 150 * dFactor },
  //         {
  //           autoAlpha: 1,
  //           yPercent: 0,
  //           duration: 1,
  //           ease: "power2",
  //           stagger: { each: 0.02, from: "random" },
  //         },
  //         0.2
  //       );

  //     if (scrollHint) {
  //       if (index === 0) {
  //         scrollHint.classList.add("visible");
  //       } else {
  //         scrollHint.classList.remove("visible");
  //       }
  //     }

  //     currentIndex = index;
  //   }

  //   requestAnimationFrame(() => {
  //     Observer.create({
  //       type: "wheel,touch,pointer",
  //       wheelSpeed: -1,
  //       onDown: () =>
  //         !animating && currentIndex > 0 && gotoSection(currentIndex - 1, -1),
  //       onUp: () =>
  //         !animating &&
  //         currentIndex < sections.length - 1 &&
  //         gotoSection(currentIndex + 1, 1),
  //       tolerance: 10,
  //       preventDefault: true,
  //     });

  //     gotoSection(0, 1);
  //   });
  // }, []);

  return (
    <>
      {/* {projects.map((project, i) => (
        <section
          key={project.id}
          className={`animated-section ${
            ["first", "second", "third", "fourth", "fifth"][i]
          }`}
        >
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="animated-section-heading">
                  <a href={project.link} className="project-link">
                    {project.name} <FaExternalLinkAlt className="project-link-icon" />
                  </a>
                </h2>
              </div>
            </div>
          </div>

          {project.id === 1 && (
            <div className="scroll-hint">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <span>Scroll Down</span>
            </div>
          )}
        </section>
      ))} */}
    </>
  );
}
