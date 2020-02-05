<template>
    <v-app>
        <container id="container">
            <div id="title">
                <h1 class="ml-12 merriweather">Take a closer look</h1>
                <h3 class="josefinsans">See how easily you can use our customer application</h3>
            </div>
            <v-carousel cycle="true" interval="2000" progress="true" show-arrows-on-hover="true" vertical="true">
                <v-carousel-item
                        v-for="(item,i) in image_url" :src="item.path" :key="i"
                        style="width: 240px; height: auto; margin-left: 42%">
                </v-carousel-item>
            </v-carousel>
        </container>

    </v-app>
</template>

<script>

    export default {
        name: "Swiper",
        data: () => ({
            image_url: [
                "../assets/biker_swiper/1.jpg",
                "../assets/biker_swiper/2.jpg",
                "../assets/biker_swiper/3.jpg",
                "../assets/biker_swiper/4.jpg",
                "../assets/biker_swiper/5.jpg",
                "../assets/biker_swiper/6.jpg",
                "../assets/biker_swiper/7.jpg",
                "../assets/biker_swiper/8.jpg",
                "../assets/biker_swiper/9.jpg",
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

</style>