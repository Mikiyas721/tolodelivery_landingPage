<template>
    <v-app>
        <container id="bottom">
            <div id="navigate">
                <p>Navigate</p>
                <p v-for="navigate in navs" id="link">
                    {{navigate.label}}
                </p>

            </div>
            <div id="contact">
                <p>Contact</p>
                <p v-for="contact in contacts">
                    <v-icon class="mr-3 white--text">{{contact.icon}}</v-icon>
                    {{contact.data}}
                </p>

            </div>
        </container>
    </v-app>

</template>

<script>
    export default {
        name: "Bottom",
        data: () => ({
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

        })
    }
</script>

<style scoped>
    #bottom {
        background-color: #303030;
        height: 400px;
        float: bottom;
    }

    #contact {
        /*background-color: blue;*/
        width: auto;
        margin: 50px;
        float: left;
        color: white;
    }

    #navigate {
        /*background-color: blue;*/
        width: auto;
        margin: 50px;
        float: left;
        color: white;
    }
    #link{
        color: grey;
        font-size: 14px;
    }
</style>