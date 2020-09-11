import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../axios/index";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    list:[]
  },
  mutations: {
    SET_LOADING(state,data){
      state.loading=data;
   },
    SET_LIST(state,data){
      state.list = data
    }
  },
  actions: {
    getList(context){
      axios.get("/api/list").then((res)=>{
        context.commit("SET_LIST",res.data.data)
      })
    }
  },
  modules: {
  }
})
