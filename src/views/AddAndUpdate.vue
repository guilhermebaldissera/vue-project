<template>
  <div>
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
            <v-btn @click.prevent="addOrUpdate()" depressed>{{editMode ? "Update" : "Add"}}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  props: ['action'],
  name: 'Add',
  data () {
    return {
      id: 0,
      song: {
        name: '',
        artist: '',
        album: ''
      },
      editMode: false,
      feedback: false,
      feedbackMsg: 'Element Insert Succefully'
    }
  },
  methods: {
    addOrUpdate () {
      if(!this.editMode){
        this.$http.post('songs', {... this.song})
        .then(resp=> {
          this.$store.commit('addElem', resp.data)
          this.cleanAndFeedback("'Element Insert Succefully'")
        }).catch(e =>{
          this.cleanAndFeedback(e.toString())
        })
      }
      else{
        this.$http.put(`songs/${this.id}`, {... this.song}).then(resp=>{
          this.$store.commit('updateElem', resp.data)
          this.cleanAndFeedback("'Element updated Succefully'")
          this.$router.push('/')
        }).catch(e =>{
          this.cleanAndFeedback(e.toString())
          this.$router.push('/')
        })
      }
    },
    clean(){
      this.song.name = ''
      this.song.artist= ''
      this.song.album = ''
    },
    cleanAndFeedback(msg){
      this.feedbackMsg = msg
      this.feedback = !this.editMode ? true : false
      this.clean()
      setInterval(_ => this.feedback = false, 2000)
    },
    verifyComponentMode(){
      // this.$route.params.action or user props
      if(this.action == "add"){
      this.editMode = false
      this.clean()
      }else if(this.action == "edit"){
        this.editMode = true
        this.id = this.$route.query.id
        this.song.name = this.$route.query.name
        this.song.artist= this.$route.query.artist
        this.song.album = this.$route.query.album
      }else {
        this.$router.push('/')
      }
    }
  },
  created(){
    this.verifyComponentMode()
  },
  activated(){
    this.verifyComponentMode()
  }
}
</script>
