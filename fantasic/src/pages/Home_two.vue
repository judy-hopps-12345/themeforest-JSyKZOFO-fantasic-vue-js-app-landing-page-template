<template>
    <div class="main-container">

        <!-- Navbar section -->
        <Navbar NavbarStyle="NavbarStyle" />

        <!-- slider section -->
        <HeroBanner />

        <!-- about section -->
        <About AboutStyle="about-style-2" />

        <!-- best app section -->
        <BestappTwo />

        <!-- feature style -->
        <FeatureTwo />

        <!-- Testimonial section -->
        <TestimonialTwo />

        <!-- screenshotTwo section -->
        <ScreenshotTwo />

        <!-- Video section -->
        <VideoTwo />

        <!-- Price section -->
        <Price />

        <!-- Download section -->
        <DownloadTwo />

        <!-- contact section -->
        <Contact ContactStyle="contact-style-2" />

        <!-- footer section -->
        <Footer FooterStyle="footer-style-2" />

    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import HeroBanner from '../components/HeroBanner'
    import About from '../components/About'
    import BestappTwo from '../components/BestappTwo'
    import FeatureTwo from '../components/FeatureTwo'
    import TestimonialTwo from '../components/TestimonialTwo'
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
            HeroBanner,
            About,
            BestappTwo,
            FeatureTwo,
            TestimonialTwo,
            ScreenshotTwo,
            VideoTwo,
            Price,
            DownloadTwo,
            Contact,
            Footer,
        }
    }
</script>

