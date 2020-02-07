<template>
    <v-app>
        <v-app-bar flat color="#F2EFE8">

            <v-toolbar-title>
                <v-avatar class="ml-5">
                    <img :src="require('../assets/logo.jpg')" id="logo" class="mr-2">
                </v-avatar>

                <span class="text_tolo arvo">Tolo</span>
                <span class="headset
                     text_delivery arvo">Delivery</span>

            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text class="download_button ubuntu" href="https://www.google.com/" target="_blank">
                Download
                <v-icon>
                    file_download
                </v-icon>
            </v-btn>

        </v-app-bar>

        <v-content style="background-color: blue">
            <Mobile_Preview></Mobile_Preview>
            <Notes></Notes>
            <Customer_Swipe></Customer_Swipe>
            <Bot></Bot>
            <Last></Last>


            <div id="bottom">
                <div id="navigate">
                    <p class="openSans">Navigate</p>
                    <p v-for="navigate in navs" id="link" class="nunito">
                        {{navigate.label}}
                    </p>

                </div>
                <div id="contact">
                    <p class="openSans">Contact</p>
                    <p v-for="contact in contacts" class="nunito">
                        <v-icon class="mr-3 white--text">{{contact.icon}}</v-icon>
                        {{contact.data}}
                    </p>

                </div>
            </div>
        </v-content>
    </v-app>
</template>

<script>
    import Mobile_Preview from './components/Mobile_Preview';
    import Notes from './components/Notes';
    import Customer_Swipe from './components/Customer_Swipe';
    import Last from './components/ToloDetails';
    import Bot from './components/TelegramBot';

    //TODO Add a component about the telegram bot

    export default {
        name: 'App',
        components: {
            Mobile_Preview,
            Notes,
            Customer_Swipe,
            Last,
            Bot
        },
        data: () => ({
            notes: [
                {
                    title: 'Register',
                    body: 'If your a biker, you need to first come to our office and register. You need to come with a copy of your libray'
                },

            ],
            contacts: [
                {
                    icon: 'email',
                    data: 'Mikiyas721@gmail.com'
                },
                {
                    icon: 'phone',
                    data: '0114121215'
                },
                {
                    icon: 'location_on',
                    data: 'Addis Ababa, Ethiopia'
                },
            ],
            navs: [
                {
                    link: '',
                    label: 'privacy policy'
                },
                {
                    link: '',
                    label: 'Terms of Service'
                }

            ],
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

    .download_button {
        background-color: #00806C;
        color: white;
        margin-right: 5%;
    }

    .arvo {
        font-family: 'Arvo', serif;
    }

    .ubuntu {
        font-family: 'Ubuntu', sans-serif;
    }

    #bottom {
        background-color: #303030;
        height: 400px;
        float: bottom;
    }

    #contact {

        width: auto;
        margin: 50px;
        float: left;
        color: white;
    }

    #navigate {
        width: auto;
        margin: 50px;
        float: left;
        color: white;
    }

    .openSans {
        font-family: 'Open Sans', sans-serif;
    }

    .nunito {
        font-family: 'Nunito', sans-serif;;
    }

    #link {
        color: grey;
        font-size: 14px;
    }
</style>