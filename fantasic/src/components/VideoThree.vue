<template>
    <section class="video-section section-padding fix" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">VIDEO DEMO</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="bestapp-content-inner">
                        <div class="bestapp-content-text pb-0">
                            <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                            <ul class="video-list video-list__style-2">
                                <li><i class="fa fa-check-square-o"></i> Perfect layout</li>
                                <li><i class="fa fa-check-square-o"></i> Sweet moves</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="video-player">
                        <figure class="embed-responsive embed-responsive-16by9">
                            <iframe :src="video" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Video',
        data () {
            return {
                video: "https://www.youtube.com/embed/iaj8ktgL3BY",
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/video-bg.jpg')})`
                }
            }
        }
    }
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/video.scss';
</style>
