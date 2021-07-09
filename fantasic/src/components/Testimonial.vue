<template>
    <section class="testimonial-area pt-100 fix section" id="review" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title text-white">HAPPY CLIENTS</h2>
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <carousel class="testimonial-active owl-dot-style"
                        :items = "1"
                        :nav = "false"
                        :smartSpeed = "1000"
                    >
                        <!-- testimonial item start -->
                        <div v-for="(client, clients) in clients" :key="clients" class="testimonial-item">
                            <div class="testimonial-thumb">
                                <img :src="client.clientThumb" alt="client thumb">
                            </div>
                            <div class="testimonial-content">
                                <h6 class="client">{{ client.name }} - <span>{{ client.designation }}</span></h6>
                                <p>{{ client.desc }}</p>
                            </div>
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
    name: 'Testimonial',
    components: { 
        carousel 
    },
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/clients-bg.jpg')})`
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
