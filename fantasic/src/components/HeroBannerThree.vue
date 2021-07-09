<template>
    <section class="slider-section hero-style-2 hero-style-3 section" id="home" :style="bgImg">
        <div class="hero-slider-item">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 order-2 order-md-1">
                        <div class="slider-content slider-content__style-3">
                            <h2 class="slider-title">AWESOME MOBILE APP</h2>
                            <p class="slider-desc">An awesome Vue template for App landing and App Store site</p>
                            <div class="slider-btn">
                                <a href="#" class="read-more active"><i class="fa fa-apple"></i> Apple Store</a>
                                <a href="#" class="read-more"><i class="fa fa-android"></i> Google Play</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 order-1 order-md-2">
                        <div class="slider-banner-thumb slide-animate">
                            <img src="../assets/img/slider/home3-slide1.png" alt="slider thumb">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'HeroBanner',
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/home3-bg.jpg')})`
                }
            }
        }
    }
</script>