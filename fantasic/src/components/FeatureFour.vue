<template>
    <section class="features-area section-padding section" id="feature">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">AWESOME FEATURES</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row feature-item-inner feature-item-inner__left align-items-center">
                <!-- feature single item start -->
                <div class="col-lg-4 col-md-6">
                    <div v-for="(feature, features) in features" :key="features" class="feature-item feature-item__left">
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

                <!-- feature thumb start -->
                <div class="col-lg-4 order-3 order-lg-2">
                    <div class="feature-middle-thumb">
                        <img src="../assets/img/feature4.png" alt="feature thumb">
                    </div>
                </div>
                <!-- feature thumb  -->

                <!-- feature single item start -->
                <div class="col-lg-4 col-md-6 order-2 order-lg-3">
                    <div v-for="(feature2, features2) in features2" :key="features2" class="feature-item feature-item__right">
                        <div class="feature-icon">
                            <i :class="feature2.icon"></i>
                        </div>
                        <div class="feature-content">
                            <h6>{{ feature2.title }}</h6>
                            <p>{{ feature2.desc }}</p>
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
    name: 'FeatureFour',
    data () {
        return {
            features: [
                {
                    title:"MESSAGES INBOX", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-envelope-o"
                },
                {
                    title:"EVENTS CALENDAR", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-calendar-check-o"
                },
                {
                    title:"WEATHER ON-THE-GO", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-cloud"
                },
            ],
            features2: [
                {
                    title:"ADVANCED SETTINGS", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-cogs"
                },
                {
                    title:"MY PLACES", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-map-marker"
                },
                {
                    title:"MEDIA PLAYER", 
                    desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon:"fa fa-play-circle-o"
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
