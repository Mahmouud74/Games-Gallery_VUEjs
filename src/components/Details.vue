<template >
    <div class="details">
        <Modal></Modal>
        <HeadCard :game="game"></HeadCard>
        <GamesCardsContainer :cardObj="{title:'Most Recommendations',games,range:{from:0,to:4}}"></GamesCardsContainer>
    </div>
</template>

<script>
import HeadCard from './HeadCard.vue';
import axios from 'axios';
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router';
import GamesCardsContainer from './GamesCardsContainer.vue';
import Modal from './Modal.vue';
export default {
    name: "Details",
    setup() {
        let gameId = useRoute().params["id"];
        console.log(gameId);
        const game = ref();
        const games=ref([]);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${gameId}`).then(res => {
            // console.log(res.data);
            game.value = res.data;
            console.log(game.value);
        });
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            // console.log(res.data);
            games.value = res.data;
            console.log(games,games.value);
        });
        return { game,games };
    },
    components: { HeadCard, GamesCardsContainer, Modal }
}
</script>

<style lang="css" scoped>
.details{
    background-color:#F5F5F5
}
</style>