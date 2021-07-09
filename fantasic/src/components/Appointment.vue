<template>
    <section class="appointment-area section-padding section" id="appointment">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="appointment-form">
                        <h6 class="appointment-title"><i class="fa fa-file-text-o"></i> APPOINTMENTS FORM</h6>
                        <form class="appointment-box">
                            <input type="text" placeholder="Name" class="appointment-field">
                            <input type="text" placeholder="Email" class="appointment-field">
                            <div class="select-group">
                                <div class="single-select-item">
                                    <select name="sortby">
                                        <option value="Day">Day</option>
                                        <option value="Saturday">Saturday</option>
                                        <option value="Sunday">Sunday</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                    </select>
                                </div>
                                <div class="single-select-item">
                                    <select name="sortby">
                                        <option value="1">Time</option>
                                        <option value="2">09.00</option>
                                        <option value="3">12.00</option>
                                        <option value="4">03.00</option>
                                        <option value="5">06.00</option>
                                    </select>
                                </div>
                                <div class="single-select-item">
                                    <select name="sortby">
                                        <option value="Doctor">Doctor Name</option>
                                        <option value="Maria">Maria</option>
                                        <option value="Linda">Linda</option>
                                        <option value="Jhonson">Jhonson</option>
                                        <option value="Erik">Erik</option>
                                    </select>
                                </div>
                            </div>
                            <textarea placeholder="Message" class="textarea-field"></textarea>
                            <button class="submit-btn">SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="service-provide-area">
                        <div class="section-title title-style-5 text-center">
                            <h2 class="title">WHO WE ARE</h2>
                            <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                        <div class="service-provide-wrapper">
                            <!-- service provide item start -->
                            <div v-for="provide in provides" :key="provide.id" class="service-provide-item">
                                <div class="service-provide-icon">
                                    <img :src="provide.icon" alt="service icon">
                                </div>
                                <div class="service-provide-content">
                                    <h6>{{ provide.title }}</h6>
                                    <p>{{ provide.desc }}</p>
                                </div>
                            </div>
                            <!-- service provide item end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ChooseUs',
        data () {
            return {
                provides: [
                    {
                        icon: require("../assets/img/home-medical/provide/1.png"), 
                        title: 'HEALTHY PLANS', 
                        desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'
                    },
                    {
                        icon: require("../assets/img/home-medical/provide/2.png"), 
                        title: 'PRIVATE SUPPORT', 
                        desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'
                    },
                    {
                        icon: require("../assets/img/home-medical/provide/3.png"), 
                        title: 'WELL CARED', 
                        desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'
                    },
                    {
                        icon: require("../assets/img/home-medical/provide/4.png"), 
                        title: 'BEST HOSPITALITY', 
                        desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'
                    },
                ]
            }
        }
    }
</script>
