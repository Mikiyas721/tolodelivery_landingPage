<template>
    <v-app id="container">
        <div style="margin-top: 7%">
            <v-card class="first_card" flat v-for="note in notes" hover="true" :key="note.title">
                <p class="title vollkorn">{{note.title}}</p>
                <br>
                <p class="body josefinsans">{{note.body}}</p>
            </v-card>
        </div>
    </v-app>

</template>

<script>
    export default {
        el: 'app',
        name: "Notes",
        data: () => ({

            notes: [
                {
                    title: 'Services',
                    body: 'We provide service using mobile app, telegram bot and call center. You are welcome to use which ever suits you the most.'
                }, {
                    title: 'Mobile App',
                    body: 'Are you android or ios user? Worry not because Our mobile app can be used by both Android and ios users. You can see the details of it by going to app store, just click the download button on the toolbar.'
                },
                {
                    title: 'Telegram Bot',
                    body: 'We also have a telegram bot for users with no space on their phone for an app or have no interest of installing a mobile app. Just go to your telegram and search for @tolo_delivery_bot.'
                },
                {
                    title: 'Call Center',
                    body: 'You can call our call center whenever you have trouble with the system, we will answer any question you may have. You can also place an order using the call center. Just dial ????'
                },
                {
                    title: 'Cost of Service',
                    body: 'The cost of the service that you acquire through this system is calculated using a distance-based tariff. The tariff is an initial cost of 40 Ethiopian birr and 10 Ethiopian birr added for every kilometer.'
                },
                {
                    title: 'Register',
                    body: "If you are a biker, you need to first come to our office and register. Please come with a copy of your libray."
                },
                /*{
                     title: 'Order',
                     body: "You can order a delivery or a transport via our Mobile App. We also have a telegram bot if you're a telegram user."
                 },
                 {
                      title: 'Call Service',
                      body: 'You can dial our call center whenever you have trouble with the application. We will also answer any other questions you have. Just dial ????'
                  },*/

            ]

        })
    }
</script>

<style scoped>
    .first_card {
        float: left;
        width: 400px;
        height: auto;
        margin: 20px;
        border-radius: 5px;
    }

    #container {
        background-color: white;
        margin: 0;
        /* height: 400px;*/
    }

    .title {
        font-family: 'Vollkorn', serif;; /*font family isnt working for title*/
        font-weight: bold;
        font-size: 18px;
        margin: 5px 5px 0 10px;
    }

    .body {
        font-weight: lighter;
        font-size: 15px;
        color: grey;
        margin: 5px 5px 5px 10px;
    }

    .josefinsans {
        font-family: 'Josefin Sans', sans-serif;
    }
</style>