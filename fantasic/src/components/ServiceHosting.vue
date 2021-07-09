<template>
    <section class="service-hosting section-padding" id="service">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="title-style-8 text-center">
                        <h6>WE MAKE GOOD</h6>
                        <h4>OUR SERVICES</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(service, index) in services" :key="index" class="col-lg-4 col-md-6">
                    <div class="service-hosting-item">
                        <div class="icon">
                            <img :src="service.icon" alt="service icon">
                        </div>
                        <div class="content">
                            <div class="title">
                                <h6>{{ service.title }}</h6>
                            </div>
                            <p>{{ service.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        name: 'ServiceHosting',
        data (){
            return {
                services: [
                    {
                        icon: require('../assets/img/hosting/icon/1.png'),
                        title: 'Firewall',
                        desc: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                    },
                    {
                        icon: require('../assets/img/hosting/icon/2.png'),
                        title: 'Data Enctyption',
                        desc: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                    },
                    {
                        icon: require('../assets/img/hosting/icon/3.png'),
                        title: 'Data Analysis',
                        desc: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                    },
                    {
                        icon: require('../assets/img/hosting/icon/4.png'),
                        title: 'Technical Service',
                        desc: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                    },
                    {
                        icon: require('../assets/img/hosting/icon/5.png'),
                        title: 'Data Protection',
                        desc: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                    },
                    {
                        icon: require('../assets/img/hosting/icon/6.png'),
                        title: 'Monitoring',
                        desc: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                    },
                ]
            }
        }
    };
</script>

<style lang="scss">
     @import '../assets/scss/variables.scss';
    .service-hosting-item {
        border: 1px dashed #e1e1e1;
        margin-top: 70px;
        padding: 12px 11px;
        position: relative;
        .icon {
            left: 50%;
            margin-left: -32px;
            position: absolute;
            top: -32px;
            img {
                background: #fff;
                border: 3px solid #e1e1e1;
                border-radius: 50%;
                height: 65px;
                width: 65px;
            }
        }
        .content {
            background: #f9f9f9;
            padding: 45px 15px;
            text-align: center;
            .title {
                display: inline-block;
                margin-bottom: 40px;
                padding: 0 50px;
                position: relative;
                z-index: 2;
                &:before {
                    border-bottom: 4px double $theme-color-8;
                    content: "";
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: -4px;
                    width: 100%;
                    z-index: -1;
                }
            }
            h6 {
                background: #f9f9f9;
                color: $theme-color-8;
                font-size: 12px;
                font-weight: 800;
                letter-spacing: 2px;
                padding: 0 15px;
                text-transform: uppercase;
                z-index: 2;
            }
            p {
                color: #6e6e6e;
                font-size: 13px;
            }
        }
    }
</style>