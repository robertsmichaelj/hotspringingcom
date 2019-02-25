<template>
    <div class="indiv__text__and__gauges">
        <div class="indiv__text">
            <div class="indiv__text__inner">
                <div class="indiv__text__alert indiv__text__cell" v-if="addToPage(data.alert)">
                    <div class="indiv__text__alert__icon">
                        <div class="alert__icon">i</div>
                    </div>
                    <h2 class="alert__text--h2">{{ data.alert }}</h2>
                </div>
                <div class="indiv__text__cell">
                    <h2 class="indiv__text__header">Description</h2>
                    <div v-html="data.long_description"></div>
                </div>
                <div v-if="addToPage(data.things_to_know)" class="indiv__text__cell">
                    <h2 class="indiv__text__header">Keep In Mind</h2>
                    <div v-html="data.things_to_know"></div>
                </div>
                <DataScale v-if="data.nudity_chance > 0" 
                    :data="data" 
                    :scaleNum="data.nudity_chance"
                    :scaleBoolean="data.skinny_dipping"
                    :scaleDescription="data.nudity_description"
                    :scaleHeader="'Nude To Prude Scale'"
                    :scaleSubHeader="'Nudity Potential At ' + data.name + ': ' + data.nudity_description"
                />
                <div v-if="addToPage(data.personal_notes)" class="indiv__text__cell">
                    <h2 class="indiv__text__header">Personal Notes</h2>
                    <div v-html="data.personal_notes"></div>
                </div>
                <div v-if="addToPage(data.directions)" class="indiv__text__cell">
                    <h2 class="indiv__text__header">Directions</h2>
                    <div v-html="data.directions"></div>
                </div>
                <div class="indiv__text__cell">
                    <a :href="'https://www.google.com/maps/dir/?api=1&destination=' + data.latitude + ',' + data.longitude" class="directions__link" target="_blank">Get Directions</a>
                </div>
            </div>
        </div>
        <div class="indiv__details">
<!--
            <div class="details__cell spring__weather">
                <h2>Weather</h2>
                <Weather :lat="data.latitude" :lng="data.longitude"/>
            </div>
-->
            <div class="details__cell details__cell--darkback spring__at__a__glance">
                <h2>At A Glance</h2>
                <div class="glance__cell">
                    <h4>Region: <span>{{ data.region }}</span></h4>
                    <h4>Nearest Town: <span>{{ data.nearest_town }}</span></h4>
                    <h4>Usage: 
                        <span v-if="data.popularity >= 90" class="high__usage">Very High</span>
                        <span v-else-if="data.popularity >= 80 && data.popularity < 90" class="high__usage">High</span>
                        <span v-else-if="data.popularity >= 60 && data.popularity < 80">Medium</span>
                        <span v-else-if="data.popularity >= 40 && data.popularity < 60">Low</span>
                        <span v-else-if="data.popularity >= 20 && data.popularity < 40">Very Low</span>
                        <span v-else-if="data.popularity >= 0 && data.popularity < 20">Nearly None</span>
                    </h4>
                    <h4 v-if="addToPage(data.water_quality_notes)">Water Quality: <span>${{ data.water_quality_notes }}</span></h4>
                    <div class="glance__seasons" v-if="data.season_spring || data.season_summer">
                        <h4>Accessible Seasons: </h4>
                        <ul>
                            <li v-if="data.season_spring">Spring</li>
                            <li v-if="data.season_summer">Summer</li>
                            <li v-if="data.season_fall">Fall</li>
                            <li v-if="data.season_winter">Winter</li>
                        </ul>
                    </div>
                </div>
                <div class="glance__cell">
                    <h4>Parking Cost: <span>${{ data.parking_cost }}</span></h4>
                    <h4 v-if="data.family_friendly">Family Friendly? <span>Yes</span></h4>
                    <h4 v-else>Family Friendly? <span>No</span></h4>
                    <h4 v-if="data.water_temp_low > 10">Water Temp Range: <span>{{ data.water_temp_low }}F-{{ data.water_temp_high }}F</span></h4>
                </div>
            </div>
            <div v-if="data.commercial" class="details__cell spring__commercial__details">
                <h2>Business Details</h2>
                <div class="glance__cell">
                    <h3>{{ data.name }}</h3>
                    <a :href="'https://www.google.com/maps/dir/?api=1&destination=' + data.latitude + ',' + data.longitude" v-html="data.address" class="indiv__commercial__address" target="_blank"></a>
                    <a :href="'tel:' + data.phone_number">{{ data.phone_number }}</a>
                    <h4 v-if="data.cost > 0">Admission Cost: <span>${{ data.cost }}</span></h4>
                </div>
                <div class="glance__cell">
                    <div v-if="addToPage(data.hours)" class="commercial__hours">
                        <h4>Hours</h4>
                        <div v-html="data.hours"></div>
                    </div>
                </div>
                <div class="glance__cell">
                    <div class="additional__details" v-if="addToPage(data.commercial_information)">
                        <h4>Additional Information</h4>
                        <div v-html="data.commercial_information"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Weather from '~/components/springs/Weather.vue';
import DataScale from '~/components/springs/DataScale.vue';

export default {
    components: {
        Weather,
        DataScale
    },
    props: {
        data: Object
    },
    methods: {
        getWeather: function(lat, lng) {
            let weatherurl = "https://api.weather.gov/points/" + lat + "," + lng
        },
        addToPage(d) {
            if (d !== null) {
                if (d.length >= 9) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        }
    },
    computed: {
        
    }
}
</script>

<style>
.indiv__text__and__gauges {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    padding: 46px 10px 40px;
}
.indiv__text {
	width: 75%;
 	margin: 0;
  	padding: 0 30px 0 0px;
  	display: flex;
 	flex-direction: row;
  	flex-wrap: nowrap;
  	align-content: flex-start;
  	justify-content: flex-start;
	overflow: hidden;
	position: relative;
}
.indiv__details {
    padding: 0 10px;
    min-width: 280px;
}
.indiv__text__inner {
    width: 100%;
    padding: 0;
}
.indiv__text__and__gauges h2 {
    border-bottom: 1px solid var(--main-text);
}
.indiv__details h3 {
    margin: 0;
    font-weight: 400;
} 
.indiv__details h4 {
    margin: 0 0 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.details__cell--darkback h4 {
    margin-bottom: 10px;
}
.indiv__details span {
    font-weight: 300;
    margin-left: 4px;
}
.indiv__details a {
/*    margin: 0px 0 10px;*/
    font-weight: 300;
    font-size: 16px;
}
.indiv__details ul {
    margin: 0;
    font-weight: 300;
}
.indiv__details ul li {
    
}
.indiv__details p {
    margin: 3px 0 3px 0;
}

.details__cell {
    margin: 0 0 4px;
    padding: 10px 12px 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.details__cell--darkback {
    background-color: var(--main-text);
}
.details__cell--darkback h2, .details__cell--darkback h3, .details__cell--darkback h4, .details__cell--darkback ul, .details__cell--darkback li, .details__cell--darkback p, .details__cell--darkback a {
    color: #FFF;
    font-weight: 300;
}
.details__cell .indiv__commercial__address {
    margin: 4px 0;
}
.details__cell .indiv__commercial__address p {
    margin: 0;
    color: blue;
}
.glance__cell {
    margin: 12px 0 0;
}
.glance__seasons {
    margin-top: 10px;
}
.indiv__text__cell {
    margin: 0 auto 20px;
}
.indiv__text__inner .indiv__text__header {
    margin-bottom: 12px;
}
.description {
	margin-top: 15px;
}
.personalNotes {
	margin-top: 10px;
}
.indiv__text p {
	margin-bottom: 8px;
    line-height: 22px;
}
.directions__link {
    margin: 0 0 10px;
    display: inline-block;
    color: var(--link-blue);
    text-decoration: underline;
}
.indiv__details {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 1;
}
.indiv__text__alert {
    margin: 0 0 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
}
.indiv__text__alert__icon {
    width: 30px;
    height: auto;
    margin-right: 6px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
}
.alert__icon {
    width: 30px;
    height: 30px;
    max-height: 30px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    color: #FFF;
    font-weight: 500;
    font-size: 20px;
    align-self: center;
    border-radius: 50%;
    background-color: var(--dark-red);
}
.alert__text--h2 {
    line-height: 16px;
    font-size: 16px;
    margin: 0;
    align-self: center;
    color: var(--dark-red);
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:850px) {
    .indiv__text__and__gauges {
        justify-content: flex-start;
        padding: 40px 0;
    }
    .indiv__text {
        width: auto;
        padding: 0 20px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:800px) {
    .main {
        flex-wrap: wrap;
    }
    .indiv__content {
        width: 100%;
        padding: 10px 0;
    }
    .indiv__text__and__gauges {
        padding: 0;
        margin-top: 24px;
    }
    .individualImgAndText {
		flex-direction: column;
		height: auto;
	} 
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:650px) {
    .details__cell:nth-of-type(odd) {
        background-color: inherit;
    }
    .details__cell:nth-of-type(odd) h2, .details__cell:nth-of-type(odd) h3, .details__cell:nth-of-type(odd) h4, .details__cell:nth-of-type(odd) ul, .details__cell:nth-of-type(odd) li, .details__cell:nth-of-type(odd) p, .details__cell:nth-of-type(odd) a {
        color: inherit;
        font-weight: inherit;
    }
    .indiv__text__and__gauges {
        flex-wrap: wrap;
        margin-top: 0;
    }
    .indiv__text {
        padding: 0 14px;
        order: 2;
    }
    .indiv__details {
        width: 100%;
        order: 1;
        flex-wrap: wrap;
        flex-direction: row;
        padding: 0 14px;
        margin-bottom: 0px;
    }
    .details__cell {
        flex: 1 1 48%;
        padding: 0;
        margin: 30px 5px 0 0;
    }
    .indiv__text__cell {
        margin: 30px 0 0;
    }
    .spring__commercial__details, .spring__at__a__glance {
        padding: 0;
        min-width: 180px;
    }
    .indiv__text__and__gauges h2 {
        width: 100%;
    }
    .details__cell--darkback h4:nth-last-of-type(1) {
        margin-bottom: 0;
    }
    .glance__cell {
        flex: 1;
        min-width: 150px;
        padding-right: 5px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:500px) {

}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:370px) {

}
</style>