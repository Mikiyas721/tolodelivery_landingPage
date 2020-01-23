<template>
    <v-app>
        <container id="container">

            <div id="title">
                <h1 class="ml-12">Take a closer look</h1>
                <h3>See how easily you can use our customer application</h3>
            </div>
 <!--v-for work on slide?-->
            <carousel>
                <!--<slide class="image_Slide" v-for="url in image_url">
                    <v-img :src="require(url)" class="image"></v-img>
                </slide>-->
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/1.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/2.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/3.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/4.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/5.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/6.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/7.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/8.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/9.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/10.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/11.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/12.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/13.jpg')" class="image"></v-img>
                </slide>
                <slide class="image_Slide">
                    <v-img :src="require('../assets/customer_swiper/14.jpg')" class="image"></v-img>
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
                "../assets/customer_swiper/1.jpg",
                "../assets/customer_swiper/2.jpg",
                "../assets/customer_swiper/3.jpg",
                "../assets/customer_swiper/4.jpg",
                "../assets/customer_swiper/5.jpg",
                "../assets/customer_swiper/6.jpg",
                "../assets/customer_swiper/7.jpg",
                "../assets/customer_swiper/8.jpg",
                "../assets/customer_swiper/9.jpg",
                "../assets/customer_swiper/10.jpg",
                "../assets/customer_swiper/11.jpg",
                "../assets/customer_swiper/12.jpg",
                "../assets/customer_swiper/13.jpg",
                "../assets/customer_swiper/14.jpg",
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