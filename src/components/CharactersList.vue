<template>
        <div class="container bg-white">
            <div v-if=store.loading class="rounded">Loading...</div>
            <div v-else class="row ">
                <ResultsNumber :numRes="store.CharsList.length" />
                <CharacterCard  :image="char.card_images[0].image_url" :name="char.name" :archetype="char.archetype" v-for="char in store.CharsList" :key="char.id"/>
            </div>
        </div>
</template>

<script>
    import { store } from '../data/store';
    import ResultsNumber from './ResultsNumber.vue';
    import CharacterCard from './CharacterCard.vue';
    export default {
        name: 'CharactersList',
        components: {
            ResultsNumber,
            CharacterCard
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    main {
        background-color: $primary;
    }
</style>