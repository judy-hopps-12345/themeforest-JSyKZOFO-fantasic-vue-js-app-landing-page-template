<template>
    <section class="about-app-store">
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-lg-6">
                    <div class="about-app section-padding bg-cover" :style="bgImg">
                        <div class="section-title title-style-4 text-center">
                            <h2 class="title">WHO WE ARE</h2>
                            <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem<br> consuetudium lectorum.</p>
                        </div>
                        <div class="about-app-content text-center">
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                            <a href="#" class="read-more round-gradient">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <CounterUp />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import CounterUp from '../components/CounterUp'
    export default {
        components: {
            CounterUp
        },
        data () {
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/info-left-bg.jpg')})`
                }
            }
        }
    }
</script>