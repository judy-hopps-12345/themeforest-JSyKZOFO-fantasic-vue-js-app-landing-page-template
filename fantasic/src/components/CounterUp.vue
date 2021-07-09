<template>
    <div  class="fun-fact-area">
        <!-- single counterup start -->
        <div class="single-funfact">
            <div class="funfact-inner">
                <div class="funfact-icon">
                    <i class="pe-7s-users"></i>
                </div>
                <ICountUp
                    :endVal="5000"
                />
                <p>HAPPY CUSTOMERS</p>
            </div>
        </div>
        <!-- single counterup end -->

        <!-- single counterup start -->
        <div class="single-funfact">
            <div class="funfact-inner">
                <div class="funfact-icon">
                    <i class="pe-7s-cup"></i>
                </div>
                <ICountUp
                    :endVal="700"
                />
                <p>AWARDS WINNED</p>
            </div>
        </div>
        <!-- single counterup end -->

        <!-- single counterup start -->
        <div class="single-funfact">
            <div class="funfact-inner">
                <div class="funfact-icon">
                    <i class="pe-7s-alarm"></i>
                </div>
                <ICountUp
                    :endVal="3000"
                />
                <p>HOURS WORKED</p>
            </div>
        </div>
        <!-- single counterup end -->

        <!-- single counterup start -->
        <div class="single-funfact">
            <div class="funfact-inner">
                <div class="funfact-icon">
                    <i class="pe-7s-like2"></i>
                </div>
                <ICountUp
                    :endVal="2000"
                />
                <p>COMPLETE PROJECTS</p>
            </div>
        </div>
        <!-- single counterup end -->
    </div>
</template>

<script>
    import ICountUp from 'vue-countup-v2';
    export default {
        name: 'demo',
        components: {
            ICountUp
        },
        data() {
            return {
                delay: 300
            };
        }
    };
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/counterup.scss';
</style>
