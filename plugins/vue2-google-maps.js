import Vue from "vue";
import * as VueGoogleMaps from "~/node_modules/vue2-google-maps";
import GmapCluster from "~/node_modules/vue2-google-maps/dist/components/cluster"

Vue.use(VueGoogleMaps, {
  load: { key: "AIzaSyBUdwXWP_my-i0XYerY7BcDic0L-Jhe8Ok" }
});

Vue.component('GmapCluster', GmapCluster)