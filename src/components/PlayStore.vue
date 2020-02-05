<template>
    <v-app id="container">
            <div id="title">
                <h1 class="ml-12 mt-10" id="downloadPrompt">Download it now.</h1>
                <v-btn id="button" text>
                    <v-icon class="mr-2">store</v-icon>
                    App Store</v-btn>
            </div>
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
        height: 200px;
    }

    #button {
        background-color: #007D72;
        color: white;
        margin: 20px 0 100px 13%;
    }
    #downloadPrompt{
           font-family: 'Open Sans', sans-serif;
    }
</style>