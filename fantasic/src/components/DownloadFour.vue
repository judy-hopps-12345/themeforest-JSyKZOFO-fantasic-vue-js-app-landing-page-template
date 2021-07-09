<template>
    <section class="download-area-five bg-cover" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="download-wrapper-five section-padding">
                        <div class="section-title title-style-5 text-center">
                            <h2 class="title">DOWNLOAD OUR LATEST APP</h2>
                            <p class="paragraph-light">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                        <div class="download-content-five">
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas .</p>
                        </div>
                        <div class="button-set text-center">
                            <a href="#" class="btn btn-round"><i class="fa fa-apple"></i> Apple Store</a>
                            <a href="#" class="btn btn-round"><i class="fa fa-android"></i> Google Play</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="app-thumb">
                        <img src="../assets/img/home-medical/app.png" alt="app thumb">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Download',
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/home-medical/download-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/download.scss';
</style>
