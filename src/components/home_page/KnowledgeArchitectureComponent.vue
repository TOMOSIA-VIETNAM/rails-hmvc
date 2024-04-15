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
                <p class="slideshow__switcher__title">Overview Layer</p>
                <p class="slideshow__switcher__desc">
                  Сontext-sensitive code completion helps you write SQL code faster. DataGrip is
                  aware of the table structure, foreign keys, and even database objects created in
                  the code you're editing.
                </p>
              </div>
            </li>
            <li>
              <div
                class="slideshow__switcher__tab"
                data-image-src="flow-control.gif"
                @click="onClickTabSwitcher"
              >
                <p class="slideshow__switcher__title">Flow Control</p>
                <p class="slideshow__switcher__desc">
                  Execute queries in different modes and keep track of all your activity with the
                  local history, preventing you from losing your work.
                </p>
              </div>
            </li>
            <li>
              <div
                class="slideshow__switcher__tab"
                data-image-src="structure-project.png"
                @click="onClickTabSwitcher"
              >
                <p class="slideshow__switcher__title">Structure Project</p>
                <p class="slideshow__switcher__desc">
                  The query history feature preserves all queries in a log file, and the tool
                  supports parameterized SQL queries with customizable patterns and SQL dialect
                  options.
                </p>
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

onMounted(() => activeImage())

const onClickTabSwitcher = (event) => {
  // Add source image
  const $this = event.currentTarget
  const $active = document.querySelector('.active')

  if ($active) {
    $active.classList.remove('active')
  }
  $this.classList.add('active')
  imageSrc.value = `src/assets/images/${$this.dataset.imageSrc}`
}

const activeImage = () => {
  const $active = document.querySelector('.active')
  if ($active) {
    imageSrc.value = `src/assets/images/${$active.dataset.imageSrc}`
  }
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
        background-color: transparent;
        transition: width 2s ease-in;
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

          .slideshow__switcher__indicator {
            width: 120%;
            background-color: rgba(31, 187, 161, 0.33);
          }
        }
      }
    }
  }
}
</style>
