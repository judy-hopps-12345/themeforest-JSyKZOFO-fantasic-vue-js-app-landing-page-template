<template>
    <section class="medical-policy">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <div class="policy-thumb">
                        <img src="../assets/img/home-medical/about.jpg" alt="about thumb">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="policy-item-wrapper section-padding">
                        <div v-for="policy in policys" :key="policy.id" class="policy-item">
                            <div class="policy-icon">
                                <i :class="policy.icon"></i>
                            </div>
                            <div class="policy-content">
                                <h6 class="policy-title">{{ policy.title }}</h6>
                                <p class="policy-desc">{{ policy.desc }}</p>
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
        name: 'Policy',
        data () {
            return {
                policys: [
                    {
                        title:"FREE MEDICAL COUNSELING", 
                        desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod.", 
                        icon:"fa fa-comments"
                    },
                    {
                        title:"WELL EXPERIENCED DOCTORS", 
                        desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod.", 
                        icon:"fa fa-user-md"
                    },
                    {
                        title:"FREE FOR CHILDREN", 
                        desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod.", 
                        icon:"fa fa-street-view"
                    },
                ]
            }
        }
    }
</script>
