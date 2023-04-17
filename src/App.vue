<template>
  <div>
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
      }
    },
    mounted(){
      this.getChars();
    }
  }
</script>

<style lang="scss" scoped>

</style>