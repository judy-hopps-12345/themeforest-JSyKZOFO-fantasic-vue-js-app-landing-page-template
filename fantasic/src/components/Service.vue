<template>
    <section class="service-area fix section-padding bg-cover pb-0 section" id="service" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-5 text-center">
                        <h2 class="title">OUR SERVICES</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row service-item-inner">
                <!-- service single item start -->
                <div class="col-lg-4 col-md-6">
                    <div v-for="(service, services) in services" :key="services" class="service-item service-item__left">
                        <div class="service-icon">
                            <img :src="service.icon" alt="service icon">
                        </div>
                        <div class="service-content">
                            <h6>{{ service.title }}</h6>
                            <p>{{ service.desc }}</p>
                        </div>
                    </div>
                </div>
                <!-- service single item start -->

                <!-- service thumb start -->
                <div class="col-lg-4 order-3 order-lg-2">
                    <div class="service-middle-thumb">
                        <img src="../assets/img/home-medical/service.png" alt="service thumb">
                    </div>
                </div>
                <!-- service thumb  -->

                <!-- service single item start -->
                <div class="col-lg-4 col-md-6 order-2 order-lg-3">
                    <div v-for="(service2, services2) in services2" :key="services2" class="service-item service-item__right">
                        <div class="service-icon">
                            <img :src="service2.icon" alt="service icon">
                        </div>
                        <div class="service-content">
                            <h6>{{ service2.title }}</h6>
                            <p>{{ service2.desc }}</p>
                        </div>
                    </div>
                </div>
                <!-- service single item start -->
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Service',
        data () {
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/home-medical/service-bg.jpg')})`
                },
                services: [
                    {
                        title:"PRIMARY HEALTH CARE", 
                        desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.",  
                        icon: require("../assets/img/home-medical/service/1.png")
                    },
                    {
                        title:"OUTPATIENT SURGERY", 
                        desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.",  
                        icon: require("../assets/img/home-medical/service/2.png")
                    },
                    {
                        title:"CARDIAC CLINIC", 
                        desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.",  
                        icon: require("../assets/img/home-medical/service/3.png")
                    },
                ],
                services2: [
                    {
                        title:"OPHTHALMOLOGY CLINIC", 
                        desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.",  
                        icon: require("../assets/img/home-medical/service/4.png")
                    },
                    {
                        title:"DENTAL CLINIC", 
                        desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.",  
                        icon: require("../assets/img/home-medical/service/5.png")
                    },
                    {
                        title:"OUTPATIENT REHABILITATION", 
                        desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.",  
                        icon: require("../assets/img/home-medical/service/6.png")
                    },
                ]
            }
        }
    }
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/service.scss';
</style>
