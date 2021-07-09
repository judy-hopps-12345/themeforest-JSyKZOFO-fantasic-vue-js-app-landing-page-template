<template>
    <section class="contact-area section-padding contact-style-4 section" :style="bgImg" id="support">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">SUPPORT CLIENTS</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row support-container">
                <div class="col-md-8">
                    <form action="#" class="support-form">
                        <div class="input-box">
                            <input class="text-field" type="text" name="name" placeholder="Your Name" />
                        </div>
                        <div class="input-box">
                            <input class="text-field" type="email" name="email" placeholder="Your Email" />
                        </div>
                        <div class="input-box">
                            <textarea class="text-field" name="message"  placeholder="Your Message" ></textarea>
                        </div>
                        <div class="input-box">
                            <input class="read-more round-gradient" type="submit" value="SEND" />
                        </div>
                    </form>
                </div>
                <div class="col-md-4">
                    <div class="support-info text-center">
                        <div class="single-info">	
                            <div class="icon">
                                <i class="fa fa-phone"></i>
                                </div>
                            <h6 class="support-title">telephones:</h6>
                            <p>(+800) 123 456 789</p>
                        </div>
                        <div class="single-info">	
                            <div class="icon">
                                <i class="fa fa-envelope-open-o "></i>
                                </div>
                            <h6 class="support-title">Address email:</h6>
                            <p>demo@fantasic.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactTwo',
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/support-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/contact.scss';
</style>
