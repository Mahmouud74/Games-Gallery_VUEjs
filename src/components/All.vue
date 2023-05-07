<template>
    <div class="home">
        <!-- <p v-if="games.length"> {{games[0].title}}</p> -->
        <Modal></Modal>
        <HeadCard :games="games" ></HeadCard>
        <GamesCardsContainer :cardObj="{title:'Most Recommendations',games,range:{from:0,to:4}}"></GamesCardsContainer>
        <GamesCardsContainer :cardObj="{title:'Most Popular',games:games,range:{from:5,to:9}}"></GamesCardsContainer>
    </div>
</template>

<script>
    import HeadCard from './HeadCard.vue';
    import GamesCardsContainer from './GamesCardsContainer.vue'
    import { ref,onBeforeMount,onMounted, provide, reactive, toRefs,onUpdated } from 'vue'
    import axios from 'axios'
    import Modal from './Modal.vue';
export default {

    components:{ HeadCard, GamesCardsContainer, GamesCardsContainer, Modal },
    name:"All",
    props:['games'],
    setup () {
        function test(){
            console.log(games.value[0]);
        }
        let games=ref([]); 
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            // console.log(res.data);
            games.value=res.data
        })
        return {games,test}
    }

}
onBeforeMount(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log(res.data);
            games.value=res.data
        })
    // console.log(state.data);

})

</script>

<style lang="css" scoped>
.home{
    background-color: #F5F5F5;
}
</style>