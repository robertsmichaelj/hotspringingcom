<template>
    <div class='info__windows'>
        <h2>{{ springName }}</h2>
        <div class='rating'>
            <h3>Our Rating: </h3>
            <div :data-rating="springRating" class='rating__star__container'>
            <div class='rating__color'></div>
                <img alt='Star Rating Block' src="https://www.hotspringing.com/directus/public/uploads/_/originals/hollowStars.png">
            </div>
        </div>
        <h3>Walking Distance: {{ springWalkingDist }}</h3>
        <h3>Parking Cost: ${{ springParkingCost }}</h3>
        <h3>Accessable Seasons: {{ springSeasons }}</h3>
        <div class='info__window__description' v-html="springDescription"/>
        <a href='"https://www.google.com/maps/dir/?api=1&destination=" + springLatitude + "," + springLongitude + "' target='_blank'>Get Directions</a>
    </div>
</template>

<script>
export default {
    props: {
        details: Object
    }
}
</script>

<style>
    
</style>