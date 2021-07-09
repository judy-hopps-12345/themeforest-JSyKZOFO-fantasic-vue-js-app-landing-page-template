<template>
    <section class="medical-info">
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-lg-4">
                    <div class="medical-info-single bg-cover">
                        <h6 class="medical-info-title">EMERGENCY CASE</h6>
                        <div class="medical-info-body">
                            <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                            <a href="#" class="btn btn-round">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="medical-info-single medical-info-midle">
                        <h6 class="medical-info-title">OPENING HOUR</h6>
                        <ul class="medical-info-body working-hour">
                            <li>Monday - Friday: <span>08.00 - 18.00</span></li>
                            <li>Monday - Friday: <span>08.00 - 18.00</span></li>
                            <li>Monday - Friday: <span>08.00 - 18.00</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="medical-info-single">
                        <h6 class="medical-info-title">CANCER CASE</h6>
                        <div class="medical-info-body">
                            <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                            <a href="#" class="btn btn-round">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MedicalInfo'
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/medical-info.scss';
</style>
