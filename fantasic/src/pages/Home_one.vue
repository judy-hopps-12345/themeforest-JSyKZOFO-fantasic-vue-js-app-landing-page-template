<template>
    <div class="main-container">

        <router-view></router-view>
        <!-- Navbar section -->
        <Navbar />

        <!-- slider section -->
        <Slider></Slider>

        <!-- about section -->
        <About></About>

        <!-- best app section -->
        <Bestapp />

        <!-- features section -->
        <Features />

        <!-- testimonial section -->
        <Testimonial />

        <!-- screenshot area -->
        <Screenshot />

        <!-- video section -->
        <Video />

        <!-- team section -->
        <Team />

        <!-- download section -->
        <Download />

        <!-- contact section -->
        <Contact />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import Slider from '../components/Slider'
    import About from '../components/About'
    import Bestapp from '../components/Bestapp'
    import Features from '../components/Features'
    import Testimonial from '../components/Testimonial'
    import Screenshot from '../components/Screenshot'
    import Video from '../components/Video'
    import Team from '../components/Team'
    import Download from '../components/Download'
    import Contact from '../components/Contact'
    import Footer from '../components/Footer'

    export default {
        name: 'app',
        components: {
            Navbar,
            Slider,
            About,
            Bestapp,
            Features,
            Testimonial,
            Screenshot,
            Video,
            Team,
            Download,
            Contact,
            Footer
        }
    }
</script>

