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
          const obj = {id: objtWithNoId.id}
          delete objtWithNoId.id
          obj.body = objtWithNoId
          return obj
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
    },
    deleteElem(state, payload) {
      const index = state.songs.findIndex(song => song.id == payload)
      state.songs.splice(index, 1)
    },
    updateElem(state, payload){
      const index = state.songs.findIndex(song => song.id == payload.id)
      state.songs.splice(index, 1)
      state.songs.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
