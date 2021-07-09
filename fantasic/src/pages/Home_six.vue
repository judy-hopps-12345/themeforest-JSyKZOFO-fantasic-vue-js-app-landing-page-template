<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavbarThree />

        <!-- slider section -->
        <HeroBannerSix />

        <!-- about hosting section -->
        <AboutHosting />

        <!-- serch hosting section -->
        <SearchDomain />

        <!-- service section -->
        <ServiceHosting />

        <!-- best offer section -->
        <BestOffer />

        <!-- pricing section -->
        <PricingHosting />

        <!-- testimonial section -->
        <TestimonialFive />

        <!-- chooseus section -->
        <ChooseUs />

        <!-- call to action section -->
        <Cta />

        <!-- Blog section -->
        <BlogTwo />

        <!-- google map section -->
        <GoogleMap />

        <!-- footer section -->
        <FooterTwo FooterStyle="footer-hosting" />

    </div>
</template>

<script>
    import NavbarThree from '../components/NavbarThree'
    import HeroBannerSix from '../components/HeroBannerSix'
    import AboutHosting from '../components/AboutHosting'
    import SearchDomain from '../components/SearchDomain'
    import ServiceHosting from '../components/ServiceHosting'
    import BestOffer from '../components/BestOffer'
    import PricingHosting from '../components/PricingHosting'
    import TestimonialFive from '../components/TestimonialFive'
    import ChooseUs from '../components/ChooseUs'
    import Cta from '../components/Cta'
    import BlogTwo from '../components/BlogTwo'
    import GoogleMap from '../components/GoogleMap'
    import FooterTwo from '../components/FooterTwo'

    export default {
        name: 'app',
        components: {
            NavbarThree,
            HeroBannerSix,
            AboutHosting,
            SearchDomain,
            ServiceHosting,
            BestOffer,
            PricingHosting,
            TestimonialFive,
            ChooseUs,
            Cta,
            BlogTwo,
            GoogleMap,
            FooterTwo,
        }
    }
</script>

