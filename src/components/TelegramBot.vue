<template>
    <v-app style="background-color: white">
        <h1 id="main_title">Also checkout our telegram Bot</h1>
        <div>
            <div id="leftSide">
                <div id="first_left">
                    <v-card v-for="(detail,i) in botDetails" :key="i" id="detail_cards" flat>
                        <h4 id="card_title">{{detail.title}}</h4>
                        <p id="card_body">{{detail.body}}</p>
                    </v-card>
                </div>

                <div style="margin:10px 0 0 45%">
                    <h3 style="font-family: 'Josefin Sans', sans-serif;">All you need is a telegram account</h3>
                    <p id="redirect">The bot has a gif showing how to use it</p>
                </div>


            </div>
            <div id="rightSide">
                <v-img :src="require('../../../tolodelivery_landingPage/src/assets/bot_screen.png')"></v-img>
            </div>
        </div>

    </v-app>
</template>

<script>
    export default {
        name: "TelegramBot",
        data: () => ({
            botDetails: [
                {
                    title: "Free of order charge",
                    body: "Our order service does not charge you any extra money "
                },
                {
                    title: "Cheap",
                    body: "As the service cost of telegram is quit low, you can place your order using our bot without using much of your mobile data"
                },
                {
                    title: "Simple to use",
                    body: "Since most people are familiar with telegram and the simplicity of our bot is high," +
                        " you can easily use our bot to order. Click the link below and see how to use our bot"
                },


            ]
        })
    }
</script>

<style scoped>
    #main_title {
        font-family: 'Merriweather', serif;
        word-spacing: 6px;
        margin: 30px 0 0 32%;
    }

    #leftSide {
        width: 50%;
        float: left;
    }

    #first_left {
        margin-left: 17%;
    }

    #card_title {
        font-family: 'Vollkorn', serif;

    }

    #card_body {
        margin-top: 6px;
        color: grey;
        font-family: 'Josefin Sans', sans-serif;
    }

    #rightSide {
        float: left;
        width: 250px;
        font-size: 50px;
        margin: 20px 0 0 100px;
    }

    #detail_cards {
        padding: 5px;
        margin: 10px 0 0 25%;
    }
    #redirect{
        font-family: 'Sacramento', cursive;
        font-size: 25px;

    }

</style>