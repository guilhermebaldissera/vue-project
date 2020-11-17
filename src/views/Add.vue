<template>
  <div>
    <router-link to="/" tag='h1'>
      <a>Go To HOME</a>
    </router-link>
    <v-alert dense text type="success" dismissible v-if="feedback">{{feedbackMsg}}</v-alert>
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field label="Name" v-model="song.name"></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field label="Artist" v-model="song.artist"> </v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field label="Album" v-model="song.album"> </v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-btn @click.prevent="add()" depressed>Add</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      song: {
        name: '',
        artist: '',
        album: ''
      },
      feedback: false,
      feedbackMsg: 'Element Insert Succefully'
    }
  },
  methods: {
    add () {
      this.$http.post('songs', {... this.song})
      .then(resp=> {
        this.$store.commit('addElem', resp.data)
        this.cleanAndFeedback("'Element Insert Succefully'")
        setInterval(_ => this.feedback = false, 3000)
      }).catch(e =>{
        this.cleanAndFeedback(e.toString())
        console.log(e)
      } )      
    },
    cleanAndFeedback(msg){
      this.feedbackMsg = msg
        this.feedback = true
        this.song.name = ''
        this.song.artist= ''
        this.song.album = ''
    }
  }
}
</script>
