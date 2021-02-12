<template>
    <div style="border: 1px solid black; width: 50%; margin-top: 20px;">
      <p> Lieu : {{selectedDef.fields.designation}} </p>
      <p> Précisions : {{selectedDef.fields.position_precise}} </p>
      <p> Jours d'ouverture : {{selectedDef.fields.jours_ouverture}} </p>
      <p> Heure d'ouverture : {{selectedDef.fields.heure_ouverture}} </p>
      <p> Heure fermeture : {{selectedDef.fields.heure_fermeture}} </p>
      <button @click="$emit('close')">Close</button>
    </div>
</template>

<script>

export default {
  name: "Popup",
  props: {
    selectedDef: undefined
  },
  methods:{
    showDef(def){
      this.selectedDef = def;
    }
  }
};
</script>