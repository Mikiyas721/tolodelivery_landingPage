<template>
    <v-app id="bottom">
        <div>
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
        float: top;
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