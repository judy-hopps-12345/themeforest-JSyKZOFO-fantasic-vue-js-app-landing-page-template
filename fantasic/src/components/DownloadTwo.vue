<template>
    <section class="download-area section-padding fix downloadTwo" :style="bgImg" :class="downloadThree">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="section-title title-style-2 shape pb-0">
                        <h2 class="title text-white">GET IT NOW</h2>
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="button-set button-set__style-2">
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
    name: 'DownloadTwo',
    props: ["downloadThree"],
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/bg/clients2-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/download.scss';
</style>
