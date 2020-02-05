<template>
    <v-app id="container">
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
    </v-app>
</template>
<script>

    export default {
        name: "Swiper",
        data: () => ({
            image_url: [
                {path: require('../assets/biker_swiper/1.jpg'),},
                {path: require('../assets/biker_swiper/2.jpg'),},
                {path: require('../assets/biker_swiper/3.jpg'),},
                {path: require('../assets/biker_swiper/4.jpg'),},
                {path: require('../assets/biker_swiper/5.jpg'),},
                {path: require('../assets/biker_swiper/6.jpg'),},
                {path: require('../assets/biker_swiper/7.jpg'),},
                {path: require('../assets/biker_swiper/8.jpg'),},
                {path: require('../assets/biker_swiper/9.jpg'),},
                {path: require('../assets/customer_swiper/10.jpg')},
                {path: require('../assets/customer_swiper/11.jpg')},
                {path: require('../assets/customer_swiper/12.jpg')},
                {path: require('../assets/customer_swiper/13.jpg')},
                {path: require('../assets/customer_swiper/14.jpg')}
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
        /* margin: 0 10px 0 10px;*/
    }

    .merriweather {
        font-family: 'Merriweather', serif;
    }

    .josefinsans {
        font-family: 'Josefin Sans', sans-serif;
    }

</style>