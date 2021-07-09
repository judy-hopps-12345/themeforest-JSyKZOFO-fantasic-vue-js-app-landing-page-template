<template>
    <div class="main-container">

        <!-- Navbar section -->
        <Navbar NavbarStyle2="header-style-3" />

        <!-- slider section -->
        <HeroBannerFour />

        <!-- about section -->
        <AboutTwo/>

        <!-- about app -->
        <AboutApp/>

        <!-- feature style -->
        <FeatureFour />

        <!-- Download section -->
        <DownloadThree />

        <!-- Video section -->
        <VideoThree />

        <!-- screenshotThree section -->
        <ScreenshotThree />

        <!-- Price section -->
        <PriceTwo />

        <!-- Testimonial section -->
        <TestimonialFour />

        <!-- contact section -->
        <ContactTwo />

        <!-- footer section -->
        <Footer FooterStyle="footer-style-4" />

    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import HeroBannerFour from '../components/HeroBannerFour'
    import AboutTwo from '../components/AboutTwo'
    import AboutApp from '../components/AboutApp'
    import FeatureFour from '../components/FeatureFour'
    import DownloadThree from '../components/DownloadThree'
    import VideoThree from '../components/VideoThree'
    import ScreenshotThree from '../components/ScreenshotThree'
    import PriceTwo from '../components/PriceTwo'
    import TestimonialFour from '../components/TestimonialFour'
    import ContactTwo from '../components/ContactTwo'
    import Footer from '../components/Footer'

    export default {
        name: 'app',
        components: {
            Navbar,
            HeroBannerFour,
            AboutTwo,
            AboutApp,
            FeatureFour,
            DownloadThree,
            VideoThree,
            ScreenshotThree,
            PriceTwo,
            TestimonialFour,
            ContactTwo,
            Footer,
        }
    }
</script>

