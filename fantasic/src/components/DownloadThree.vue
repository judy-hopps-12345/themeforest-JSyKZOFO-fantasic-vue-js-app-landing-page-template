<template>
    <section class="download-area-four section-padding" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">DOWNLOAD OUR LATEST APP</h2>
                        <p class="paragraph-light">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="download-content">
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam 
littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas .</p>
                    </div>
                    <div class="button-set button-set__download text-center">
                        <a href="#" class="read-more round-gradient"><i class="fa fa-apple"></i> Apple Store</a>
                        <a href="#" class="read-more round-gradient"><i class="fa fa-android"></i> Google Play</a>
                        <a href="#" class="read-more round-gradient"><i class="fa fa-windows"></i> Windows Store</a>
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
                backgroundImage: `url(${require('../assets/img/bg/clients3-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/download.scss';
</style>
