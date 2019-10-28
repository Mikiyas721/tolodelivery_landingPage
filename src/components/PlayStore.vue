<template>
    <v-app>
        <container id="container">

            <div id="title">
                <h1 class="ml-12 mt-10">Download it now.</h1>
                <v-btn id="button" text>Play Store</v-btn>
            </div>
            <!--v-for work on slide?-->

        </container>

    </v-app>
</template>

<script>

    export default {
        name: "Swiper",
        data: () => ({})
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

    #button {
        background-color: #007D72;
        color: white;
        margin: 20px 0 20px 13%;
    }
</style>