<template>
    <div class="main-container">

        <!-- Navbar section -->
        <Navbar NavbarStyle2="header-style-3" />

        <!-- slider section -->
        <HeroBannerThree />

        <!-- about section -->
        <About AboutStyle="about-style-3" />

        <!-- best app section -->
        <BestappThree />

        <!-- feature style -->
        <FeaturesThree />

        <!-- Testimonial section -->
        <TestimonialThree />

        <!-- screenshotTwo section -->
        <ScreenshotTwo />

        <!-- Video section -->
        <VideoTwo />

        <!-- Price section -->
        <Price />

        <!-- Download section -->
        <DownloadTwo downloadThree="download-style-3" />

        <!-- contact section -->
        <Contact ContactStyle="contact-style-3" />

        <!-- footer section -->
        <Footer FooterStyle="footer-style-3" />

    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import HeroBannerThree from '../components/HeroBannerThree'
    import About from '../components/About'
    import BestappThree from '../components/BestappThree'
    import FeaturesThree from '../components/FeaturesThree'
    import TestimonialThree from '../components/TestimonialThree'
    import ScreenshotTwo from '../components/ScreenshotTwo'
    import VideoTwo from '../components/VideoTwo'
    import Price from '../components/Price'
    import DownloadTwo from '../components/DownloadTwo'
    import Contact from '../components/Contact'
    import Footer from '../components/Footer'

    export default {
        name: 'app',
        components: {
            Navbar,
            HeroBannerThree,
            About,
            BestappThree,
            FeaturesThree,
            TestimonialThree,
            ScreenshotTwo,
            VideoTwo,
            Price,
            DownloadTwo,
            Contact,
            Footer,
        }
    }
</script>

