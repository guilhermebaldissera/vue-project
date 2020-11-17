import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: []
  },
  getters: {
    getAllSongs(state){
      if(state.songs.length){
        return state.songs.map(songs=> {
          const objtWithNoId = {...songs}
          delete objtWithNoId.id
          return objtWithNoId
        })
      }
      return []
    }
  },
  mutations: {
    addElem (state, payload) {
      state.songs.push(payload)
    },
    initializeSongs (state, payload){
      state.songs = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
