import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueCarousel from 'vue-carousel';

Vue.use(Vuetify);
Vue.use(VueCarousel);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
