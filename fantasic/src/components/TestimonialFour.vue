<template>
    <section class="testimonial-area-four section-padding section" :class="testimonialStyle" id="review">
        <div class="testimonial-top">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title title-style-4 text-center">
                            <h2 class="title">HAPPY CLIENTS</h2>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="testimonial-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <carousel class="testimonial-active-four owl-dot-style"
                            :items = "3"
                            :nav = "false"
                            :dots = "false"
                            :smartSpeed = "1000"
                            :responsive="{0:{items:1},768:{items:2},1200:{items:3}}"
                        >
                            <div v-for="(client, clients) in clients" :key="clients" class="testimonial-item">
                                <div class="testimonial-thumb">
                                    <img :src="client.clientThumb" alt="client thumb">
                                </div>
                                <div class="testimonial-content">
                                    <h6 class="client">{{ client.name }} - <span>{{ client.designation }}</span></h6>
                                    <p>{{ client.desc }}</p>
                                </div>
                            </div>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: 'TestimonialFour',
    components: { 
        carousel 
    },
    props: ["testimonialStyle"],
    data (){
        return {
            clients: [
                {
                    clientThumb: require("../assets/img/testimonial/1.png"), 
                    name: "MOHAMET LUIS", 
                    designation: "Web Designer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram..."
                },
                {
                    clientThumb: require("../assets/img/testimonial/2.png"), 
                    name: "ERIN MAYA", 
                    designation: "Web Developer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram..."
                },
                {
                    clientThumb: require("../assets/img/testimonial/3.png"), 
                    name: "KUNJO PANDE", 
                    designation: "Marketer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram..."
                },
            ]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/testimonial.scss';
</style>
