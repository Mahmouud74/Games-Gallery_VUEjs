<template>
    <div class="container  m-auto d-flex justify-content-center">
        <div v-if="x.length" class="row d-flex m-auto justify-content center mt-3">
            <div class="col-md-8 m-auto  ">
                <div    class="row d-flex justify-content-center head-card mb-5 p-3 text-dark">
                    <div class="col-md-12 w-100" >
                        <div class="d-flex justify-content-between">
                            <p class="h6 ">
                                {{ props.cardObj.title }}
                            </p>
                            <p class="h6 ">
                                <button class="btn btn-transparent seeAll" @click="toggleShow">
                                    <!-- {{!show? "SeeAll &gt;":"SeeLess"}} -->
                                    SeeAll &gt;
                                    <!-- <p v-if="!show.value">SeeAll &gt;</p>
                                    <p v-else>SeeLess </p> -->
                                </button>       
                      
                            </p>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-3 mb-3 " v-for="(game,index) in x" :key="game.id">
                            <!-- {{ index }} -->
                            <img src="../assets/High_resolution_wallpaper_background_ID_77700807380.jpg" class="w-100" alt="" srcset="">
                            <div >
                                
                                <p class="fw-light text-truncate" >{{ game.title }}</p>
                            </div>
                            <p>
                            </p>
                            <button :id="`${game.id}`" @click="moreInfo" class="btn seeMoreButton w-100 ">
                                More Info
                            </button>
                            <span class=" badge  myBadge"> &starf; 4.5</span>
                        </div>
                        
                    </div>
                    <div class="col-md-4 d-flex justify-content-center align-items-center py-3  ">
                        <div>
                        </div>
                    </div>
                </div>
                


                
            </div>
        </div>
        <div class="row alert alert-violet " v-else> 
            <div class=" col-md-12 w-100 d-flex justify-content-center">
                    LOADING..
           </div> 
        </div>
    </div>
</template>



<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter,RouterLink} from "vue-router";
export default {
    name:"GamesCardsContainer",
    props:['cardObj'],
    setup (props) {
        const router =useRouter()
        let x = ref([]);
        onBeforeUpdate(()=>{
            if(!x.value.length){
                x.value.push(...props.cardObj.games.slice(props.cardObj.range.from,props.cardObj.range.to))
                // console.log('update works');
                // console.log('fromupdate',x.value);
            }
        })
        function moreInfo(e){
            // console.log(e.target.id);
            router.push({path:`/all/${e.target.id}`});
        }
        let show =ref(false);
        function toggleShow(e){
            // console.log(e.target.innerText);
            // console.log(show.value);
            
            show.value=!show.value
            // console.log(show.value);
            if(show.value){
                e.target.innerHTML='SeeLess &UpArrow;';
                // console.log("baforeSliceMore",x.value);
                x.value=[];
                x.value=(props.cardObj.games.slice(props.cardObj.range.from,props.cardObj.range.to+20))
                // console.log("afterSliceMore",props.cardObj.games.slice(10,20));
                // console.log("afterSliceMore",x.value);

            }
            else{
                
                e.target.innerHTML="SeeAll &gt;"
                console.log("before slice less",x.value);
                x.value=[];
                x.value=(props.cardObj.games.slice(props.cardObj.range.from,props.cardObj.range.to))
                console.log("after slice less",x.value);

            }
        }
        return {props,moreInfo,toggleShow,show,x}
    }
}
</script>

<style lang="css" scoped>
.head-card{
    background: white;
    transition-property: font-size;
    transition-duration: 2ms;
    font-weight: bold;

}
.alert-violet
{
    background-color: #572589;
    color: white;
    font-weight: bolder;
}
.seeAll:hover{
    font-size: larger;
    color: #572589;
    font-weight: bolder;
}
.myBadge{
    position: relative;
    left: 125px;
    bottom: 175px;
    background-color: #FFFFFF;
    color: #572589;
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