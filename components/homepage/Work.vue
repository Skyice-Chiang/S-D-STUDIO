<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div class="work container-md">
    <h2 class="fs-title fw-bold">Work</h2>
    <div class="work__carousel">
      <div class="py-2 row flex-nowrap">
        <div class="col">
          <nuxt-link :to="`/films/${works[0].id}`" class="work__card">
            <div class="work__thumbnail mb-3"></div>
            <h3 class="work__info mb-3">
              <span class="fs-subtitle">Film Name</span>
              <br>
              <span class="work__client fw-bold">Client</span>
            </h3>
            <div class="work__keyword d-flex">
              <div class="badge text-bg-dark rounded-2">keyword</div>
              <div class="badge text-bg-dark rounded-2 ms-2">ESG</div>
              <div class="badge text-bg-dark rounded-2 ms-2">SDGs</div>
              <div class="badge text-bg-dark rounded-2 ms-2">紀錄片</div>
            </div>
          </nuxt-link>
        </div>
        <div class="col">
          <div class="work__thumbnail mb-3"></div>
          <h3 class="work__info mb-3">
            <span class="fs-subtitle">Film Name</span>
            <br>
            <span class="work__client fw-bold">Client</span>
          </h3>
          <div class="work__keyword d-flex">
            <div class="badge text-bg-dark rounded-2">keyword</div>
            <div class="badge text-bg-dark rounded-2 ms-2">ESG</div>
            <div class="badge text-bg-dark rounded-2 ms-2">SDGs</div>
            <div class="badge text-bg-dark rounded-2 ms-2">紀錄片</div>
          </div>
        </div>
        <div class="col">
          <div class="work__thumbnail mb-3"></div>
          <h3 class="work__info mb-3">
            <span class="fs-subtitle">Film Name</span>
            <br>
            <span class="work__client fw-bold">Client</span>
          </h3>
          <div class="work__keyword d-flex">
            <div class="badge text-bg-dark rounded-2">keyword</div>
            <div class="badge text-bg-dark rounded-2 ms-2">ESG</div>
            <div class="badge text-bg-dark rounded-2 ms-2">SDGs</div>
            <div class="badge text-bg-dark rounded-2 ms-2">紀錄片</div>
          </div>
        </div>
        <div class="col">
          <div class="work__thumbnail mb-3"></div>
          <h3 class="work__info mb-3">
            <span class="fs-subtitle">Film Name</span>
            <br>
            <span class="work__client fw-bold">Client</span>
          </h3>
          <div class="work__keyword d-flex">
            <div class="badge text-bg-dark rounded-2">keyword</div>
            <div class="badge text-bg-dark rounded-2 ms-2">ESG</div>
            <div class="badge text-bg-dark rounded-2 ms-2">SDGs</div>
            <div class="badge text-bg-dark rounded-2 ms-2">紀錄片</div>
          </div>
        </div>
        <div class="col">
          <div class="work__thumbnail mb-3"></div>
          <h3 class="work__info mb-3">
            <span class="fs-subtitle">Film Name</span>
            <br>
            <span class="work__client fw-bold">Client</span>
          </h3>
          <div class="work__keyword d-flex">
            <div class="badge text-bg-dark rounded-2">keyword</div>
            <div class="badge text-bg-dark rounded-2 ms-2">ESG</div>
            <div class="badge text-bg-dark rounded-2 ms-2">SDGs</div>
            <div class="badge text-bg-dark rounded-2 ms-2">紀錄片</div>
          </div>
        </div>
        <div class="col">
          <div class="work__thumbnail mb-3"></div>
          <h3 class="work__info mb-3">
            <span class="fs-subtitle">Film Name</span>
            <br>
            <span class="work__client fw-bold">Client</span>
          </h3>
          <div class="work__keyword d-flex">
            <div class="badge text-bg-dark rounded-2">keyword</div>
            <div class="badge text-bg-dark rounded-2 ms-2">ESG</div>
            <div class="badge text-bg-dark rounded-2 ms-2">SDGs</div>
            <div class="badge text-bg-dark rounded-2 ms-2">紀錄片</div>
          </div>
        </div>
      </div>
    </div>
    <div class="feedback">
      <h4 class="fs-body-lg fw-bold">What Our Client said</h4>
      <div class="feedback__carousel">
        <ul class="row flex-nowrap">
          <li class="col">
            <div class="feedback__card p-4">
              <div class="feed__star d-flex pb-4">
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
              </div>
              <h5 class="feedback__title fw-bold">Review title</h5>
              <p>Review body</p>
              <div class="feedback__reviewer d-flex pt-4">
                <div class="feedback__reviewer-photo"></div>
                <div class="feedback__reviewer-info">
                  <p class="fw-bold">Reviewer name <br>
                    <span class="feedback__date">Date</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="col">
            <div class="feedback__card p-4">
              <div class="feed__star d-flex pb-4">
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
              </div>
              <h5 class="feedback__title fw-bold">Review title</h5>
              <p>Review body</p>
              <div class="feedback__reviewer d-flex pt-4">
                <div class="feedback__reviewer-photo"></div>
                <div class="feedback__reviewer-info">
                  <p class="fw-bold">Reviewer name <br>
                    <span class="feedback__date">Date</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="col">
            <div class="feedback__card p-4">
              <div class="feed__star d-flex pb-4">
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
              </div>
              <h5 class="feedback__title fw-bold">Review title</h5>
              <p>Review body</p>
              <div class="feedback__reviewer d-flex pt-4">
                <div class="feedback__reviewer-photo"></div>
                <div class="feedback__reviewer-info">
                  <p class="fw-bold">Reviewer name <br>
                    <span class="feedback__date">Date</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="col">
            <div class="feedback__card p-4">
              <div class="feed__star d-flex pb-4">
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
                <Icon name="ic:baseline-star-border" />
              </div>
              <h5 class="feedback__title fw-bold">Review title</h5>
              <p>Review body</p>
              <div class="feedback__reviewer d-flex pt-4">
                <div class="feedback__reviewer-photo"></div>
                <div class="feedback__reviewer-info">
                  <p class="fw-bold">Reviewer name <br>
                    <span class="feedback__date">Date</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import EmblaCarousel from 'embla-carousel';

// 定義Carousel與行為
const workApi = ref(null);
const feedApi = ref(null);

const works = reactive([
  {
    id: '20250710'
  }
]);

onMounted(() => {
  // EmblaCarousel 套件初始化綁定
  const workNode = document.querySelector('.work__carousel');
  const feedNode = document.querySelector('.feedback__carousel');
  const options = { loop: false, dragFree: true, startIndex: 0, align: 'start' };
  workApi.value = EmblaCarousel(workNode, options);
  feedApi.value = EmblaCarousel(feedNode, options);
});

</script>

<style lang="scss">
.work{
  padding-bottom: 150px;
}
.work__carousel {
  overflow: hidden;
  padding-top: 24px;
  padding-bottom: 136px;
}
.work__card{
  text-decoration: none;
  color: #000;
}
.work__thumbnail {
  width: 536px;
  height: 536px;
  background: #d9d9d9;
}    
.work__info{
  line-height: 150%;
}      
.work__client{
  font-size: 1.5rem;
}
.feedback h4{
  padding-bottom: 20px;
}
.feedback__carousel{
  overflow: hidden;
}
.feedback__card{
  width: 392px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  flex: 0 0 auto;
}
.feed__star{
  font-size: 24px;
  font-weight: bold;
}
.feedback__title{
  font-size: 1.5rem;
}
.feedback__reviewer-photo{
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #607275;
}
.feedback__reviewer-info{
  color:#757575;
  padding-left: 12px;
}
.feedback__date{
  font-weight: normal;
  color: #B3B3B3
}
</style>