import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      isSummit:false,
      list:[]
    },
    mutations: {
        setList(state, param) {
            state.list.push(param);
            state.list.sort((a,b)=>{
                return a.age - b.age
            })
          },
          setTab(state){
              state.isSummit = true
          }
    }
  })