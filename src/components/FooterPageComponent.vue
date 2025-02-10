<template>
  <section class="page-footer bg-gray--200">
    <div class="container">
      <div class="row">
        <div class="col">
          <p>Copyright © 2017 - {{ year }} HMVC</p>
        </div>
        <div class="col text-end">
          <p>Developed by the Ruby team at <a href="https://tomosia.com">TOMOSIA VIETNAM</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.page-footer {
  padding-top: 50px;
  color: var(--c-gray-900);
  font-size: 0.8125rem;
  letter-spacing: 0.3px;
  font-weight: 300;

  a {
    text-decoration: none;
  }
}
</style>

<script setup>
const year = new Date().getFullYear()
</script>
