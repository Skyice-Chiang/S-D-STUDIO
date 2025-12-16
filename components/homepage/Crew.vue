<template>
  <div class="crew container-md">
    <h2 class="crew__title fs-title fw-bold">Meet the Crew</h2>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="crew__card d-flex align-items-center px-4">
            <div class="col crew__photo me-4"></div>
            <div class="col crew__info">
              <p class="crew__info-title">
                Position<br>Name
              </p>
              <p class="crew__info-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum facilis
                asperiores tenetur beatae dignissimos.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="crew__card d-flex align-items-center px-4">
            <div class="col crew__photo me-3"></div>
            <div class="col crew__info">
              <p class="crew__info-title">
                Position<br>Name
              </p>
              <p class="crew__info-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum facilis
                asperiores tenetur beatae dignissimos.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="crew__card d-flex align-items-center px-4">
            <div class="col crew__photo me-3"></div>
            <div class="col crew__info">
              <p class="crew__info-title">
                Position<br>Name
              </p>
              <p class="crew__info-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum facilis
                asperiores tenetur beatae dignissimos.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="crew__card d-flex align-items-center px-4">
            <div class="col crew__photo me-3"></div>
            <div class="col crew__info">
              <p class="crew__info-title">
                Position<br>Name
              </p>
              <p class="crew__info-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum facilis
                asperiores tenetur beatae dignissimos.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss">
.crew{
  padding-bottom: 85px;
}
.crew__title{
  padding-bottom: 32px;
}
.crew__card {
  background: #d9d9d9;
  border-radius: 20px;
  height: 300px;
}
.crew__photo {
  width: 224px;
  height: 224px;
  background: #e0f6a2;
}
.crew__info-title {
  padding-bottom: 30px;
  font-size: 2rem;
}
</style>