<template>
  <div class="hero">
    <div class="hero-white" />
    <div class="hero-photo d-flex justify-content-center align-items-center">
      <h2 class="fs-hero fw-bold">我是色塊背景</h2>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.hero-white{
  height: 91.2px;
}

.hero-photo {
  height: 720px;
  background-image: linear-gradient(150deg,rgb(199, 199, 199),rgb(141, 141, 141));
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  h2{
    color: #FFF;
    line-height: 120%;
    text-shadow: 2px 3px 5px rgba(0,0,0,0.5);
  }
}
</style>