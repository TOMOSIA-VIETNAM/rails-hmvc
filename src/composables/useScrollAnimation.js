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

  const revealTitle = (headingSelector, highlightSelector) => {
    const heading = document.querySelector(headingSelector)
    const highlight = document.querySelector(highlightSelector)

    if (heading && highlight) {
      // Set initial states
      gsap.set(heading, { opacity: 0, y: 50 })
      gsap.set(highlight, { scaleX: 0, opacity: 0 })

      // Create timeline for coordinated animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
        }
      })

      tl.to(heading, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .to(highlight, {
        scaleX: 1,
        opacity: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5') // Start before heading animation ends
    }
  }

  const splitTextReveal = (element) => {
    const el = document.querySelector(element)
    if (el) {
      // Split text into lines
      const lines = el.innerHTML.split('<br>')
      el.innerHTML = '' // Clear original content

      // Create wrapped lines
      lines.forEach((line, i) => {
        const wrapper = document.createElement('div')
        wrapper.style.overflow = 'hidden'
        const content = document.createElement('div')
        content.innerHTML = line
        wrapper.appendChild(content)
        el.appendChild(wrapper)

        // Set initial state
        gsap.set(content, { y: 50, opacity: 0 })

        // Animate each line
        gsap.to(content, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.15, // Stagger each line
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        })
      })
    }
  }

  const parallaxBackground = (element, distance = 100) => {
    const el = document.querySelector(element)
    if (el) {
      gsap.to(el, {
        y: distance,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }
  }

  const codeBlockReveal = (element) => {
    const blocks = document.querySelectorAll(element)
    blocks.forEach(block => {
      gsap.set(block, {
        opacity: 0,
        scale: 0.95,
        y: 30
      })

      gsap.to(block, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 85%'
        }
      })
    })
  }

  const cardReveal = (containerSelector, cardSelector) => {
    const container = document.querySelector(containerSelector)
    const cards = container?.querySelectorAll(cardSelector)

    if (container && cards?.length) {
      cards.forEach((card, index) => {
        gsap.set(card, {
          opacity: 0,
          y: 50,
          rotateY: -15
        })

        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%'
          }
        })
      })
    }
  }

  const floatingAnimation = (element) => {
    const elements = document.querySelectorAll(element)
    elements.forEach(el => {
      // Random values for more natural movement
      const xDistance = Math.random() * 20 - 10
      const yDistance = Math.random() * 20 - 10
      const duration = 2 + Math.random() * 2

      gsap.to(el, {
        x: xDistance,
        y: yDistance,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    })
  }

  return {
    fadeInUpOnLoad,
    fadeInUp,
    fadeIn,
    staggerChildren,
    revealTitle,
    splitTextReveal,
    parallaxBackground,
    codeBlockReveal,
    cardReveal,
    floatingAnimation
  }
}
