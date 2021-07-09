<template>
    <section class="video-section video-style-2 section-padding fix" :style="bgImg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="bestapp-content-inner">
                        <div class="section-title title-style-2 shape">
                            <h2 class="title text-white">EMBED VIDEO SUPPORT LEFT, RIGHT OR FULL WIDTH</h2>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                        <div class="bestapp-content-text pb-0">
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                            <ul class="video-list">
                                <li> <i class="fa fa-check-square-o"></i> Perfect layout</li>
                                <li> <i class="fa fa-check-square-o"></i> Sweet moves</li>
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
                    backgroundImage: `url(${require('../assets/img/bg/clients2-bg.jpg')})`
                }
            }
        }
    }
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/video.scss';
</style>
