<template>
    <div>
        <div class="container p-3"> 
            <select @change="getfilteredArch()" class="py-1 rounded" name="archs" id="archs" v-model="selectedType">
                <option value="all" selected>All</option>
                <!-- <option value="err">errore</option> -->
                <option v-for="(type, i) in store.Archetypes" :key="i" :value="type.archetype_name">{{ type.archetype_name }}</option>
            </select>
            <div class="alert alert-danger" v-if="store.errorMessage">{{ store.errorMessage }}</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {store} from '../data/store'
    export default {
        name: 'SearchBar',
        data(){
            return{
                store,
                selectedType: 'all',
            }
        },
        methods: {
            getfilteredArch(){
                const options = {
                     params: { archetype: this.selectedType }
                }
                if((options.params.archetype === 'all')){
                    store.errorMessage = '';
                    store.loading=true;
                    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res)=>{           
                    store.CharsList = res.data.data;
                    store.loading=false;
                    })
                } else {
                    store.errorMessage = '';
                    store.loading=true;
                    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', options).then((res) => {
                    store.CharsList= res.data.data;
                }).catch((error)=>{
                    store.errorMessage = error.response.data.error;
                    store.CharsList.length = 0;
                }).finally(()=>{
                    store.loading=false;
                })
            }
        }
        }
    }
</script>

<style lang="scss" scoped>

</style>