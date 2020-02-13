<template>
    <v-app id="container">
        <div>
            <div id="app_capture">
                <v-img :src="require('../assets/app_images/Screenshot_1581578879.pnggit ')"></v-img>
            </div>
            <div id="rightSideNote">
                <span id="noteHeader" class="openSans">Introducing a fast transportation and delivery System.</span>
                <br>
                <span id="smallHeaderNote" class="nunito">Sit back and relax. Let us worry about the delivery</span>

                <v-card class="first_card" flat v-for="(note,i) in notes" :key="i">
                    <span class="title">{{note.title}}</span>
                    <br>
                    <p class="body">{{note.body}}</p>
                </v-card>
            </div>
        </div>

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
                    body: 'To be the first choice of delivery and transportation all over Addis Ababa.'
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
        background-color: #F2EFE8;
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
        background-color: #F2EFE8;
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
        font-family: 'Alegreya', serif;
    }

    .openSans {
        font-family: 'Open Sans', sans-serif;
    }

    .nunito {
        font-family: 'Nunito', sans-serif;;
    }

    .poppins {
        font-family: 'Poppins', sans-serif;
    }
</style>