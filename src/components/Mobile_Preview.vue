<template>
    <v-app>
        <container id="container">
            <div id="app_preview">
                <div id="left_of_app">
                    <span id="app_description">Delivery app for the best delivery platform in <br> Ethiopia</span>
                    <v-btn id="downloadButton" text>Download
                        <v-icon>
                            file_download
                        </v-icon>
                    </v-btn>
                </div>
                <div id="app_capture">
                    <v-img :src="require('../../../tolodelivery_landingPage/src/assets/mobile_preview.jpg')"></v-img>
                </div>
            </div>
        </container>
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
    }

    #left_of_app {
        margin: 7% 15% 0 7%;
        float: left;
        width: 25%;
    }

    #app_description {
        font-size: 40px;
        font-family: "Agency FB";
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

    #description_text {
        margin: 60px 10px 50px 35%;
        background-color: whitesmoke;
        width: 34%;
        padding: 5px;
        border: wheat 1px solid;
        border-radius: 5px;
        box-shadow: 1px 2px 1px darkgray;
    }

    #description_upper {
        color: goldenrod;
        font-size: 20px;
        margin-left: 25%;
    }

    #description_lower {
        font-size: 15px;
        color: grey;
    }

</style>