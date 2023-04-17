<template>
  <div>
    <!-- <p>{{ store.Archetypes }}</p> -->
    <HeaderComponent />
    <CharactersList />
  </div>
</template>

<script>
  import {store} from './data/store';
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import CharactersList from './components/CharactersList.vue';
  export default {
    name: 'App',
    components: {
    HeaderComponent,
    CharactersList
},
    data(){
      return {
        store
      }
    },
    methods: {
      getChars(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res)=>{
          //console.log(res.data.data[0]);
          store.CharsList= res.data.data;
          

        })
      },
      getArchetypes(){
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((result) => {
          console.log(result.data);
          store.Archetypes = result.data;
        })
      }
    },
    mounted(){
      this.getChars();
      this.getArchetypes();
    }
  }
</script>

<style lang="scss" scoped>

</style>