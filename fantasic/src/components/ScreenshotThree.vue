<template>
    <section class="screenshot-style-3 section-padding section" id="screenshot">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">SCREENSHOTS</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem <br>consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="screenshot-gallery text-center">
                        <swiper :options="swiperOption">
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/screenshot/scr-5.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/screenshot/scr-2.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/screenshot/scr-3.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <!-- Optional controls -->
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'ScreenshotTwo',
        data (){
            return {
                swiperOption: {
                    speed: 600,
                    loop: true,
                    slidesPerView: 3,
                    effect: 'coverflow',
                    // grabCursor: true,
                    centeredSlides: true,
                    coverflowEffect: {
                        rotate: -25,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : false,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                     breakpoints: {
                         768: {
                            spaceBetween: 60
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                     }
                }
            }
        }
    }

</script>
