<template>
    <div class="weather__container">
<!--       {{ weather }}-->
<!--        <div class="weather__cell" v-for="(item, index) in this.data.weather" :key="index"></div>-->
    </div>
</template>

<script>
export default {
    props: {
        lat: String,
        lng: String
    },
    created: function() {
        
    },
    mounted: function () {
//        this.$axios.$get("https://api.weather.gov/points/" + this.lat + "," + this.lng).then(data => {
//            this.$axios.$get(data.properties.forecast).then(data => {
//                console.log(data.properties.periods);
//                return this.weather = data.properties.periods
//            });
//        });
//        let {data} = await $axios.$get(`/topics/${this.topic.id}`)
        
    }

    
//        fetchData: function() {
//            this.$axios.$get("https://api.weather.gov/points/" + this.lat + "," + this.lng).then(data => {
//                console.log(data.properties);
//                let newUrl = data.properties.forecast;
//                return this.$axios.$get(newUrl, {
//                    data: data
//                    
//                    
//                })
//            }).then(data => {
//                // You can use your data received from second request here.
//                console.log(data);
//                console.log(this);
//
//              })
//        }
//    }
}
</script>

</style>

</style>