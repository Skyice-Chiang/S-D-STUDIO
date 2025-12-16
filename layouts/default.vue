<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Header-navbar />
    <h1 v-if="route.path === '/'" class="visually-hidden">S-D STUDIO</h1>
    <main>
      <slot />
    </main>
    <Footer-item />
  </div>
</template>

<script setup>
const route = useRoute();
</script>
