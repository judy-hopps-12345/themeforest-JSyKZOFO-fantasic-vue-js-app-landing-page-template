<template>
    <div class="bestoffer-area bg-ebony" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="bestoffer-content">
                        <div class="title-style-8 text-left">
                            <h6>GET START NOW</h6>
                            <h4 class="text-white">BEST OFFER TODAY!</h4>
                        </div>
                        <h2 class="h1 bestoffer-title">From: $20.00/per year</h2>
                        <ul class="bestoffer-list">
                            <li><i class="fa fa-database"></i>10GB Space amount</li>
                            <li><i class="fa fa-cogs"></i>Unlimited users</li>
                            <li><i class="fa fa-cloud-upload"></i>30GB Bandwidth</li>
                            <li><i class="fa fa-shield"></i>Enhanced Security</li>
                            <li><i class="fa fa-pie-chart"></i>20 MySQL Databases</li>
                        </ul>
                        <a href="#" class="btn btn-round btn-2">Buy Now</a>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="bestoffer-image"><img src="../assets/img/hosting/offer/bestoffer.png" alt="thumbnail" /></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'BestOffer',
        data(){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/hosting/offer/bestoffer-bg.png')})`
                },
            }
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    .bestoffer-area {
        background-repeat: no-repeat;
        background-position: bottom;
        padding-bottom: 150px;
        @media #{$xs-device}{
            padding-bottom: 62px;
        }
    }
    .bestoffer-content {
        padding-top: 118px;
        // responsive
        @media #{$sm-device}{
            padding-top: 62px;
        }
        .bestoffer-title {
            color: $theme-color-8;
            font-weight: 800;
            font-family: $font-family-base;
            // responsive
            @media #{$xs-device}{
                font-size: 24px;
            }
        }
        .bestoffer-list {
            margin-top: 20px;
            margin-bottom: 35px;
            li {
                color: $white;
                margin-bottom: 8px;
                &:last-child {
                    margin-bottom: 0;
                }
                i {
                    padding-right: 15px;
                }
            }
        }
    }
</style>