<template>
  <section class="section bg-gray--900 abs-layer">
    <div class="container">
      <div class="abs-layer__heading">
        <h2 class="abs-layer__title">Abstraction layers</h2>
        <p class="abs-layer__desc">
          <span class="text--green-400">CORE MISSION: ENSURE SOFTWARE LONGEVITY</span>
          <br />We achieve this by providing a diverse range of abstraction layers,
          <br />transitioning code from traditional "MVC" to modern layers and objects.
        </p>
      </div>

      <!-- Lean Controller -->
      <div class="abs-layer__box d-md-flex d-block">
        <div class="col-md-6 col-12">
          <h3 class="abs-layer__box-title">Lean Controller</h3>
          <div class="abs-layer__box-desc">
            <p>Move your business logic out of controllers.</p>
            <p>
              Handle navigation and data forwarding, without executing business logic. <br />
              It extracts data from requests and forwards it to Operations.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
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
          <h3 class="abs-layer__box-title">Slim Model</h3>
          <div class="abs-layer__box-desc">
            <p>
              Utilize it solely for declaring relationships and tasks associated with database
              querying. By maintaining this separation, models become lightweight and easier to
              understand, facilitating scalability and collaboration within your project
            </p>
          </div>
        </div>

        <div class="col-md-6 col-12">
          <highlightjs
            language="ruby"
            code="
class User < ApplicationRecord
  has_many :user_logins
end"
          />
        </div>
      </div>

      <!-- Redefining Validation  -->
      <div class="d-md-flex d-block abs-layer__box">
        <div class="col-md-6 col-12">
          <h3 class="abs-layer__box-title">Redefining Validation</h3>
          <div class="abs-layer__box-desc">
            <p>
              Validations are now decoupled from model classes and instead reside within forms.
              After data is coerced and validated, it is ready for writing into the model.
            </p>

            <p>
              This practice ensures data validity prior to transmission to Operations, effectively
              separating validation logic from Controllers and Operations.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
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
          <h3 class="abs-layer__box-title">Flow Control Business Logic</h3>
          <div class="abs-layer__box-desc">
            <p>Operations in HMVC architectures serve as orchestrators.</p>
            <p>
              These operations define the sequence of steps in application logic. This approach
              streamlines development, promoting code reusability and maintainability.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
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

<script setup></script>

<style lang="scss" scoped>
.abs-layer {
  color: #fff;

  &__heading {
    margin-bottom: 5rem;
  }

  &__title {
    font-family: var(--font-heading);
    font-weight: 500;
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    margin-bottom: 1.875rem;
  }

  &__desc {
    font-family: var(--font-sub-heading);
    font-weight: 200;
    font-size: clamp(1rem, 2vw, 1.3rem);
  }

  &__box {
    margin-top: 4.5rem;

    &-title {
      font-weight: 400;
      font-size: clamp(1.25rem, 2vw, 1.5rem);
    }

    &-desc {
      font-family: var(--font-sub-heading);
      font-weight: 300;
      font-size: clamp(0.875rem, 1.5vw, 1rem);
    }
  }
}
</style>
