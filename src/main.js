import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faMagnifyingGlass,faEllipsisVertical)
import {createRouter,createWebHistory} from 'vue-router';
import Details from './components/Details.vue'
import All from './components/All.vue'
import ErrorComponent from './components/Error.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";
const routes = [
    
        {
            path:"/",
            component:All,
            alias:"/all"
        },

        {
            path:"/all/:id",
            component:Details,
        }
        ,
        {
            path:"/:NotFount(.*)*",
            component:ErrorComponent,
            meta:{
                hideHeader:true,
            }
        }
    
]
const router = createRouter({
    routes,
    history:createWebHistory()
})
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')