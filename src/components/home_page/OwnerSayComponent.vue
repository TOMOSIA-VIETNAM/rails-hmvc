<template>
  <section class="section bg-gray--100 owner-say">
    <div class="container">
      <h3 class="owner-say__title">What owner say ...</h3>
      <div class="row owner-say__feedback">
        <div class="col-9">
          <div class="row align-items-center">
            <div class="col-auto ps-0">
              <img
                class="owner-say__feedback-photo"
                src="https://www.jetbrains.com/clion/img/customer__JasonTurner.png"
                alt="owner"
                loading="lazy"
              />
            </div>
            <div class="col">
              <h4 class="owner-say__feedback-owner">Mr. Anh Nguyen</h4>
              <span class="owner-say__feedback-position"
                >CTO, Founder HMVC, Senior Software Developer</span
              >
            </div>
          </div>

          <blockquote class="owner-say__feedback-quote">
            "HMVC has been indispensable for me when refactoring large codebases. The refactoring
            tools and the real-time feedback in the IDE about which lines still need to be updated
            are excellent time savers. Each release gets better and more responsive than the last!"
          </blockquote>
        </div>
      </div>

      <div class="row owner-say__feedback">
        <div class="col-9">
          <div class="row align-items-center">
            <div class="col-auto ps-0">
              <img
                class="owner-say__feedback-photo"
                src="https://www.jetbrains.com/clion/img/customer__JasonTurner.png"
                alt="owner"
                loading="lazy"
              />
            </div>
            <div class="col">
              <h4 class="owner-say__feedback-owner">Mr. Minh Tang</h4>
              <span class="owner-say__feedback-position"
                >Leader, Maintainer HMVC, Senior Software Developer</span
              >
            </div>
          </div>

          <blockquote class="owner-say__feedback-quote">
            "HMVC has been indispensable for me when refactoring large codebases. The refactoring
            tools and the real-time feedback in the IDE about which lines still need to be updated
            are excellent time savers. Each release gets better and more responsive than the last!"
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.owner-say {
  padding: 3rem 0;

  &__title {
    font-family: var(--font-heading);
    color: var(--c-gray-900);
    font-weight: 500;
    font-size: 2.3rem;
    padding: 2.5rem 0 1rem;
    letter-spacing: 1.3px;
  }

  &__feedback {
    padding: 1.75rem 0;

    &-photo {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 0.7rem;
    }

    &-owner {
      font-family: var(--font-heading);
      color: var(--c-gray-900);
      font-weight: 500;
      font-size: 1.2rem;
    }

    &-position {
      word-spacing: 2px;
      font-size: 1rem;
      font-weight: 300;
      color: rgba(25, 25, 28, 0.6);
    }

    &-quote {
      color: var(--c-gray-900);
      font-weight: 300;
      font-size: 1.6rem;
      border-left: 10px solid #e5e5e5;
      margin-top: 1.3rem;
      margin-left: -15px;
      padding-left: 1.2rem;
    }
  }
}
</style>
