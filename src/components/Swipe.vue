<template>
    <v-app>
        <container id="container">

            <div id="title">
                <h1 class="ml-12">Take a closer look</h1>
                <h3>See how easily you can use our application</h3>
            </div>
 <!--v-for work on slide?-->
            <carousel>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/swiper/1.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/swiper/2.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/swiper/3.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/swiper/4.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/swiper/5.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/swiper/6.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/swiper/7.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/swiper/8.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/swiper/9.jpg')" class="image"></v-img>
                </slide>
            </carousel>
        </container>

    </v-app>
</template>

<script>

    export default {
        name: "Swiper",
        data: () => ({
            image_url: [
                "../assets/swiper/1.jpg",
                "../assets/swiper/2.jpg",
                "../assets/swiper/3.jpg",
                "../assets/swiper/4.jpg",
                "../assets/swiper/5.jpg",
                "../assets/swiper/6.jpg",
                "../assets/swiper/7.jpg",
                "../assets/swiper/8.jpg",
                "../assets/swiper/9.jpg",
            ]
        })
    }
</script>

<style scoped>
    #title {
        margin-left: 35%;
    }

    #container {
        background-color: #F2EFE8;
        margin-bottom: 50px;
    }

    .image {
        height: 500px;
        margin-left: 50%;
    }

    .image_Slide {
        margin:20px 0px 0px 13%;

    }
</style>