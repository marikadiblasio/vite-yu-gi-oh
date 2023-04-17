<template>
    <main>
        <div class="container p-3"> 
            <select class="py-1 rounded" name="archs" id="archs" v-model="selectedType">
                <option v-for="(type, i) in store.Archetypes" :key="i" :value="type.archetype_name">{{ type.archetype_name }}</option>
            </select>
        </div>
        <div class="container bg-white">
            <div class="row ">
                <div class="col-12 py-2 bg-dark text-white">Found {{store.CharsList.length}} cards</div>
               <CharacterCard :class="{'d-none': selectedType !== char.archetype}" :image="char.card_images[0].image_url" :name="char.name" :archetype="char.archetype" v-for="(char, index) in store.CharsList" :key="char.id"/>
            </div>
        </div>
    </main>
</template>

<script>
    import { store } from '../data/store';
    import CharacterCard from './CharacterCard.vue'
    export default {
        name: 'CharactersList',
        components: {
            CharacterCard
        },
        data(){
            return {
                store,
                selectedType: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    main {
        background-color: $primary;
    }
    .col-12:first-child {
        background-color: red;
    }
</style>