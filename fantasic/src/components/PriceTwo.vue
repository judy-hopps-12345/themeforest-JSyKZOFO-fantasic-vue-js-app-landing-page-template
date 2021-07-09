
<template>
    <section class="price-two section-padding" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">GREAT PRICES</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem<br> consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row mtn-30">
                <!-- price item start -->
                <div class="col-lg-4 col-md-4">
                    <div class="price-item price-item__style-2">
                        <div class="price-header">
                            <div class="price-cost">
                                <div class="icon">$</div>
                                <div class="currency">25</div>
                                <div class="duration">/ Month</div>
                            </div>
                            <div class="price-plan">BASIC</div>
                        </div>
                        <ul class="price-content">
                            <li>12 months support</li>
                            <li>25 HTML template</li>
                            <li>10 PSD template</li>
                            <li>Functional Offline</li>
                            <li>Synced to cloud database</li>
                            <li>Unlimited Bottles</li>
                        </ul>
                        <div class="price-footer">
                            <button class="read-more round-gradient">REGISTER</button>
                        </div>
                    </div>
                </div>
                <!-- price item start -->

                <!-- price item start -->
                <div class="col-lg-4 col-md-4">
                    <div class="price-item price-item__style-2 active">
                        <div class="price-header">
                            <div class="price-cost">
                                <div class="icon">$</div>
                                <div class="currency">50</div>
                                <div class="duration">/ Month</div>
                            </div>
                            <div class="price-plan">STANDARD</div>
                        </div>
                        <ul class="price-content">
                            <li>12 months support</li>
                            <li>25 HTML template</li>
                            <li>10 PSD template</li>
                            <li>Functional Offline</li>
                            <li>Synced to cloud database</li>
                            <li>Unlimited Bottles</li>
                        </ul>
                        <div class="price-footer">
                            <button class="read-more round-gradient active">REGISTER</button>
                        </div>
                    </div>
                </div>
                <!-- price item start -->

                <!-- price item start -->
                <div class="col-lg-4 col-md-4">
                    <div class="price-item price-item__style-2">
                        <div class="price-header">
                            <div class="price-cost">
                                <div class="icon">$</div>
                                <div class="currency">90</div>
                                <div class="duration">/ Month</div>
                            </div>
                            <div class="price-plan">PREMIUM</div>
                        </div>
                        <ul class="price-content">
                            <li>12 months support</li>
                            <li>25 HTML template</li>
                            <li>10 PSD template</li>
                            <li>Functional Offline</li>
                            <li>Synced to cloud database</li>
                            <li>Unlimited Bottles</li>
                        </ul>
                        <div class="price-footer">
                            <button class="read-more round-gradient">REGISTER</button>
                        </div>
                    </div>
                </div>
                <!-- price item start -->
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Price',
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/price-bg.jpg')})`
                }
            }
        }
    }
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/price.scss';
</style>
