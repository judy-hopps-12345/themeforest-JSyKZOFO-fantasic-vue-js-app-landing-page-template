<template>
    <section class="features-area fix feature-style-3 bg-cover section" :style="bgImg" id="feature">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-6 order-2 order-md-1">
                    <div class="feature-thumb pt-30">
                        <img src="../assets/img/feature3.png" alt="feature thumb">
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 order-1 order-md-2">
                    <div class="section-title title-style-2 text-right pb-0">
                        <h2 class="title">AWESOME FEATURES</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row feature-item-inner feature-item-inner__style-3">
                <!-- feature single item start -->
                <div v-for="(feature, features) in features" :key="features" class="col-lg-3 col-md-6">
                    <div class="feature-item">
                        <div class="feature-icon">
                            <i :class="feature.icon"></i>
                        </div>
                        <div class="feature-content">
                            <h6>{{ feature.title }}</h6>
                            <p>{{ feature.desc }}</p>
                        </div>
                    </div>
                </div>
                <!-- feature single item start -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Features',
    components: {
    },
    data () {
        return {
            features: [
                {
                    title:"ADVANCED SETTINGS", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-cogs"
                },
                {
                    title:"MESSAGES INBOX", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-envelope-o"
                },
                {
                    title:"MY PLACES", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-map-marker"
                },
                {
                    title:"EVENTS CALENDAR", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-calendar-check-o"
                },
                {
                    title:"MEDIA PLAYER", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-play-circle-o"
                },
                {
                    title:"WEATHER ON-THE-GO", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-cloud"
                },
                {
                    title:"LIVE CHAT MESSAGES", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-comments"
                },
                {
                    title:"FRIENDS LIST", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-user-plus"
                },
            ],
            bgImg: {
                backgroundImage: `url(${require('../assets/img/bg/feature3-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/feature.scss';
</style>
