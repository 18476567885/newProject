import Vue from "vue"
import Router from "vue-router"

import home from "./newvue/home"
import shop from "./newvue/shop"
import coures from "./newvue/coures"
Vue.use(Router)
export default new Router({
 routes:[
    //  {path:"/",redirect:"/home"},
     {path:"/home",component:home},
     {path:"/shop",component:shop},
     {path:"/coures",component:coures},
]
})