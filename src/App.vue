<template>
    <v-app>
        <v-app-bar flat color="#F2EFE8">

            <v-toolbar-title>
                <v-avatar class="ml-5">
                    <img :src="require('../assets/logo.jpg')" id="logo" class="mr-2">
                </v-avatar>

                <span class="text_tolo">Tolo</span>
                <span class="headset
                     text_delivery">Delivery</span>

            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text class="download_button">
                Download
                <v-icon>
                    file_download
                </v-icon>
            </v-btn>

        </v-app-bar>

        <v-content>

            <Mobile_Preview></Mobile_Preview>
            <Notes></Notes>
            <!--<Biker_Swipe></Biker_Swipe>-->
            <Customer_Swipe></Customer_Swipe>
            <Last></Last>
            <Play></Play>
            <Bottom></Bottom>

        </v-content>
    </v-app>
</template>

<script>
    import Mobile_Preview from './components/Mobile_Preview';
    import Notes from './components/Notes';
    /*import Biker_Swipe from './components/Biker_Swiper';*/
    import Customer_Swipe from './components/Customer_Swipe';
    import Last from './components/LastComponent';
    import Play from './components/PlayStore';
    import Bottom from './components/Bottom';

    /*TODO Add a component about the telegram bot
      TODO Add Animation effect on the swipers
      TODO Finish the bottom part of the page as in the template and replace the duplicate notes
      */

    export default {
        name: 'App',
        components: {
            Mobile_Preview,
            Notes,
            /*Biker_Swipe,*/
            Customer_Swipe,
            Last,
            Play,
            Bottom,
        },
        data: () => ({
            notes: [
                {
                    title: 'Register',
                    body: 'If your a biker, you need to first come to our office and register. You need to come with a copy of your libray'
                },

            ]

        }),
    };
</script>
<style scoped>

    .text_tolo {
        color: #8EB4E3;
        font-size: 30px;
    }

    .text_delivery {
        color: #808000;
        font-size: 30px;
    }

    #logo {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    #app_bar {
        background-color: #F2EFE8;
    }

    .download_button {
        background-color: #00806C;
        color: white;
        margin-right: 5%;
    }
</style>