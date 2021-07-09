<template>
    <section class="latest-blog-area section-padding section" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-5 text-center">
                        <h2 class="title">LATEST NEWS</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row mtn-30">
                <div v-for="blog in blogs" :key="blog.id" class="col-lg-4">
                    <div class="blog-item">
                        <div class="blog-thumb">
                            <a href="#">
                                <img :src="blog.thumb" alt="blog thumb">
                            </a>
                            <div class="date-comment">
                                <span class="date">{{ blog.date }}</span>
                                <span class="comment"><i :class="blog.icon"></i>{{ blog.comment }}</span>
                            </div>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span><i class="fa fa-folder"></i><a href="#">anything</a>, <a href="#">blog</a></span>
                                <span><i class="fa fa-user"></i><a href="#">Erik Jhonson</a></span>
                            </div>
                            <h4 class="news-title"><a href="#">{{ blog.title }}</a></h4>
                            <p>{{ blog.desc }}</p>
                            <a class="blog-btn" :href="blog.link">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Blog',
        data (){
            return {
                blogs: [
                    {
                        thumb: require("../assets/img/home-medical/blog/1.jpg"), 
                        date: '14 FEB', 
                        icon: 'fa fa-comment', 
                        comment: '12', 
                        title: 'Duis autem vel eum iriure dolor.', 
                        desc: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam.', 
                        link:'#'
                    },
                    {
                        thumb: require("../assets/img/home-medical/blog/2.jpg"), 
                        date: '18 JUN', 
                        icon: 'fa fa-comment', 
                        comment: '32', 
                        title: 'Autem duis vel eum dolor iriure.', 
                        desc: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam.', 
                        link:'#'
                    },
                    {
                        thumb: require("../assets/img/home-medical/blog/3.jpg"), 
                        date: '16 MAR', 
                        icon: 'fa fa-comment', 
                        comment: '10', 
                        title: 'Iriure duis autem vel eum dolor.', 
                        desc: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam.', 
                        link:'#'
                    },
                ]
            }
        }
    }
</script>
