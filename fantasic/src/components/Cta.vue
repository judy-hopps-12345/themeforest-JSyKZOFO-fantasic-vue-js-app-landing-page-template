<template>
    <div class="puchase-area bg-cover" :style="bgImg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <div class="puchase">
                        <h3>Are You Ready to Buy this theme!</h3>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="puchase-button text-md-right">
                        <a href="#" class="btn btn-round btn-2 btn-2--bg">Puchase Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/hosting/puchase-bg.jpg')})`
                },
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables.scss';
    .puchase-area {
        padding: 80px 0;
        // responsive
        @media #{$xs-device}{
            padding: 62px 0;
        }
    }
    .puchase {
        @media #{$sm-device}{
            margin-bottom: 20px;
        }
        h3 {
            color: #fff;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
        }
        p {
            color: #fff;
            font-style: italic;
        }
    }
</style>