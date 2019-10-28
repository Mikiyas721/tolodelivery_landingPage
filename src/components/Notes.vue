<template>
    <v-app>
        <container id="container">
            <v-card class="first_card" flat v-for="note in notes">
                <span class="title">{{note.title}}</span>
                <br>
                <p class="body">{{note.body}}</p>
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
                    body: 'If your a biker, you need to first come to our office and register. You need to come with a copy of your libray'
                },
                {
                    title: 'Call Service',
                    body: 'You can dial our call center whenever you have trouble with the application. We will also answer any other questions you have. Just dial ????'
                },
                {
                    title: 'Call Service',
                    body: 'You can dial our call center whenever you have trouble with the application. We will also answer any other questions you have. Just dial ????'
                },
                {
                    title: 'Call Service',
                    body: 'You can dial our call center whenever you have trouble with the application. We will also answer any other questions you have. Just dial ????'
                },
                {
                    title: 'Call Service',
                    body: 'You can dial our call center whenever you have trouble with the application. We will also answer any other questions you have. Just dial ????'
                },{
                    title: 'Call Service',
                    body: 'You can dial our call center whenever you have trouble with the application. We will also answer any other questions you have. Just dial ????'
                },

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