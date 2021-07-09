<template>
    <div class="main-container">

        <!-- Navbar section -->
        <NavbarTwo />

        <!-- slider section -->
        <HeroBannerFive />

        <!-- Medical info section -->
        <MedicalInfo/>

        <!-- why choose us section -->
        <Appointment />

        <!-- about app -->
        <CounterUpTwo/>

        <!-- Service style -->
        <Service />

        <!-- Testimonial section -->
        <TestimonialFour testimonialStyle="testimonial-five" />

        <!-- team section -->
        <TeamDoctor />

        <!-- download section -->
        <DownloadFour />

        <!-- policy section -->
        <Policy />

        <!-- call to action -->
        <CallToAction />

        <!-- department section -->
        <Department />

        <!-- Blog section -->
        <Blog />

        <!-- google map section -->
        <GoogleMap />

        <!-- footer section -->
        <FooterTwo />

    </div>
</template>

<script>
    import NavbarTwo from '../components/NavbarTwo'
    import HeroBannerFive from '../components/HeroBannerFive'
    import MedicalInfo from '../components/MedicalInfo'
    import Appointment from '../components/Appointment'
    import CounterUpTwo from '../components/CounterUpTwo'
    import Service from '../components/Service'
    import TestimonialFour from '../components/TestimonialFour'
    import TeamDoctor from '../components/TeamDoctor'
    import DownloadFour from '../components/DownloadFour'
    import Policy from '../components/Policy'
    import CallToAction from '../components/CallToAction'
    import Department from '../components/Department'
    import Blog from '../components/Blog'
    import GoogleMap from '../components/GoogleMap'
    import FooterTwo from '../components/FooterTwo'

    export default {
        name: 'app',
        components: {
            NavbarTwo,
            HeroBannerFive,
            MedicalInfo,
            Appointment,
            CounterUpTwo,
            Service,
            TestimonialFour,
            TeamDoctor,
            DownloadFour,
            Policy,
            CallToAction,
            Department,
            Blog,
            GoogleMap,
            FooterTwo,
        }
    }
</script>

