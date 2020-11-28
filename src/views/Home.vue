<template>
  <div>
    <SimpleTable :headers="headers" :content="getAllSongs" :deleteItem="deleteElement" @updateElem="updateElem" />
    <!-- <slot/> mention slot --> 
  </div>
</template>

<script>
import SimpleTable from '../components/SimpleTable'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    SimpleTable
  },
  computed: {
    ...mapGetters(['getAllSongs'])
    // getSongs(){
    //   return this.$store.getters.getAllSongs
    // }
  },
  data () {
    return {
      headers: ['NAME', 'ARTIST', 'ALBUM']
    }
  },
  created(){
    this.$http.get('songs').then(resp=> {
      this.$store.commit('initializeSongs', resp.data)
    })
  },
  methods: {
    deleteElement(id){
      this.$http.delete(`songs/${id}`).then(resp=> {
        this.$store.commit('deleteElem', id)
      }).catch(e => console.log(e))
    },
    updateElem(event){
      this.$router.push({path: '/song/edit', query: { id: event.id, name: event.body.name,
       artist: event.body.artist, album: event.body.album}})
    }
  },
  // directives: {
  //   when: {
  //     bind(el, binding, vnode){
  //       const arg = binding.arg
  //       const fn = binding.value
  //     }
  //   }
  // }
}
</script>

<style scoped>

</style>
