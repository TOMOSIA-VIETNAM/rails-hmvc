<template>
  <section class="section bg-gray--900 abs-layer">
    <div class="container">
      <div class="abs-layer__heading">
        <h2 class="abs-layer__title">Abstraction Layers</h2>
        <p class="abs-layer__desc">
          <span class="text--green-400">CORE MISSION: ENSURE SOFTWARE LONGEVITY</span>
          <br />Achieve sustainable and maintainable software architecture
          <br />through strategic implementation of modern abstraction layers.
        </p>
      </div>

      <!-- Lean Controller -->
      <div class="abs-layer__box d-md-flex d-block">
        <div class="col-md-6 col-12">
          <h3 class="abs-layer__box-title">Lean Controller</h3>
          <div class="abs-layer__box-desc">
            <p>Streamline your controllers by removing business logic entirely.</p>
            <p>
              Modern controllers serve as traffic directors - they handle HTTP requests,
              manage routing, and delegate processing to specialized Operations. This separation
              ensures clean, maintainable code and clear responsibility boundaries.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12 mt-3">
          <highlightjs
            language="ruby"
            code="
class LoginController < ApplicationController
  # [POST]...
  def create
    operator = Login::CreateOperation.new(params)
    operator.call

    # Logic here
  end
end"
          />
        </div>
      </div>

      <!-- Slim Model -->
      <div class="abs-layer__box d-md-flex d-block">
        <div class="col-md-6 col-12">
          <h3 class="abs-layer__box-title">Domain Model Excellence</h3>
          <div class="abs-layer__box-desc">
            <p>
              Transform your models into focused domain entities that excel at their core purpose:
              managing data relationships and database interactions. By removing business logic
              and validation concerns, models become more maintainable and scalable. This approach
              promotes better code organization and enhances team collaboration.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-12 mt-3">
          <highlightjs
            language="ruby"
            code="
class User < ApplicationRecord
  has_many :user_logins
end"
          />
        </div>
      </div>

      <!-- Validation That Makes Sense  -->
      <div class="d-md-flex d-block abs-layer__box">
        <div class="col-md-6 col-12">
          <h3 class="abs-layer__box-title">Intelligent Validation Layer</h3>
          <div class="abs-layer__box-desc">
            <p>
              Embrace a more logical approach to data validation by moving it to dedicated form objects.
              This separation creates a clear boundary between data validation and business logic.
            </p>
            <p>
              Form objects handle data coercion, validation rules, and ensure data integrity before
              any business operations begin. This proactive validation strategy prevents invalid data
              from reaching your core business logic, reducing errors and improving system reliability.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12 mt-3">
          <highlightjs
            language="ruby"
            code="
class Login::CreateForm < ApplicationForm
  validates :email, presence: true
  validates :password, presence: true
end"
          />
        </div>
      </div>

      <!-- Operation -->
      <div class="d-md-flex d-block abs-layer__box">
        <div class="col-md-6 col-12">
          <h3 class="abs-layer__box-title">Orchestrated Business Logic</h3>
          <div class="abs-layer__box-desc">
            <p>
              Operations act as conductors in your application's symphony, orchestrating complex
              business processes with clarity and precision.
            </p>
            <p>
              Each operation encapsulates a specific business workflow, breaking it down into
              clear, sequential steps. This structured approach enhances code readability,
              facilitates testing, and makes complex business processes more manageable.
              Operations promote code reuse and make your application's business logic
              more maintainable and scalable.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12 mt-3">
          <highlightjs
            language="ruby"
            code="
class Login::CreateOperation < ApplicationOperation
  attr_reader :user

  def call
    step_load_form { return }
    step_login
  end

  private

  def step_load_form
    # Logic validate form here
  end

  def step_login
    # Logic bussiness here
  end
end"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import gsap from 'gsap'

onMounted(() => {
  const { fadeInUp, staggerChildren } = useScrollAnimation()

  // Animate main heading section with stagger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.abs-layer__heading',
      start: 'top 85%'
    }
  })

  tl.from('.abs-layer__title', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from('.abs-layer__desc', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4')

  // Animate each box with coordinated effects
  const boxes = document.querySelectorAll('.abs-layer__box')
  boxes.forEach((box, index) => {
    const boxTl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start: 'top 75%'
      }
    })

    // Title animation
    boxTl.from(box.querySelector('.abs-layer__box-title'), {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power2.out'
    })

    // Description paragraphs animation
    const paragraphs = box.querySelectorAll('.abs-layer__box-desc p')
    boxTl.from(paragraphs, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out'
    }, '-=0.4')

    // Code block animation
    const codeBlock = box.querySelector('pre')
    if (codeBlock) {
      boxTl.from(codeBlock, {
        opacity: 0,
        scale: 0.95,
        x: 30,
        duration: 0.8,
        ease: 'back.out(1.2)'
      }, '-=0.4')

      // Add hover effect to code blocks
      gsap.to(codeBlock, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })

      codeBlock.addEventListener('mouseenter', () => {
        gsap.to(codeBlock, {
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      codeBlock.addEventListener('mouseleave', () => {
        gsap.to(codeBlock, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    }

    // Add subtle background effect
    const boxBg = document.createElement('div')
    boxBg.className = 'abs-layer__box-bg'
    box.appendChild(boxBg)

    boxTl.from(boxBg, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, 0)
  })
})
</script>

<style lang="scss" scoped>
.abs-layer {
  color: #fff;

  pre {
    border-radius: 0.35rem;
    will-change: transform, opacity, scale;
    transition: transform 0.3s ease;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  &__heading {
    margin-bottom: 5rem;
    position: relative;
  }

  &__title {
    font-family: var(--font-heading);
    font-weight: 500;
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    margin-bottom: 1.875rem;
    will-change: transform, opacity;
    position: relative;
  }

  &__desc {
    font-family: var(--font-sub-heading);
    font-weight: 200;
    font-size: clamp(1rem, 2vw, 1.3rem);
    will-change: transform, opacity;
    position: relative;
  }

  &__box {
    padding: 2rem;
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(255,255,255,0.03), transparent);
      opacity: 0;
      z-index: 1;
    }

    &-title {
      font-weight: 400;
      font-size: clamp(1.25rem, 2vw, 1.5rem);
      will-change: transform, opacity;
      position: relative;
      z-index: 2;
      margin-bottom: 1rem;
    }

    &-desc {
      font-family: var(--font-sub-heading);
      font-weight: 300;
      font-size: clamp(0.875rem, 1.5vw, 1rem);
      padding-right: 3rem;
      will-change: transform, opacity;
      position: relative;
      z-index: 2;

      p {
        margin-bottom: 1rem;
        line-height: 1.6;
      }
    }
  }
}

.abstraction-layer {
  position: relative;

  &__heading {
    will-change: transform, opacity;
  }

  &__code-block {
    will-change: transform, opacity, scale;
    border-radius: 8px;
    overflow: hidden;
  }

  &__feature {
    will-change: transform, opacity;
  }
}
</style>
