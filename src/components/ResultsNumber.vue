<template>
        <div class="col-12 py-2 bg-dark text-white">
            Found {{ numRes }} cards
            <!-- {{store.CharsList.length}}  -->
        </div>
</template>

<script>
    export default {
        name: 'ResultsNumber',
        props: ['numRes']
    }
</script>

<style lang="scss" scoped>

</style>