<template>
    <section class="download-area section-padding fix" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title text-white">GET IT NOW</h2>
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="button-set text-center">
                        <a href="#" class="read-more active"><i class="fa fa-apple"></i> Apple Store</a>
                        <a href="#" class="read-more"><i class="fa fa-android"></i> Google Play</a>
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
                backgroundImage: `url(${require('../assets/img/download-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/download.scss';
</style>
