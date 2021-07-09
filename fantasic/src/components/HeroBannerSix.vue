<template>
    <section class="slider-section hero-style-6" id="home" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <carousel class="hero-carousel"
                        :items = "1"
                        :nav = "false"
                        :dots = "false"
                        :autoplay = "true"
                        :smartSpeed = "1000"
                    >
                        <!-- single slider item -->
                        <div class="hero-slider-item">
                            <div class="row align-items-center">
                                <div class="col-md-7">
                                    <div class="slider-content">
                                        <h3 class="slider-subtitle"><b>FROM $3.00</b> /per month</h3>
                                        <h2 class="slider-title">UNLIMITED WEB HOSTING</h2>
                                        <ul class="hero-pricing-list">
                                            <li>Unlimited Disk Space, Bandwidth</li>
                                            <li>FREE Search & Marketing Credits</li>
                                            <li>FREE Domain Registration</li>
                                            <li>FREE Security Suite</li>
                                        </ul>
                                        <div class="slider-btn">
                                            <a href="#" class="btn btn-round">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="slider-thumb">
                                        <img src="../assets/img/hosting/slider/1.png" alt="slider thumb">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- single slider end -->

                        <!-- single slider item -->
                        <div class="hero-slider-item">
                            <div class="row align-items-center">
                                <div class="col-md-7">
                                    <div class="slider-content">
                                        <h3 class="slider-subtitle"><b>FROM $3.00</b> /per month</h3>
                                        <h2 class="slider-title">UNLIMITED WEB HOSTING</h2>
                                        <ul class="hero-pricing-list">
                                            <li>Unlimited Disk Space, Bandwidth</li>
                                            <li>FREE Search & Marketing Credits</li>
                                            <li>FREE Domain Registration</li>
                                            <li>FREE Security Suite</li>
                                        </ul>
                                        <div class="slider-btn">
                                            <a href="#" class="btn btn-round">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="slider-thumb">
                                        <img src="../assets/img/hosting/slider/2.png" alt="slider thumb">
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
        name: 'HeroBannerFive',
        components: {
            carousel 
        },
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/hosting/slider/slide-bg.jpg')})`
                }
            }
        }
    }
</script>
