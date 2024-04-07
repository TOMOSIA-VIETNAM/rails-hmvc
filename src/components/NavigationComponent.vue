<template>
  <nav class="page-header navbar navbar-expand-lg py-0 bg-dark">
    <div class="container">
      <a class="navbar-brand py-0" href="#">
        <img src="../assets/images/logo-dark.png" alt="logo" height="72" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link">
              <font-awesome-icon :icon="faGithub" size="lg" fade />
              <span>&nbsp; v1.0.0</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link">Documentation</a>
          </li>

          <li class="nav-item">
            <a class="nav-link">About</a>
          </li>

          <li class="nav-item">
            <a class="nav-link">
              <a link="#" class="btn btn--rounded btn-primary">Book a demo</a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<style scoped>
.navbar-nav {
  align-items: center;
}

.nav-link {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  padding: 1rem 0.75rem !important;

  &:hover {
    color: #fff;
  }
}
</style>
