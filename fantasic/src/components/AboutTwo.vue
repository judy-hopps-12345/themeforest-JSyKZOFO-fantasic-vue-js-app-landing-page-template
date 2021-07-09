<template>
    <section class="about-two-area section-padding section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">WHO WE ARE</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem<br> consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row mtn-30">
                <!-- single item start -->
                <div v-for="(about, abouts) in abouts" :key="abouts" class="col-lg-3 col-md-6">
                    <div class="about-item-two">
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
    data (){
        return {
             abouts:[
                {
                    title: "BUILD SHOWCASE",
                    desc: "Nam liber tempor cum soluta nobis eleifend option cong nihil imperdiet.", 
                    icon: "fa fa-pagelines"
                },
                {
                    title: "FULL RESPONSIVE", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option cong nihil imperdiet.", 
                    icon: "fa fa-laptop"
                },
                {
                    title: "RETINA READY", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option cong nihil imperdiet.", 
                    icon: "fa fa-apple"
                },
                {
                    title: "UNIQUE DESIGN", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option cong nihil imperdiet.", 
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
