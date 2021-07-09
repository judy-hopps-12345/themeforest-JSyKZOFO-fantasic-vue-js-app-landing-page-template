<template>
    <section class="best-app-area pt-100 fix" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="bestapp-content-inner text-center">
                        <div class="section-title text-center">
                            <div class="title-icon"></div>
                            <h2 class="title text-white">best mobile app</h2>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                        <div class="bestapp-content-text">
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                            <a href="#" class="read-more active"><i class="fa fa-android"></i> Google Play</a>
                            <a href="#" class="read-more"><i class="fa fa-apple"></i> Apple Store</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="bestapp-thumb">
                        <img src="../assets/img/bestapp.png" alt="bestapp thumb">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Bestapp',
    props: ["bestappTwo"],
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/bestapp-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/best-app.scss';
</style>
