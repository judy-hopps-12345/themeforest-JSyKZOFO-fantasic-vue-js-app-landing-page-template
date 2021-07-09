<template>
    <section class="about-area section-padding section" id="about" :class="AboutStyle">
        <div class="container">
            <div class="row mtn-30">
                <!-- single item start -->
                <div v-for="(about, abouts) in abouts" :key="abouts" class="col-lg-3 col-md-6">
                    <div class="about-item">
                        <div class="about-icon">
                            <i :class="about.icon"></i>
                        </div>
                        <div class="about-content">
                            <h6>{{ about.title }}</h6>
                            <p>{{ about.desc }}</p>
                        </div>
                    </div>
                </div>
                <!-- single item end -->
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'About',
    props: ["AboutStyle"],
    data (){
        return {
             abouts:[
                { 
                    title: "BUILD SHOWCASE", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon: "fa fa-pagelines"
                },
                {
                    title: "FULL RESPONSIVE", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon: "fa fa-laptop"
                },
                {
                    title: "RETINA READY", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon: "fa fa-apple"
                },
                {
                    title: "UNIQUE DESIGN", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon: "fa fa-paint-brush"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/about.scss';
</style>
