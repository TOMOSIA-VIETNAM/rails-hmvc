<template>
  <section class="section bg-gray--900 abs-layer">
    <div class="container">
      <div class="abs-layer__heading">
        <h2 class="abs-layer__title">{{ $t('abstractionLayer.title') }}</h2>
        <p class="abs-layer__desc">
          <span class="text--green-400">{{ $t('abstractionLayer.mission') }}</span>
          <br />{{ $t('abstractionLayer.description[0]') }}
          <br />{{ $t('abstractionLayer.description[1]') }}
        </p>
      </div>

      <!-- Slim Controller -->
      <div class="abs-layer__box d-md-flex d-block">
        <div class="col-md-6 col-12">
          <h3 class="abs-layer__box-title">{{ $t('abstractionLayer.sections.slimController.title') }}</h3>
          <div class="abs-layer__box-desc">
            <p>{{ $t('abstractionLayer.sections.slimController.description[0]') }}</p>
            <p>{{ $t('abstractionLayer.sections.slimController.description[1]') }}</p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <highlightjs
            language="ruby"
            code="# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  def create
    operator = Auth::LoginOperation.new(params:)
    operator.call
    return redirect_to dashboard_path if operator.success?

    render :new
  end
end"
          />
        </div>
      </div>

      <!-- Slim Model -->
      <div class="abs-layer__box d-md-flex d-block">
        <div class="col-md-6 col-12">
          <h3 class="abs-layer__box-title">{{ $t('abstractionLayer.sections.domainModel.title') }}</h3>
          <div class="abs-layer__box-desc">
            <p>{{ $t('abstractionLayer.sections.domainModel.description[0]') }}</p>
          </div>
        </div>

        <div class="col-md-6 col-12">
          <highlightjs
            language="ruby"
            code="# app/models/user.rb
class User < ApplicationRecord
  has_secure_password

  has_many :login_activities
  has_many :active_sessions
end"
          />
        </div>
      </div>

      <!-- Validation That Makes Sense  -->
      <div class="d-md-flex d-block abs-layer__box">
        <div class="col-md-6 col-12">
          <h3 class="abs-layer__box-title">{{ $t('abstractionLayer.sections.validation.title') }}</h3>
          <div class="abs-layer__box-desc">
            <p>{{ $t('abstractionLayer.sections.validation.description[0]') }}</p>
            <p>{{ $t('abstractionLayer.sections.validation.description[1]') }}</p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <highlightjs
            language="ruby"
            code="# app/forms/sessions/create_form.rb
class Sessions::CreateForm < ApplicationForm
  attribute :email
  attribute :password
  attribute :remember_me, :boolean, default: false

  validates :email, presence: true, email: true
  validates :password, presence: true
end"
          />
        </div>
      </div>

      <!-- Operation -->
      <div class="d-md-flex d-block abs-layer__box">
        <div class="col-md-6 col-12">
          <h3 class="abs-layer__box-title">{{ $t('abstractionLayer.sections.operation.title') }}</h3>
          <div class="abs-layer__box-desc">
            <p>{{ $t('abstractionLayer.sections.operation.description[0]') }}</p>
            <p>{{ $t('abstractionLayer.sections.operation.description[1]') }}</p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <highlightjs
            language="ruby"
            code="# app/operations/auth/login_operation.rb
class Auth::LoginOperation < ApplicationOperation
  attr_reader :user

  def call
    step_validate
    step_track_login
    step_create_session
  rescue Auth::LoginError => e
    fail!(message: e.message)
  end
end"
          />
        </div>
      </div>

      <!-- CTA Section -->
      <div class="abs-layer__cta text-center">
        <p class="abs-layer__cta-text">{{ $t('abstractionLayer.cta.ready') }}</p>
        <a href="#" class="btn btn-primary btn--rounded px-4 py-2">
          <font-awesome-icon :icon="faRocket" class="me-2" />
          {{ $t('abstractionLayer.cta.getStarted') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

onMounted(() => {
  const { fadeInUp, animateCodeBlock, animateFeatureBox } = useScrollAnimation()

  // Animate main heading section
  fadeInUp('.abs-layer__title', {
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  })

  fadeInUp('.abs-layer__desc', {
    y: 30,
    duration: 0.8,
    delay: 0.4,
    ease: 'power2.out'
  })

  // Animate feature boxes with coordinated effects
  animateFeatureBox('.abs-layer__box', {
    titleDuration: 0.8,
    descDuration: 0.6,
    stagger: 0.2
  })

  // Animate code blocks with hover effects
  animateCodeBlock('.abs-layer__box pre', {
    scale: 0.95,
    x: 30,
    duration: 0.8,
    hoverScale: 1.02
  })

  // Animate CTA section
  fadeInUp('.abs-layer__cta', {
    y: 30,
    duration: 0.8,
    delay: 0.6,
    ease: 'power2.out'
  })
})
</script>

<style lang="scss" scoped>
.abs-layer {
  color: #fff;
  position: relative;
  overflow: hidden;
  padding-bottom: 5rem;

  &__cta {
    margin-top: 3rem;
    position: relative;
    z-index: 2;

    &-text {
      font-size: 1.25rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }

    .btn {
      font-size: 1.1rem;
      padding: 0.75rem 2rem;
      transition: all 0.3s ease;
      background: linear-gradient(45deg, var(--c-primary--300), var(--c-primary));
      border: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }
    }
  }

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
    padding: 2rem 0;
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

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-30px, 30px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
