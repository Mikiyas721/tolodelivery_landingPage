<template>
    <v-app id="container">
        <div id="app_preview">
            <div id="left_of_app">
                <span id="app_description">Delivery app for the best delivery platform in <br> Addis</span>
                <v-btn id="downloadButton" text class="ubuntu" href="https://www.google.com/" target="_blank">Download
                    <v-icon>
                        file_download
                    </v-icon>
                </v-btn>
            </div>
            <div id="app_capture">
                <v-img :src="require('../../../tolodelivery_landingPage/src/assets/app_images/Screenshot_1581579039.png')"></v-img>
            </div>
        </div>
    </v-app>

</template>

<script>
    export default {
        name: "MobileAppDetail"
    }
</script>

<style scoped>
    #app_preview {
        margin: 3% 10% 0 20%;
    }

    #container {
        background-color: #F2EFE8;
        align-items: stretch;
    }

    #left_of_app {
        margin: 7% 15% 0 7%;
        float: left;
        width: 25%;
    }

    #app_description {
        font-size: 40px;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
    }

    #app_capture {
        float: left;
        width: 250px;
        font-size: 50px;
        margin-bottom: 50px;
    }

    #downloadButton {
        margin: 20% 0 0 20%;
        background-color: #00806C;
        color: white;
    }

    .ubuntu {
        font-family: 'Ubuntu', sans-serif;
    }


</style>