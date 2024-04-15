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
      <div class="row abs-layer__box">
        <div class="col-6">
          <h3 class="abs-layer__box-title">Lean Controller</h3>
          <div class="abs-layer__box-desc">
            <p>Move your business logic out of controllers.</p>
            <p>
              Handle navigation and data forwarding, without executing business logic. <br />
              It extracts data from requests and forwards it to Operations.
            </p>
          </div>
        </div>
        <div class="col-6">
          <highlightjs
            language="ruby"
            code="
class MemosController < ApplicationController
  def create
    if Memo::Operation::Create.(params: params)
      render
    end
  end
end"
          />
        </div>
      </div>

      <!-- Slim Model -->
      <div class="row abs-layer__box">
        <div class="col-6">
          <highlightjs
            class="w-90p"
            language="ruby"
            code="
class Memo < ApplicationRecord
  belongs_to :user
  has_many :memos
end"
          />
        </div>
        <div class="col-6">
          <h3 class="abs-layer__box-title">Slim Model</h3>
          <div class="abs-layer__box-desc">
            <p>
              Utilize it solely for declaring relationships and tasks associated with database
              querying. By maintaining this separation, models become lightweight and easier to
              understand, facilitating scalability and collaboration within your project
            </p>
          </div>
        </div>
      </div>

      <!-- Redefining Validation  -->
      <div class="row abs-layer__box">
        <div class="col-6">
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
        <div class="col-6">
          <highlightjs
            language="ruby"
            code="
class AlbumForm < Reform::Form
  feature Reform::Form::Dry

  property :name

  validation do
    params do
      required(:name).filled
    end
  end
end"
          />
        </div>
      </div>

      <!-- Operation -->
      <div class="row abs-layer__box">
        <div class="col-6">
          <highlightjs
            class="w-90p"
            language="ruby"
            code="
module Memo::Operation
  class Create < Trailblazer::Operation
    step :validate
    step :save
    left :handle_errors
    step :notify
    # ...
  end
end"
          />
        </div>
        <div class="col-6">
          <h3 class="abs-layer__box-title">Flow Control Business Logic</h3>
          <div class="abs-layer__box-desc">
            <p>Operations in HMVC architectures serve as orchestrators.</p>
            <p>
              These operations define the sequence of steps in application logic. This approach
              streamlines development, promoting code reusability and maintainability.
            </p>
          </div>
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
    font-size: 3.75rem;
    color: #fff;
    margin-bottom: 1.875rem;
    letter-spacing: 1px;
  }

  &__desc {
    font-family: var(--font-sub-heading);
    font-weight: 200;
    font-size: 1.3rem;
    color: #fff;
    word-spacing: 2px;
  }

  &__box {
    margin-top: 4.5rem;

    &-title {
      font-weight: 400;
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 1.875rem;
    }

    &-desc {
      font-weight: 300;
      line-height: 1.75em;
      width: 90%;
    }
  }
}
</style>
