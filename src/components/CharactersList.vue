<template>
    <main>
        <div class="container p-3"> 
            <select @change="getfilteredArch()" class="py-1 rounded" name="archs" id="archs" v-model="selectedType">
                <option v-for="(type, i) in store.Archetypes" :key="i" :value="type.archetype_name">{{ type.archetype_name }}</option>
            </select>
        </div>
        <div class="container bg-white">
            <div class="row ">
                <div class="col-12 py-2 bg-dark text-white">Found {{filteredArray.length}} cards</div>
               <CharacterCard  :image="char.card_images[0].image_url" :name="char.name" :archetype="char.archetype" v-for="(char, index) in filteredArray" :key="char.id"/>
            </div>
        </div>
    </main>
</template>

<script>
    // import axios from 'axios';
    import { store } from '../data/store';
  import axios from 'axios';
    import CharacterCard from './CharacterCard.vue';
    export default {
        name: 'CharactersList',
        components: {
            CharacterCard
        },
        data(){
            return {
                store,
                 selectedType: '',
                 filteredArray: store.CharsList
            }
        },
         methods: {
            getfilteredArch(){
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${this.selectedType}`).then((res) => {
                this.filteredArray= res.data.data;
            })
             }
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    main {
        background-color: $primary;
    }
</style>