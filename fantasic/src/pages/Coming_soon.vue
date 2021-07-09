<template>
    <div class="coming-soon-wrapper" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="coming-soon-inner text-center">
                        <div class="coming-soon-logo">
                            <img src="../assets/img/logo/logo.png" alt="logo">
                        </div>
                        <div class="coming-soon-content">
                            <h1 class="heading-h3 text-white">We are launching soon</h1>
                            <div class="box-timer">
                                <countdown :time="new Date('12/12/2022').getTime() - new Date().getTime()">
                                    <template slot-scope="props"> 
                                        <div class="single-count">
                                            <span class="count-timer">{{ props.days }}</span>
                                            <span class="count-format">Days</span>
                                        </div>
                                        <div class="single-count">
                                            <span class="count-timer">{{ props.hours }}</span>
                                            <span class="count-format">Hours</span>
                                        </div>
                                        <div class="single-count">
                                            <span class="count-timer">{{ props.minutes }}</span>
                                            <span class="count-format">Minutes</span>
                                        </div>
                                        <div class="single-count">
                                            <span class="count-timer">{{ props.seconds }}</span>
                                            <span class="count-format">Seconds</span>
                                        </div>
                                    </template>
                                </countdown>
                            </div>
                        </div>
                        <div class="maintanence-form">
                            <input class="sub-form" type="text" placeholder="Your e-mail">
                            <button class="subscribe-btn">Subscribe</button>
                        </div>
                        <p class="form-desc"> You can subscribe us to get noticed when our website is ready.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueCountdown from '@chenfengyuan/vue-countdown';
    export default {
        name: 'Coming_soon',
        components: {
            'countdown': VueCountdown
        },
        data () {
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/coming-soon.jpg')})`
                }
            }
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/comingsoon.scss';
</style>