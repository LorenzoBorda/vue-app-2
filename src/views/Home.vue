<template>
  <div>
    <GoogleMap>
    <Marker
        :geoCoordinates="[
          {
            lat: 51.2432981,
            lng: 6.7950981
          }
        ]"
      />
    </GoogleMap>
  </div>
</template>

<script>

import googleMap from '@fawmi/vue-google-maps';
import axios from "axios";

export default {
  name: 'Home',

  data(){
    return {
      defibrillateurs : []
    };
  },

  async beforeCreate() {
    await axios
      .get("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_defibrillateurs-nantes&q=&sort=designation&facet=nature_site")
      .then(res => {
        this.defibrillateurs = res.data.records;
        console.log(res.data.records);
      });
  }
}
</script>