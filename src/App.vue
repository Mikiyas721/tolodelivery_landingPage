<template>
    <v-app>
        <v-app-bar flat color="#F2EFE8">

            <v-toolbar-title>
                <v-avatar class="ml-5">
                    <img :src="require('../assets/tolo.png')" id="logo">
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
            <Swipe></Swipe>
            <Last></Last>
            <play></play>


        </v-content>
    </v-app>
</template>

<script>
    import Mobile_Preview from './components/Mobile_Preview';
    import Notes from './components/Notes';
    import Swipe from './components/Swipe';
    import Last from './components/LastComponent';
    import Play from './components/PlayStore';

    export default {
        name: 'App',
        components: {
            Mobile_Preview,
            Notes,
            Swipe,
            Last,
            Play
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
        width: 40px;
        height: 40px;
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