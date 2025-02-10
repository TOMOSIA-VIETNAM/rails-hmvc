<template>
  <section class="section bg-gray--200 reason-refactor">
    <div class="container">
      <div class="row why-choose">
        <div class="col-3">
          <div class="why-choose__title">
            Why <br />
            choose HMVC
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-7">
          <h2 class="reason-refactor__heading">
            Refactor for clarity<br />
            <span class="text-black-50">lessen debt</span>
          </h2>
        </div>
      </div>

      <div class="row">
        <div class="col-3">
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
          <div class="reason-refactor__block">
            <button class="btn btn-outline-primary btn--rounded px-4 py-2">
              <font-awesome-icon :icon="faPlay" />
              <span class="ps-3">Take a video tour</span>
            </button>
          </div>
        </div>

        <div class="col-9">
          <div class="reason-refactor__image image-box">
            <img src="@/assets/images/code-completion-animation.gif" alt="" />
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
      font-size: 12px;
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
    }
  }

  &__heading {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 54px;
    line-height: 48px;
    text-transform: uppercase;
    color: var(--c-gray-900);
    margin-bottom: 46px;
  }

  &__block {
    line-height: 25px;
    margin-bottom: 50px;

    &-title {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 18px;
      margin-top: 0;
      margin-bottom: 10px;
      color: var(--c-gray-900);
    }

    &-desc {
      margin-bottom: 10px;
      line-height: 25px;
      font-weight: 300;
      color: var(--c-gray-700);
    }
  }

  &__image {
    margin-left: 7rem;
  }
}
</style>
