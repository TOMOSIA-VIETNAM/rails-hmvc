<template>
  <nav class="navbar navbar-expand-lg py-0 bg-dark">
    <div class="container">
      <a class="navbar-brand py-0" href="#">
        <img src="@/assets/images/logo-dark.png" alt="logo" height="72" />
        <span class="badge-corp">Tomosia's Ruby</span>
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
              <a link="#" class="btn btn--rounded btn-primary">Contact with us</a>
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

.badge-corp {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 100;
  margin-left: 10px;
  border-radius: 4px;
  padding: 0.35em 0.65em;
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
