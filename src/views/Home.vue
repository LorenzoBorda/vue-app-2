<template>
  <div class="home">
    <Map
      v-if="defibrillateurs.length > 0 && position.length === 2"
      :center="{lat:parseFloat(position[0]), lng:parseFloat(position[1])}"
      :zoom="13"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
    <MarkerComponent
      v-if="def.fields.location"
      v-for="(def, index) in defibrillateurs"
      :key="index"
      :position="{lat:parseFloat(def.fields.location[0]), lng:parseFloat(def.fields.location[1])}"
      :clickable="true"
      @click="emit(def)"
    />
    <MarkerComponent
      v-if="position"
      :position="{lat:parseFloat(position[0]), lng:parseFloat(position[1])}"
    />
    </Map>
    <Popup
      :selectedDef = "selectedDef"
      v-if="selectedDef"
      v-on:needDef="showDef(def)"
      >
    </Popup>
  </div>
</template>

<script>
import axios from "axios";
import { Map, Marker as MarkerComponent } from "vue2-google-maps";
import Popup from "@/components/Popup";

export default {
  name: 'Home',
  components: { Map, MarkerComponent },
  data(){
    return {
      selectedDef: undefined,
      position: [localStorage.lat, localStorage.lon],
      defibrillateurs : []
    };
  },
  methods:{
    emit(def){
      this.$root.$emit('needDef', def);
    }
  },
  
  async beforeCreate() {
    await axios
      .get("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_defibrillateurs-nantes&q=&sort=designation&facet=nature_site")
      .then(res => {
        this.defibrillateurs = res.data.records;
      });
    let a = 8;
    const res = await navigator.geolocation.getCurrentPosition(function(result) {
      localStorage.lat = result.coords.latitude;
      localStorage.lon = result.coords.longitude;
    });
    this.position = [localStorage.lat, localStorage.lon];
  }
}
</script>