<template>
    <section class="slider-section hero-style-1 section" id="home" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <carousel class="hero-carousel owl-dot-style owl-dot-style__2"
                        :items = "1"
                        :nav = "false"
                        :loop = "true"
                        :autoplay = "true"
                        :smartSpeed = "1000"
                    >
                        <!-- single slider item -->
                        <div v-for="(slider, sliders) in sliders" :key="sliders" class="hero-slider-item">
                            <div class="row align-items-center">
                                <div class="col-xl-6 col-lg-5 col-md-5">
                                    <div class="slider-thumb">
                                        <img :src="slider.sliderThumb" alt="slider thumb">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-7 col-md-7">
                                    <div class="slider-content">
                                        <h2 class="slider-title">{{ slider.sliderTitle }}</h2>
                                        <p class="slider-desc">{{ slider.sliderDesc }}</p>
                                        <div class="slider-btn">
                                            <a href="#" class="read-more active"><i class="fa fa-apple"></i> Apple Store</a>
                                            <a href="#" class="read-more"><i class="fa fa-android"></i> Google Play</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- single slider end -->
                    </carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    export default {
        name: 'Slider',
        components: {
            carousel 
        },
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/home-bg.jpg')})`
                },
                sliders: [
                    {
                        sliderThumb: require("../assets/img/slider/1.png"), 
                        sliderTitle: 'AWESOME MOBILE APP', 
                        sliderDesc: 'An awesome Vue template for App landing and App Store site'
                    },
                    {
                        sliderThumb: require("../assets/img/slider/2.png"), 
                        sliderTitle: 'AWESOME MOBILE APP', 
                        sliderDesc: 'An awesome Vue template for App landing and App Store site'
                    },
                    {
                        sliderThumb: require("../assets/img/slider/3.png"), 
                        sliderTitle: 'AWESOME MOBILE APP', 
                        sliderDesc: 'An awesome Vue template for App landing and App Store site'
                    },
                ]
            }
        }
    }
</script>
