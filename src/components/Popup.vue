<template>
    <div>
      <p>{{def.fields.jours_ouverture}}</p>
      <button @click="showDef(undefined)">Close</button>
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
  },
  mounted(){
    this.$root.$on('needDef', console.log("ok"));  
  }
};
</script>