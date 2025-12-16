<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div class="film container">
    <h1 class="film__title fs-hero fw-bold">Film Name</h1>
    <div class="film__src"></div>
    <div class="film__esg-photo-list d-flex">
      <nuxtImg :src="`images/esg/01.png`" class="film__esg-photo-item" />
      <nuxtImg :src="`images/esg/02.png`" class="film__esg-photo-item" />
    </div>
    <article class="film__desc">
      <section class="purpose d-flex justify-content-around align-items-center">
        <h2 class="purpose__title col-6 fs-hero fw-bold">THE Purpose <br>of this <br>Documentary</h2>
        <p class="purpose__desc col-6 fs-body-lg fw-bold">Lorem ipsum dolor sit amet consectetur. Magna consequat ut nullam pellentesque. Consequat aenean vitae lorem adipiscing
        sapien donec habitasse imperdiet eget. Enim varius diam orci pharetra suspendisse interdum massa. Facilisi sociis
        habitant tempus nisl feugiat.</p>
        </section>
      <section class="concept d-flex justify-content-around align-items-center">
        <h2 class="concept__title col-6 fs-hero fw-bold">Concept</h2>
        <p class="concept__desc col-6 fs-body-lg fw-bold">Lorem ipsum dolor sit amet consectetur. Magna consequat ut nullam pellentesque.</p>
      </section>
      <p class="film-desc__detail fs-body-md">
        Lorem ipsum dolor sit amet consectetur. Aliquet ultrices commodo platea lorem mauris maecenas fringilla. Cras imperdiet
        quam semper venenatis sed proin consectetur pellentesque. Volutpat leo orci porttitor semper cursus dolor vestibulum.
        Amet gravida nisl dapibus ipsum arcu diam faucibus pellentesque. At magna nunc ut ultricies egestas in vivamus. Libero
        tempor velit odio nulla lorem vulputate. Enim egestas tincidunt a lectus lorem proin eget dictum id. Suscipit egestas
        velit augue volutpat consequat iaculis. Lorem id volutpat ipsum fermentum in porttitor et nunc praesent. Et phasellus
        ornare viverra augue. Dignissim euismod semper magna quis. Et et ultricies fermentum mi lobortis. Elementum sed odio
        enim dictum feugiat porttitor malesuada. Metus lectus venenatis tortor scelerisque gravida tellus ipsum metus.
      </p>
      <section class="behind">
        <div class="d-flex justify-content-between align-items-center">
          <h3 class="behind__title fs-body-lg fw-bold">Behind the Scenes</h3>
          <button class="behind__arrow">
            <Icon name="fa6-solid:arrow-right" class="behind__right" @click="goRight"/>
          </button>
        </div>
        <div class="behind__photo-carousel">
          <div class="row flex-nowrap">
            <div class="col">
              <div class="behind__photo-item"></div>
            </div>
            <div class="col">
              <div class="behind__photo-item"></div>
            </div>
            <div class="col">
              <div class="behind__photo-item"></div>
            </div>
            <div class="col">
              <div class="behind__photo-item"></div>
            </div>
            <div class="col">
              <div class="behind__photo-item"></div>
            </div>
            <div class="col">
              <div class="behind__photo-item"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="awards">
        <div class="row">
          <div class="col-md-6">
            <h2 class="awards__title fs-hero fw-bold">Awards</h2>
          </div>
          <div class="col-md-6">
            <p class="awards__desc fs-body-lg fw-bold">
              Taipei Golden Eagle Micro Movie Festival
              <br>Environmental Gold Medal Award
              <br>Best Popularity Award
            </p>
          </div>
        </div>
      </section>
      <section class="credit">
        <h2 class="credit__title fs-body-lg fw-bold">Credit</h2>
        <div class="row">
          <div class="col-md-6">
            <ul class="credit__list">
              <li class="credit__info">
                <p class="credit__postion">Executive Producer</p>
                <br>
                <p class="credit__name">NAME</p>
              </li>
              <li class="credit__info">
                <p class="credit__postion">Executive Producer</p>
                <br>
                <p class="credit__name">NAME</p>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="credit__list">
              <li class="credit__info">
                <p class="credit__postion">Executive Producer</p>
                <br>
                <p class="credit__name">NAME</p>
              </li>
              <li class="credit__info">
                <p class="credit__postion">Executive Producer</p>
                <br>
                <p class="credit__name">NAME</p>
              </li>
              <li class="credit__info">
                <p class="credit__postion">Executive Producer</p>
                <br>
                <p class="credit__name">NAME</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr class="divider-line">
    </article>
  </div>
</template>

<script setup>
import EmblaCarousel from 'embla-carousel';

// 定義Carousel與行為
const behindApi = ref(null);

function goRight () {
  if ( behindApi.value && behindApi.value.canScrollNext()) {
    behindApi.value.scrollNext();
  }
}

onMounted(() => {
  // EmblaCarousel 套件初始化綁定
  const behindNode = document.querySelector('.behind__photo-carousel');
  const options = { loop: false, dragFree: true, startIndext: 0, align: 'start' };
  behindApi.value = EmblaCarousel(behindNode, options);
});

</script>

<style lang="scss">
/* film */
.film {
  padding-top: 91.2px;
}

.film__title {
  padding-top: 55px;
  padding-bottom: 60px;
}

.film__src {
  width: 100%;
  height: 670px;
  background: #d9d9d9;
}

.film__esg-photo-list {
  padding: 85px 40px;
}

.film__esg-photo-item {
  height: 110px;
  margin-right: 20px;
}
.film__desc{
  padding: 0px 40px;
}
/* purpose */
.purpose {
  padding-bottom: 100px;
}

/* concept */
.concept {
  padding-bottom: 50px;
}

/* behind */
.behind {
  margin-top: 70px;
  padding-bottom: 85px;
  overflow: hidden;
}
.behind__arrow{
  border: 0;
  background: none;
}
.behind__arrow:hover{
  cursor: pointer;
}
.behind__right {
  font-size: 3rem;
}
.behind__photo-carousel{
  padding-top: 12px;
}
.behind__photo-item{
  width: 536px;
  height: 358px;
  background: #d9d9d9;
  flex: 0 0 auto;
}

/* Awards */
.awards{
  padding-bottom: 115px;
}

/* credit */
.credit__title{
  padding-bottom: 42px;
}
.credit__list{
  font-size: 1.25rem;
}
.credit__info{
  padding-bottom: 32px;
}
.divider-line {
  margin-top: 136px;
  border: 1px solid #d9d9d9;
  color: #d9d9d9;
}
/* film */
</style>