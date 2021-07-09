<template>
    <div class="about-hosting section-padding" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-xl-7">
                    <div class="image">
                        <img src="../assets/img/hosting/about/about.png" alt="about thumb" />
                        <div class="sin-fact">
                            <img src="../assets/img/hosting/about/1.png" alt="about icon" />
                            <div>
                                <span class="timer">221</span>
                                <h3>awards win</h3>
                            </div>
                        </div>
                        <div class="sin-fact">
                            <img src="../assets/img/hosting/about/2.png" alt="about icon" />
                            <div>
                                <span class="timer">450</span>
                                <h3>completed projects</h3>
                            </div>
                        </div>
                        <div class="sin-fact">
                            <img src="../assets/img/hosting/about/3.png" alt="about icon" />
                            <div>
                                <span class="timer">4000</span>
                                <h3>Satisfied clients</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-lg-right col-xl-5 offset-xl-0 col-lg-5 offset-lg-1">
                    <div class="title-style-8">
                        <h6>who we are</h6>
                        <h4>welcome to fantasic</h4>
                    </div>
                    <div class="about-content">
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        <a class="btn btn-round btn-2" href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'AboutHosting',
    };
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables.scss';

    .about-hosting .image {
        position: relative;
        // responsive
        @media #{$md-device}{
            margin-bottom: 70px;
        }
        @media #{$sm-device}{
            margin-bottom: 50px;
        }
    }
    .about-hosting .image .sin-fact {
        position: absolute;
        display: flex;
        @media #{$sm-device}{
            position: static;
            margin-top: 30px;
        }
    }
    .about-hosting .image .sin-fact:nth-child(2) {
        right: 190px;
        top: 0;
        // responsive
        @media #{$lg-device}{
            right: 30px;
        }
        @media #{$md-device}{
            right: 225px;
        }
    }
    .about-hosting .image .sin-fact:nth-child(3) {
        right: -18px;
        top: 110px;
        // responsive
        @media #{$lg-device}{
            right: -112px;
        }
        @media #{$md-device}{
            right: 18px;
        }
    }
    .about-hosting .image .sin-fact:nth-child(4) {
        right: -70px;
        top: 250px;
        // responsive
        @media #{$lg-device}{
            right: -145px;
        }
        @media #{$md-device}{
            right: -18px;
        }
    }
    .about-hosting .image .sin-fact img {
        float: left;
        margin-right: 10px;
    }
    .about-hosting .image .sin-fact span {
        color: #ff6c3a;
        display: inline-block;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 5px;
        margin-top: 12px;
        position: relative;
    }
    .about-hosting .image .sin-fact span::after {
        content: "+";
        padding-left: 2px;
    }
    .about-hosting .image .sin-fact h3 {
        color: #8d8d8d;
        font-family: lato;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
    }
    .about-hosting {
        margin-top: 25px;
        .about-content {
            p {
                margin-bottom: 30px;
            }
        }
    }
</style>