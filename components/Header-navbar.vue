<template>
  <header>
    <nav class="navbar navbar-expand-md bg--blur px-4 fixed-top">
      <div class="container-fluid pt-4 pb-3">
        <nuxt-link to="/" class="navbar-brand mb-0 fw-bold fs-body-lg">S-D STUDIO</nuxt-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarNav" class="collapse navbar-collapse custom-mobile-menu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item pe-md-2">
              <nuxt-link :to="{ path:'/', hash:'#home' }" class="nav-link">Home</nuxt-link>
            </li>
            <li class="nav-item px-md-2">
              <nuxt-link :to="{ path:'/', hash:'#about' }" class="nav-link">About US</nuxt-link>
            </li>
            <li class="nav-item px-md-2">
              <nuxt-link :to="{ path:'/', hash:'#work' }" class="nav-link">Work</nuxt-link>
            </li>
            <li class="nav-item ps-md-2">
              <nuxt-link :to="{ path:'/', hash:'#contact' }" class="nav-link">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>

</script>

<style lang="scss">
.bg--blur{
  background: rgba(217,217,217,0.5);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}
</style>