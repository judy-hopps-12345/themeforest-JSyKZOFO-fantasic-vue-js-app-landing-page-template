<template>
    <section class="features-area section-padding pt-100 fix section" id="feature">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">AWESOME FEATURES</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row feature-item-inner">
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
            ]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/feature.scss';
</style>
