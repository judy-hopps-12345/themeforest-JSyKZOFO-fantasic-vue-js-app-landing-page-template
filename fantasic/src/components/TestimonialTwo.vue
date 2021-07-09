<template>
    <section class="testimonial-area testimonial-style-2 section-padding fix section" id="review" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <carousel class="testimonial-active owl-dot-style"
                        :items = "1"
                        :nav = "false"
                        :smartSpeed = "1000"
                    >
                        <!-- testimonial item start -->
                        <div v-for="(client, clients) in clients" :key="clients" class="testimonial-item testimonial-style2">
                            <div class="testimonial-content">
                                <p>{{ client.desc }}</p>
                            </div>
                            <div class="testimonial-thumb">
                                <img :src="client.clientThumb" alt="client thumb">
                            </div>
                            <h6 class="client">{{ client.name }} - <span>{{ client.designation }}</span></h6>
                        </div>
                        <!-- testimonial item end -->
                    </carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: 'TestimonialTwo',
    components: { 
        carousel 
    },
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/bg/clients2-bg.jpg')})`
            },
            clients: [
                {
                    clientThumb: require("../assets/img/testimonial/1.png"), 
                    name: "MOHAMET LUIS", 
                    designation: "Web Designer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
                },
                {
                    clientThumb: require("../assets/img/testimonial/2.png"), 
                    name: "ERIN MAYA", 
                    designation: "Web Developer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
                },
                {
                    clientThumb: require("../assets/img/testimonial/3.png"), 
                    name: "KUNJO PANDE", 
                    designation: "Marketer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
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
