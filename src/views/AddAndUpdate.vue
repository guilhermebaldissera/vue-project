<template>
  <div>
    <v-alert dense text type="success" dismissible v-if="feedback">{{feedbackMsg}}</v-alert>
    <v-form ref="form">
      <v-container>
        <v-text-field
          v-model="song.name"
          :rules="nameRules"
          label="Name"
          class="labelo"
          required
        ></v-text-field>
        <v-text-field
          v-model="song.artist"
          :rules="artistRules"
          label="Artist"
          required
        ></v-text-field>
        <v-text-field
          v-model="song.album"
          :rules="albumRules"
          label="Album"
          required
        ></v-text-field>

        <v-btn
          color="#a0e025"
          style="font-weight: bold;"
          @click.prevent="addOrUpdate()"
          depressed
        >
          {{ editMode ? "Update" : "Add" }}
        </v-btn>

        <v-btn color="#a0e025" style="font-weight: bold;" @click="reset"> Reset Form </v-btn>
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
      feedbackMsg: 'Element Insert Succefully',
      nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
      artistRules: [
        (v) => !!v || "Artist is required"
      ],
      albumRules: [
        (v) => !!v || "Album is required",
        (v) => (v && v.length <= 20) || "Album must be less than 20 characters",
      ],
    }
  },
  computed: {
    ButtonReadyToGo(){
      return !(this.song.name && this.song.artist && this.song.album)
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    addOrUpdate () {
      if(!this.$refs.form.validate())
        return
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
      this.reset()
      setInterval(_ => this.feedback = false, 2000)
    },
    verifyComponentMode(){
      // this.$route.params.action or user props
      if(this.action == "add"){
      this.editMode = false
      this.reset()
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
  },
  beforeRouteEnter(to, from, next){
    console.log(`local route, before interceptor, from: ${from} to ${to}`)
    next()
    //atributes are not reacheable here, to access atributes use callback -> next(vm -> vm.attr)
  },
  beforeRouteLeave(to, from, next){
    // Could verify if the user really wants to leave, usuful in forms
    console.log(`local route, leave interceptor, from: ${from} to ${to}`)
    // if(confirm("are you sure")){
    //   next()
    // }
    // else{
    //   next(false)
    // }
    next()
    
  }
}
</script>

<style>
.v-btn:not(.v-btn--round).v-size--default {
  margin: 30px 50px 0 0;
}
.v-label.theme--light {
  color: #ffffff;
}
.v-messages__message {
  color: #ffffff;
}
.v-text-field.v-input--has-state > .v-input_control > .v-input_slot:before {
  border-color: #ffffff;
}
</style>
