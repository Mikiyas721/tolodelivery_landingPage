<template>
    <v-app>
        <container id="container">
            <v-card class="first_card" flat v-for="note in notes">
                <p class="title vollkorn">{{note.title}}</p>
                <br>
                <p class="body josefinsans">{{note.body}}</p>
            </v-card>
        </container>
    </v-app>

</template>

<script>
    export default {
        el: 'app',
        name: "Notes",
        data: () => ({

            notes: [
                {
                    title: 'Register',
                    body: "If you're a biker, you need to first come to our office and register. Please come with a copy of your libray."
                },
                {
                    title: 'Call Service',
                    body: 'You can dial our call center whenever you have trouble with the application. We will also answer any other questions you have. Just dial ????'
                },
                {
                    title: 'Cost of Service',
                    body: 'The cost of the service that you acquire through this system is calculated using a distance-based tariff. The tariff is an initial cost of 40 Ethiopian birr and 14 Ethiopian birr added for every kilometer.'
                },
                {
                    title: 'Order',
                    body: "You can order a delivery or a transport via our Mobile App. We also have a telegram bot if you're a telegram user."
                },
                /*  {
                      title: 'Call Service',
                      body: 'You can dial our call center whenever you have trouble with the application. We will also answer any other questions you have. Just dial ????'
                  },{
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