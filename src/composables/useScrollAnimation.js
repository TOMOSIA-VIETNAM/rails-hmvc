import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = () => {
  const fadeInUpOnLoad = (element, options = {}) => {
    const elements = document.querySelectorAll(element)
    elements.forEach(el => {
      const {
        y = 30,
        duration = 1,
        ease = 'power2.out',
        delay = 0.2,
        opacity = 0,
        scale = 1
      } = options

      gsap.set(el, {
        opacity,
        y,
        scale: scale < 1 ? scale : 1
      })

      gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        ease,
        delay
      })
    })
  }

  const fadeInUp = (element, options = {}) => {
    const elements = document.querySelectorAll(element)
    elements.forEach(el => {
      const {
        duration = 0.8,
        delay = 0,
        scale = 1,
        ease = 'power2.out',
        start = 'top 85%',
        y = 30
      } = options

      gsap.set(el, {
        opacity: 0,
        y,
        scale: scale < 1 ? scale : 1
      })

      gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
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

  const staggerChildren = (parent, children, options = {}) => {
    const parentEl = document.querySelector(parent)
    const childrenEls = parentEl?.querySelectorAll(children)

    if (parentEl && childrenEls?.length) {
      const {
        duration = 0.8,
        stagger = 0.15,
        x = -20,
        y = 20,
        ease = 'power2.out',
        start = 'top 85%',
        delay = 0
      } = options

      // Set initial state for each child
      childrenEls.forEach(el => {
        gsap.set(el, {
          opacity: 0,
          x,
          y
        })
      })

      // Create timeline for smoother animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentEl,
          start,
        }
      })

      // Add stagger animation to timeline with delay
      tl.to(childrenEls, {
        duration,
        opacity: 1,
        x: 0,
        y: 0,
        stagger,
        ease,
        delay
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

  const parallaxBackground = (element, options = {}) => {
    const elements = document.querySelectorAll(element)
    elements.forEach(el => {
      const {
        x = 0,
        y = 100,
        duration = 1,
        ease = 'sine.inOut',
        repeat = 0,
        yoyo = true,
        scrub = 1,
        start = 'top bottom',
        end = 'bottom top'
      } = options

      gsap.to(el, {
        x,
        y,
        duration,
        ease,
        repeat,
        yoyo,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub
        }
      })
    })
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

  const animateCodeBlock = (element, options = {}) => {
    const codeBlocks = document.querySelectorAll(element)
    codeBlocks.forEach(block => {
      const {
        duration = 0.8,
        scale = 0.95,
        x = 30,
        y = 0,
        ease = 'back.out(1.2)',
        start = 'top 75%',
        hoverScale = 1.02
      } = options

      // Initial animation
      gsap.set(block, {
        opacity: 0,
        scale,
        x,
        y
      })

      gsap.to(block, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration,
        ease,
        scrollTrigger: {
          trigger: block,
          start
        }
      })

      // Hover effects
      block.addEventListener('mouseenter', () => {
        gsap.to(block, {
          scale: hoverScale,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      block.addEventListener('mouseleave', () => {
        gsap.to(block, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })
  }

  const animateFeatureBox = (element, options = {}) => {
    const boxes = document.querySelectorAll(element)
    boxes.forEach(box => {
      const {
        titleDuration = 0.8,
        descDuration = 0.6,
        stagger = 0.2,
        start = 'top 75%'
      } = options

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          start
        }
      })

      // Title animation
      const title = box.querySelector('[class*="title"]')
      if (title) {
        gsap.set(title, { opacity: 0, x: -50 })
        tl.to(title, {
          opacity: 1,
          x: 0,
          duration: titleDuration,
          ease: 'power2.out'
        })
      }

      // Description paragraphs animation
      const paragraphs = box.querySelectorAll('p')
      if (paragraphs.length) {
        gsap.set(paragraphs, { opacity: 0, y: 30 })
        tl.to(paragraphs, {
          opacity: 1,
          y: 0,
          duration: descDuration,
          stagger,
          ease: 'power2.out'
        }, '-=0.4')
      }

      // Add background effect
      const boxBg = document.createElement('div')
      boxBg.className = 'abs-layer__box-bg'
      box.appendChild(boxBg)

      gsap.set(boxBg, { opacity: 0 })
      tl.to(boxBg, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }, 0)
    })
  }

  const animateTestimonial = (element, options = {}) => {
    const testimonials = document.querySelectorAll(element)
    testimonials.forEach(testimonial => {
      const {
        photoScale = 0.5,
        photoDuration = 0.8,
        infoDuration = 0.6,
        infoStagger = 0.1,
        quoteDuration = 0.8,
        quoteStagger = 0.3,
        hoverScale = 1.02,
        photoHoverScale = 1.1,
        start = 'top 75%'
      } = options

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: testimonial,
          start
        }
      })

      // Photo animation
      const photo = testimonial.querySelector('[class*="photo"]')
      if (photo) {
        gsap.set(photo, { opacity: 0, scale: photoScale })
        tl.to(photo, {
          opacity: 1,
          scale: 1,
          duration: photoDuration,
          ease: 'back.out(1.7)'
        })
      }

      // Info animation (name and position)
      const infoElements = testimonial.querySelectorAll('[class*="owner"], [class*="position"]')
      if (infoElements.length) {
        gsap.set(infoElements, { opacity: 0, x: -30 })
        tl.to(infoElements, {
          opacity: 1,
          x: 0,
          duration: infoDuration,
          stagger: infoStagger,
          ease: 'power2.out'
        }, '-=0.4')
      }

      // Quote animation
      const quote = testimonial.querySelector('[class*="quote"]')
      if (quote) {
        const quoteElements = [
          quote.querySelector('i'),
          quote.querySelector('p')
        ].filter(Boolean)

        gsap.set(quote, { opacity: 0, x: -20 })
        gsap.set(quoteElements, { opacity: 0, y: 20 })

        tl.to(quote, {
          opacity: 1,
          x: 0,
          duration: quoteDuration,
          ease: 'power2.out'
        }, '-=0.2')
        .to(quoteElements, {
          opacity: 1,
          y: 0,
          duration: quoteDuration,
          stagger: quoteStagger,
          ease: 'power2.out'
        }, '-=0.4')
      }

      // Hover animations
      testimonial.addEventListener('mouseenter', () => {
        gsap.to(testimonial, {
          scale: hoverScale,
          duration: 0.3,
          ease: 'power2.out'
        })
        if (photo) {
          gsap.to(photo, {
            scale: photoHoverScale,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      })

      testimonial.addEventListener('mouseleave', () => {
        gsap.to(testimonial, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
        if (photo) {
          gsap.to(photo, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      })
    })
  }

  const rotateBackground = (element, options = {}) => {
    const elements = document.querySelectorAll(element)
    elements.forEach(el => {
      const {
        rotation = 5,
        duration = 10,
        ease = 'none',
        repeat = -1,
        yoyo = true
      } = options

      gsap.to(el, {
        rotation: `+=${rotation}`,
        duration,
        ease,
        repeat,
        yoyo
      })
    })
  }

  const animateSlider = (element, options = {}) => {
    const slider = document.querySelector(element)
    if (!slider) return

    const {
      imageScale = 0.95,
      imageDuration = 0.75,
      contentDelay = 0.2,
      contentStagger = 0.1,
      ease = 'power2.out',
      start = 'top 85%'
    } = options

    // Initial entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: slider,
        start,
      }
    })

    // Animate image section
    const imageSection = slider.querySelector('[class*="image-section"]')
    if (imageSection) {
      gsap.set(imageSection, {
        opacity: 0,
        scale: 0.9,
        y: 30
      })

      tl.to(imageSection, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: imageDuration,
        ease
      })
    }

    // Animate content items
    const contentItems = slider.querySelectorAll('[class*="content-item"]')
    if (contentItems.length) {
      gsap.set(contentItems, {
        opacity: 0,
        x: 30
      })

      tl.to(contentItems, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: contentStagger,
        ease
      }, `-=${contentDelay}`)
    }

    return {
      animateImageChange: (image) => {
        gsap.to(image, {
          scale: 1.05,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(image, { scale: 0.95 })
          }
        })
      }
    }
  }

  const animateHeaderHero = (element) => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power3.out' }
    })

    // Hero background animation
    tl.from(`${element}__background svg`, {
      scale: 0.95,
      opacity: 0,
      duration: 1.5
    })

    // Content animations with stagger effect
    tl.from(`${element} .hero-title`, {
      y: 50,
      opacity: 0
    }, '-=1')

    tl.from(`${element} .hero-subtitle`, {
      y: 30,
      opacity: 0
    }, '-=0.8')

    tl.from(`${element} .hero-control`, {
      y: 20,
      opacity: 0
    }, '-=0.6')

    tl.from(`${element} .hero-icon`, {
      x: 30,
      opacity: 0,
      rotate: 360
    }, '-=0.8')

    // Continuous floating animation for background
    gsap.to(`${element}__background svg`, {
      y: 20,
      duration: 4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    return tl
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
    floatingAnimation,
    animateCodeBlock,
    animateFeatureBox,
    animateTestimonial,
    rotateBackground,
    animateSlider,
    animateHeaderHero
  }
}
