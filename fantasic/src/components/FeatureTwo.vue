<template>
    <section class="feature-style-2 bg-cover section-padding2 section" id="feature" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-2">
                        <h2 class="title">AWESOME FEATURES</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem<br> consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="feture-thumb">
                        <img src="../assets/img/feature.png" alt="feature thumb">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="feature-wrapper">
                        <div v-for="sinFeature in sinFeatures" :key="sinFeature.id" class="sin-feature fix">
                            <div class="icon">
                                <i :class="sinFeature.icon"></i>
                            </div>
                            <div class="content">
                                <h6 class="feature-title">{{ sinFeature.title }}</h6>
                                <p>{{ sinFeature.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FeatureTwo',
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/feature-bg.jpg')})`
            },
            sinFeatures: [
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
                    title:"MEDIA PLAYER", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-play-circle-o"
                },
                {
                    title:"LIVE CHAT MESSAGES", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-comments"
                },
                {
                    title:"WEATHER ON-THE-GO", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-cloud"
                },
                {
                    title:"FRIENDS LIST", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-user-plus"
                },
                {
                    title:"EVENTS CALENDAR", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-calendar-check-o"
                }
            ]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/feature.scss';
</style>
