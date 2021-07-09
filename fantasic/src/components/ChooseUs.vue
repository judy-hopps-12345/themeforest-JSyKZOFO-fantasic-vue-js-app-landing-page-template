<template>
    <div class="whyus-area section-padding" id="chooseus">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="title-style-8 text-center">
                        <h6>CREATIVE & EXPERT</h6>
                        <h4>Why Choose Us</h4>
                    </div>
                </div>
            </div>
            <div class="whyus row">
                <div class="whyus-text">
                    <div class="col-md-8 mx-auto text-center">
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3" v-for="(item, index) in whyus" :key="index">
                    <div class="sin-whyus">
                        <div class="icon"><img :src="item.icon" alt="icon" /></div>
                        <h6>{{ item.title }}</h6>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ChooseUs',
        data(){
            return {
                whyus: [
                    {
                        icon: require('../assets/img/hosting/whyus/1.png'),
                        title: 'Everyday Backups',
                        desc: 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.'
                    },
                    {
                        icon: require('../assets/img/hosting/whyus/2.png'),
                        title: 'WORKING 24/7',
                        desc: 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.'
                    },
                    {
                        icon: require('../assets/img/hosting/whyus/3.png'),
                        title: 'HIQUALITY EQUIPMENT',
                        desc: 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.'
                    },
                    {
                        icon: require('../assets/img/hosting/whyus/4.png'),
                        title: 'PROFFECIONAL HOSTING',
                        desc: 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.'
                    }
                ]
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables.scss';
    .whyus-area {
        background: url('../assets/img/hosting/whyus/whyus-bg.jpg');
        background-size: cover;
        background-position: center;
        // responsive
        @media #{$md-device, $sm-device}{
            background: #fff none;
        }
    }
    .whyus {
        .whyus-text {
            margin-bottom: 270px;
            // responsive
            @media #{$md-device, $sm-device}{
                margin-bottom: 0;
            }
            p {
                font-size: 13px;
                color: #6e6e6e;
            }
        }
        .sin-whyus {
            // responsive
            @media #{$md-device, $sm-device}{
                margin-top: 40px;
            }
            @media #{$sm-device}{
                text-align: center;
                padding: 0 60px;
            }
            @media #{$xs-device}{
                padding: 0;
            }
            .icon {
                display: inline-block;
                width: 70px;
                margin-bottom: 15px;
            }
            h6 {
                color: $theme-color-8;
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 2px;
                margin-bottom: 25px;
                text-transform: uppercase;
            }
            p {
                color: #6e6e6e;
                font-size: 13px;
            }
        }
    }
</style>