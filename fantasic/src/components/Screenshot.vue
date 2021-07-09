<template>
  <section class="screenshot-area section-padding pt-100 fix section" id="screenshot">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-center">
            <div class="title-icon"></div>
            <h2 class="title">SCREENSHOTS</h2>
            <p
              class="paragraph"
            >Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
          </div>
        </div>
      </div>
      <div class="row mtn-30">
        <div class="col-lg-4 col-md-4">
          <silentbox-single
            :src="require('../assets/img/screenshot/1.jpg')"
            class="screenshot-overlay"
          >
            <img src="../assets/img/screenshot/1.jpg" />
          </silentbox-single>
        </div>
        <div class="col-lg-4 col-md-4">
          <silentbox-single
            :src="require('../assets/img/screenshot/2.jpg')"
            class="screenshot-overlay"
          >
            <img src="../assets/img/screenshot/2.jpg" />
          </silentbox-single>
        </div>
        <div class="col-lg-4 col-md-4">
          <silentbox-single
            :src="require('../assets/img/screenshot/3.jpg')"
            class="screenshot-overlay"
          >
            <img src="../assets/img/screenshot/3.jpg" />
          </silentbox-single>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Screenshot"
};
</script>
