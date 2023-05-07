<template>
    <div class="container  m-auto d-flex justify-content-center ">
        <div class="row d-flex m-auto justify-content center mt-3">
            <div class="col-md-8 m-auto  ">
                <div v-if="props.games"  class="row d-flex justify-content-center head-card py-3 text-dark">
                    <div class="col-md-8">

                        <img src="../assets/High_resolution_wallpaper_background_ID_77700807380.jpg" class="card-img-top w-100 " alt="...">
                    </div>
                    <div class="col-md-4 d-flex justify-content-center align-items-center py-3  ">
                        <div>

                            <p class="h1">{{props.games[0]?.title.substring(0,14)}}</p>    
                            <h3 class="fw-light">{{ props.games[0]?.title.substring(0,4)}}</h3>
                            <p>
                                 {{ props.games[0]?.body}} 
                            </p>
                            <p class="text-muted"> 300k Downloads</p>
                            <button @click="MoreInfo" :id="`${props.games[0]?.id}`" class="btn seeMoreButton w-100 ">
                                More Info
                            </button>
                        </div>
                    </div>
                </div>
                <div v-if="props.game"  class="row d-flex justify-content-center head-card py-3 text-dark">
                    <div class="col-md-8">

                        <img src="../assets/High_resolution_wallpaper_background_ID_77700807380.jpg" class="card-img-top w-100 " alt="...">
                    </div>
                    <div class="col-md-4 d-flex justify-content-center align-items-center py-3  ">
                        <div>

                            <p class="h1">{{props.game?.title.substring(0,14)}}</p>    
                            <h3 class="fw-light">{{ props.game?.title.substring(0,4)}}</h3>
                            <p>
                                 {{ props.game?.body}} 
                            </p>
                            <p class="text-muted"> 300k Downloads</p>
                            <button @click="Back" class="btn seeMoreButton w-100 ">
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { inject,toRefs,reactive ,onBeforeMount, onMounted, onBeforeUpdate, ref, onUpdated} from 'vue';
import { useRouter } from 'vue-router';

export default {
    name:"HeadCard",
    props:['games','game'],
    setup (props) {
        const router = useRouter();
        let game =ref({}) ;
        onBeforeUpdate(()=>{
        })
        console.log("game",props.game);
        function Back(){
            router.push({path:'/all'})
        }
        onMounted(()=>{
        })
        function MoreInfo(e){
            router.push({path:`/all/${e.target.id}`});
        }
        return {Back,props,game,MoreInfo}
    },
}
</script>

<style lang="css" scoped>
    .head-card{
        background: white;
    }
    .seeMoreButton{
        color: white;
        background-color:#572589;
        border-radius: 0px;
    }
    .seeMoreButton:hover{
        background-color: #9f50ee;
        border-radius: 0px;
        color: white;
    }
</style>