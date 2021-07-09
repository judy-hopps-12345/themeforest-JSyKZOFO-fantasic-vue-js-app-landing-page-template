<template>
    <div class="domains-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-12">
                    <div class="domain-text">
                        <div class="title-style-8 text-left">
                            <h6>concise and easy to understand</h6>
                            <h4>Search You Domain Name</h4>
                        </div>
                        <p>Domains only from $3.00/per year</p>
                    </div>
                </div>
                <div class="col-lg-8 col-12">
                    <div class="domain-search">
                        <form action="#" id="domainSearch-form">
                            <div class="input-box">
                                <input type="text" placeholder="Enter you domain name here..." />
                                <select name="domains" id="domains">
                                    <option value=".com">.com</option>
                                    <option value=".info">.info</option>
                                    <option value=".net">.net</option>
                                    <option value=".biz">.biz</option>
                                    <option value=".ws">.ws</option>
                                    <option value=".co">.co</option>
                                    <option value=".tv">.tv</option>
                                </select>
                            </div>
                            <button class="btn btn-round btn-2 btn-2--bg float-md-right">Search Domain</button>
                        </form>
                        <div class="domainExt">
                            <ul>
                                <li class="active"><i class="fa fa-check-square-o"></i>.com</li>
                                <li><i class="fa fa-check-square-o"></i>.biz</li>
                                <li><i class="fa fa-check-square-o"></i>.co</li>
                                <li><i class="fa fa-check-square-o"></i>.tv</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'SearchDomain',
    };
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables.scss';
    
    .domains-area {
        background: #2E3138;
        padding: 100px 0;
        // responsive
        padding: 62px 0;
    }
    .domain-text  {
        .title-style-8 {
            h4 {
                color: $white;
            }
            p {
                color: #bdbdbd;
                letter-spacing: 1px;
            }
        }
    }
    .domains-area #domainSearch-form {
        margin-bottom: 30px;
        overflow: hidden;
        width: 100%;
    }
    .domains-area #domainSearch-form .input-box {
        border: 2px solid #909090;
        border-radius: 50px;
        float: left;
        padding: 11px 0;
        margin-right: 28px;
        @media #{$xs-device}{
            float: none;
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
    .domain-search {
        // responsive
        @media #{$md-device, $sm-device}{
            margin-top: 15px;
        }
    }
    .domains-area #domainSearch-form .input-box input {
        background: transparent;
        border-color: #797979;
        border-width: 0 2px 0 0;
        color: #fff;
        padding: 0 20px;
        width: 440px;
        // responsive
        @media #{$lg-device}{
            width: 300px;
        }
        @media #{$md-device}{
            width: 360px;
        }
        @media #{$sm-device}{
            width: 200px;
        }
        @media #{$xs-device}{
            width: calc(100% - 107px);
        }
    }
    .domains-area #domainSearch-form .input-box select {
        border: 0 none;
        color: #fff;
        padding-right: 30px;
        text-align: center;
        width: 107px;
        background-color: transparent;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
    }
    .domains-area #domainSearch-form .input-box select option {
        border: 0 none;
        padding: 5px 0;
        color: #2e3138;
    }
    .domains-area .domainExt ul {
        overflow: hidden;
    }
    .domains-area .domainExt ul li {
        color: #949494;
        float: left;
        margin-right: 50px;
        @media #{$xs-device}{
            margin-right: 30px;
        }
        &:last-child {
            margin-right: 0;
        }
    }
    .domains-area .domainExt ul li:last-child {
        margin-right: 0;
    }
    .domains-area .domainExt ul li.active {
        color: $theme-color-8;
    }
    .domains-area .domainExt ul li i {
        margin-right: 5px;
    }
</style>