<template>
    <section class="pricing-hosting section-padding" id="pricing">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="title-style-8">
                        <h6>price list</h6>
                        <h4>OUR PLANS</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6" v-for="(pricing, index) in pricingTable" :key="index">
                    <div class="price-item price-item--hosting mx-0" :class="{'active': pricing.active}">
                        <div class="price-header">
                            <div class="price-icon">
                                <i :class="pricing.icon"></i>
                            </div>
                            <div class="price-plan">{{ pricing.title }}</div>
                            <div class="price-cost">
                                <div class="icon">{{ pricing.currency }}</div>
                                <div class="currency">{{ pricing.value }}</div>
                                <div class="duration">{{ pricing.duration }}</div>
                            </div>
                        </div>
                        <ul class="price-content">
                            <li v-for="(list, index) in pricing.price" :key="index">{{ list }}</li>
                        </ul>
                        <div class="price-footer">
                            <button class="btn btn-round btn-2" :class="{'btn-2--bg': pricing.active}">Ordedr Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        name: 'PricingHosting',
        data(){
            return {
                pricingTable: [
                    {
                        icon: 'fa fa-wrench',
                        title: 'BASIC',
                        currency: '$',
                        value: '10',
                        duration: '/ Month',
                        active: false,
                        price: ['1 GB Bandwidth', '256 MB Memory', '24/7 Full Support', '1 GB Bandwidth', '256 MB Memory']
                    },
                    {
                        icon: 'fa fa-lightbulb-o',
                        title: 'STANDARD',
                        currency: '$',
                        value: '28',
                        duration: '/ Month',
                        active: true,
                        price: ['1 GB Bandwidth', '256 MB Memory', '24/7 Full Support', '1 GB Bandwidth', '256 MB Memory']
                    },
                    {
                        icon: 'fa fa-rocket',
                        title: 'PREMIUM',
                        currency: '$',
                        value: '70',
                        duration: '/ Month',
                        active: false,
                        price: ['1 GB Bandwidth', '256 MB Memory', '24/7 Full Support', '1 GB Bandwidth', '256 MB Memory']
                    },
                    {
                        icon: 'fa fa-diamond',
                        title: 'UNLIMITED',
                        currency: '$',
                        value: '90',
                        duration: '/ Month',
                        active: false,
                        price: ['1 GB Bandwidth', '256 MB Memory', '24/7 Full Support', '1 GB Bandwidth', '256 MB Memory']
                    },
                ]
            }
        }
    };
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
</style>

