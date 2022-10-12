import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    rep:[],
    tabj:[]
  },
  getters: {
  },
  mutations: {
    setRep(state,rep){
      state.rep = rep
    },
    setTabj(state,tabj){
      state.tabj = tabj
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
