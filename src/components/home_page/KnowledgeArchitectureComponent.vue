<template>
  <section class="section knowledge-arch">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="knowledge-arch__heading">
            Knowledge <span class="text-primary">architecture</span>
          </h2>
        </div>
      </div>
    </div>

    <div class="container knowledge-arch__slideshow">
      <div class="row">
        <div class="col-8 pe-5">
          <div class="slideshow__slide image-box">
            <img :src="imageSrc" alt="Image" />
          </div>
        </div>
        <div class="col-4">
          <ul class="slideshow__switcher">
            <li>
              <div
                class="slideshow__switcher__tab active"
                data-image-src="mvc-vs-hmvc.png"
                @click="onClickTabSwitcher"
              >
                <div class="slideshow__switcher__content">
                  <p class="slideshow__switcher__title">MVC vs HMVC</p>
                  <p class="slideshow__switcher__desc">
                    We provide unified support for all major version control systems, including Git,
                    SVN, Mercurial, and many others.
                  </p>
                </div>
                <div class="slideshow__switcher__indicator"></div>
              </div>
            </li>
            <li>
              <div
                class="slideshow__switcher__tab"
                data-image-src="overview-layer.png"
                @click="onClickTabSwitcher"
              >
                <div class="slideshow__switcher__content">
                  <p class="slideshow__switcher__title">Overview Layer</p>
                  <p class="slideshow__switcher__desc">
                    Сontext-sensitive code completion helps you write SQL code faster. DataGrip is
                    aware of the table structure, foreign keys, and even database objects created in
                    the code you're editing.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div
                class="slideshow__switcher__tab"
                data-image-src="flow-control.gif"
                @click="onClickTabSwitcher"
              >
                <div class="slideshow__switcher__content">
                  <p class="slideshow__switcher__title">Flow Control</p>
                  <p class="slideshow__switcher__desc">
                    Execute queries in different modes and keep track of all your activity with the
                    local history, preventing you from losing your work.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div
                class="slideshow__switcher__tab"
                data-image-src="structure-project.png"
                @click="onClickTabSwitcher"
              >
                <div class="slideshow__switcher__content">
                  <p class="slideshow__switcher__title">Structure Project</p>
                  <p class="slideshow__switcher__desc">
                    The query history feature preserves all queries in a log file, and the tool
                    supports parameterized SQL queries with customizable patterns and SQL dialect
                    options.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const imageSrc = ref('')
const autoPlaySlide = ref(true)
const durationSlide = 4000
const waitTimeNextSlide = 500

onMounted(() => {
  // Trigger play slide in viewport
  const $firstTab = document.querySelector('.slideshow__switcher__tab')
  window.addEventListener('scroll', () => autoPlaySlideShow($firstTab))
})

const onClickTabSwitcher = (event) => {
  const $this = event.currentTarget
  playSlideShow($this)
}

const autoPlaySlideShow = (element) => {
  const rect = element.getBoundingClientRect()
  const isVisible =
    (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
    (rect.top < window.innerHeight && rect.bottom >= 0)

  if (isVisible) {
    if (autoPlaySlide.value) {
      playSlide(element)
      autoPlaySlide.value = false
    }
  }
}

const playSlideShow = (currentTab) => {
  const listTabs = Array.from(document.querySelectorAll('.slideshow__switcher__tab'))
  let currentIndex = listTabs.indexOf(currentTab)

  const playNextSlide = () => {
    playSlide(listTabs[currentIndex])
    currentIndex = (currentIndex + 1) % listTabs.length
    setTimeout(playNextSlide, durationSlide + waitTimeNextSlide)
  }

  playNextSlide()
}

const playSlide = ($tab) => {
  const $parent = $tab.closest('.slideshow__switcher')
  const $tabActive = $parent.querySelector('.active')

  // Reset progress bar
  $parent.querySelector('.slideshow__switcher__indicator')?.remove()
  $tabActive?.classList?.remove('active')
  $tab.classList.add('active')

  // Create progress bar
  const $indicator = document.createElement('div')
  $tab.appendChild($indicator)
  $indicator.classList.add('slideshow__switcher__indicator')
  animateProgressBar($indicator, durationSlide)

  // Assign src image
  imageSrc.value = `src/assets/images/${$tab.dataset.imageSrc}`
}

const animateProgressBar = (progressBar, duration) => {
  let progress = 0
  const increment = 100 / (duration / 16) // 16ms ~ 60fps

  const interval = setInterval(() => {
    progress += increment
    progressBar.style.width = `${progress}%`

    if (progress >= 110) {
      clearInterval(interval)
    }
  }, 16) // 16ms ~ 60fps
}
</script>

<style lang="scss" scope>
.knowledge-arch {
  &__heading {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 43px;
    line-height: 48px;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 5.75rem;
  }

  .slideshow {
    &__slide {
      width: 100%;
      text-align: center;
    }

    &__switcher {
      list-style: none;
      padding: 0;

      li:not(:first-child) {
        margin-top: 2.125rem;
      }

      &__content {
        position: relative;
        z-index: 2;
      }

      &__title {
        color: var(--c-gray-700);
        font-weight: 400;
        font-size: 1.25rem;
      }

      &__desc {
        color: #fff;
        font-weight: 300;
        margin-bottom: 0;
        display: none;
      }

      &__indicator {
        position: absolute;
        z-index: 1;
        top: 0;
        height: 100%;
        width: 0%;
        margin-left: -30px;
        background-color: rgba(31, 187, 161, 0.33);
      }

      &__tab {
        position: relative;
        background-color: transparent;
        overflow: hidden;
        border-radius: 1.5rem;
        padding: 0 1.5rem;
        text-align: left;
        max-width: 100%;
        cursor: pointer;

        &.active {
          background-color: #0b2520;
          padding: 24px;

          .slideshow__switcher__title {
            color: #fff;
          }

          .slideshow__switcher__desc {
            display: block;
          }
        }
      }
    }
  }
}
</style>
