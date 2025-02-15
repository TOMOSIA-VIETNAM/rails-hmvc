import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = () => {
  const fadeInUpOnLoad = (element) => {
    const elements = document.querySelectorAll(element)
    elements.forEach(el => {
      gsap.set(el, { opacity: 0, y: 30 })
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2 // Slight delay for better visual
      })
    })
  }

  const fadeInUp = (element) => {
    const elements = document.querySelectorAll(element)
    elements.forEach(el => {
      gsap.set(el, { opacity: 0, y: 30 }) // Set initial state

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      })
    })
  }

  const fadeIn = (element, delay = 0) => {
    const elements = document.querySelectorAll(element)
    elements.forEach(el => {
      gsap.set(el, { opacity: 0 }) // Set initial state

      gsap.to(el, {
        opacity: 1,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      })
    })
  }

  const staggerChildren = (parent, children) => {
    const parentEl = document.querySelector(parent)
    const childrenEls = parentEl?.querySelectorAll(children)

    if (parentEl && childrenEls?.length) {
      // Set initial state for each child
      childrenEls.forEach(el => {
        gsap.set(el, {
          opacity: 0,
          x: -20,  // Start slightly from left
          y: 20    // And slightly from bottom
        })
      })

      // Create timeline for smoother animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentEl,
          start: 'top 85%',
        }
      })

      // Add stagger animation to timeline
      tl.to(childrenEls, {
        duration: 0.8,
        opacity: 1,
        x: 0,
        y: 0,
        stagger: 0.15,  // Slightly longer stagger for better visual
        ease: 'power2.out',
      })
    }
  }

  return {
    fadeInUpOnLoad,
    fadeInUp,
    fadeIn,
    staggerChildren
  }
}
