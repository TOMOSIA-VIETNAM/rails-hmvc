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

<script setup></script>

<style lang="scss" scoped>
.abs-layer {
  color: #fff;

  pre {
    border-radius: 0.35rem;
  }

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
      padding-right: 3rem;
    }
  }
}
</style>
