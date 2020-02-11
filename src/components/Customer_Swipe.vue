<template>
    <v-app id="container">
        <div id="title">
            <h1 class="ml-12 merriweather">Take a closer look</h1>
            <h3 class="josefinsans">See how easily you can use our customer application</h3>
        </div>
        <Carousel3d
                autoplay="true"
                width="280"
                height="495"
                controlsVisible="true"
                :inverse-scaling="500"
                :space="250"
        >
            <Slide v-for="(url,i) in image_url" :index="i" :key="i">
                <v-img :src="url.path" id="slide_img"></v-img>
            </Slide>
        </Carousel3d>
    </v-app>
</template>
<script>
    import {Carousel3d, Slide} from 'vue-carousel-3d'

    export default {
        name: "Swiper",
        components: {
            Carousel3d,
            Slide,
        },
        data: () => ({
            image_url: [
                {path: require('../assets/biker_swiper/1.jpg'),},
                {path: require('../assets/biker_swiper/1.jpg'),},
                {path: require('../assets/biker_swiper/1.jpg'),},
                {path: require('../assets/biker_swiper/1.jpg'),},
                {path: require('../assets/biker_swiper/1.jpg'),},
                {path: require('../assets/biker_swiper/1.jpg'),},
                {path: require('../assets/biker_swiper/1.jpg'),},
                {path: require('../assets/biker_swiper/1.jpg'),},
                {path: require('../assets/biker_swiper/1.jpg'),},
                {path: require('../assets/biker_swiper/1.jpg')},
                {path: require('../assets/biker_swiper/1.jpg')},
                {path: require('../assets/biker_swiper/1.jpg')},
                {path: require('../assets/biker_swiper/1.jpg')},
                {path: require('../assets/biker_swiper/1.jpg')}
            ]
        })
    }
</script>

<style scoped>
    #title {
        margin: 3% 0 2% 35%;
    }

    #slide_img {
        width: 280px;
    }

    #container {
        background-color: #F2EFE8;
    }

    .merriweather {
        font-family: 'Merriweather', serif;
        word-spacing: 6px;
        margin: 0 0 10px 0;
    }

    .josefinsans {
        font-family: 'Josefin Sans', sans-serif;
    }

    #caurosel {
        margin-left: 10%;
    }

</style>