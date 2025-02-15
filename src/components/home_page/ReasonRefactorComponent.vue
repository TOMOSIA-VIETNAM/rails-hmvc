<template>
  <section class="section bg-gray--200 reason-refactor">
    <div class="container">
      <div class="row why-choose d-none d-md-block">
        <div class="col-12 col-md-3">
          <div class="why-choose__title">
            Why <br />
            choose HMVC
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-7">
          <h2 class="reason-refactor__heading">
            Refactor for clarity<br />
            <span class="text-black-50">lessen debt</span>
          </h2>
        </div>
      </div>

      <div class="reason-refactor__content d-flex flex-column flex-md-row">
        <div class="reason-refactor__blocks col-12 col-md-3 pe-md-4">
          <div class="reason-refactor__block">
            <h3 class="reason-refactor__block-title">Missing abstractions</h3>
            <p class="reason-refactor__block-desc">
              Web frameworks excel in routing and rendering but often lack sufficient abstractions
              for organizing business logic, resulting in complex, hard-to-maintain code.
            </p>
          </div>
          <div class="reason-refactor__block">
            <h3 class="reason-refactor__block-title">Our toolbox</h3>
            <p class="reason-refactor__block-desc">
              HMVC introduces the "operation" abstraction, breaking code into manageable steps to
              enhance logic structure and flow control.
            </p>
          </div>
          <div class="reason-refactor__block">
            <h3 class="reason-refactor__block-title">Bullet-proof conventions</h3>
            <p class="reason-refactor__block-desc">
              HMVC simplifies error handling with the Railway pattern, reducing conditionals and
              enhancing code reusability through inheritance and composition.
            </p>
          </div>
          <div class="reason-refactor__block d-none d-md-block">
            <button class="btn btn-outline-primary btn--rounded px-4 py-2">
              <font-awesome-icon :icon="faPlay" />
              <span class="ps-3">Take a video tour</span>
            </button>
          </div>
        </div>

        <div class="reason-refactor__video col-12 col-md-9">
          <div class="reason-refactor__image image-box">
            <iframe
              src="https://drive.google.com/file/d/11nx1zikjwfOirzx81pZl5_NNm6NLhvT0/preview"
              allow="autoplay"
              allowfullscreen
              class="responsive-iframe">
            </iframe>
          </div>
          <div class="reason-refactor__block d-md-none mt-4">
            <button class="btn btn-outline-primary btn--rounded px-4 py-2 w-100">
              <font-awesome-icon :icon="faPlay" />
              <span class="ps-3">Take a video tour</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { faPlay } from '@fortawesome/free-solid-svg-icons'
</script>

<style lang="scss" scoped>
.reason-refactor {
  .why-choose {
    &__title {
      font-size: clamp(10px, 2vw, 12px);
      display: flex;
      align-items: flex-end;
      box-sizing: border-box;
      width: 120px;
      height: 120px;
      margin-top: -130px;
      margin-bottom: 70px;
      padding: 12px;
      background: #161616;
      text-transform: uppercase;
      color: #fff;

      @media (max-width: 768px) {
        margin: -80px auto 40px;
      }
    }
  }

  &__heading {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: clamp(36px, 5vw, 54px);
    line-height: 1.2;
    text-transform: uppercase;
    color: var(--c-gray-900);
    margin-bottom: 46px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
      text-align: center;
    }
  }

  &__content {
    gap: 2rem;

    @media (max-width: 768px) {
      gap: 1rem;
    }
  }

  &__blocks {
    @media (max-width: 768px) {
      order: 2;
    }
  }

  &__block {
    line-height: 25px;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }

    &-title {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: clamp(16px, 2vw, 18px);
      margin-top: 0;
      margin-bottom: 10px;
      color: var(--c-gray-900);
    }

    &-desc {
      margin-bottom: 10px;
      line-height: 1.6;
      font-weight: 300;
      color: var(--c-gray-700);
      font-size: clamp(14px, 1.5vw, 16px);
    }
  }

  &__video {
    @media (max-width: 768px) {
      order: 1;
    }
  }

  &__image {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .responsive-iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
}
</style>
