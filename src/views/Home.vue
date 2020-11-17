<template>
  <div>
    <router-link to="/add" tag='h1'>
      <a>Add new record</a>
    </router-link>
    <SimpleTable :headers="headers" :content="getAllSongs" />
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
      headers: ['name', 'artist', 'album']
    }
  },
  created(){
    console.log("home created")
    this.$http.get('songs').then(resp=> {
      this.$store.commit('initializeSongs', resp.data)
    })
  }
}
</script>

<style scoped>

</style>
