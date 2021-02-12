<template>
    <div>
      <p>{{def.fields.jours_ouverture}}</p>
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