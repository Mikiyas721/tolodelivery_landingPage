<template>
    <v-app>
        <container id="container">
            <div id="app_capture">
                <v-img :src="require('../assets/mobile_preview.jpg')"></v-img>
            </div>
            <div id="rightSideNote">
                <span id="noteHeader">Introducing a fast transportation and delivery System.</span>
                <br>
                <span id="smallHeaderNote">Sit back and relax. Let us worry about the delivery</span>

                <v-card class="first_card" flat v-for="note in notes">
                    <span class="title">{{note.title}}</span>
                    <br>
                    <p class="body">{{note.body}}</p>
                </v-card>
            </div>
        </container>

    </v-app>
</template>

<script>
    export default {
        name: "LastComponent",
        data: () => ({
            notes: [
                {
                    title: 'Aim',
                    body: 'Tolo delivery aims to tackle the traffic jam problem in Addis Ababa by using Software that create the connection for bikers who deliver and transport.'
                },
                {
                    title: 'Goal',
                    body: 'To be the first choice of delivery all over Addis Ababa.'
                },
            ]

        })
    }
</script>

<style scoped>

    #app_capture {
        float: left;
        width: 250px;
        font-size: 50px;
        margin: 30px 10% 20px 10%;

    }

    #rightSideNote {
        margin-top: 40px;
        width: 400px;
        float: left;
    }

    #noteHeader {
        font-size: 30px;
    }

    #container {
        background-color: white;
    }

    #smallHeaderNote {
        color: grey;
    }

    .first_card {
        float: left;
        width: 170px;
        height: auto;
        margin: 40px 20px 20px 0;
        border-radius: 5px;
    }

    .title {
        font-weight: bold;
        font-size: 18px;
        margin: 5px 5px 5px 10px;

    }

    .body {
        font-weight: lighter;
        font-size: 15px;
        color: grey;
        margin: 5px 5px 5px 10px;
    }
</style>