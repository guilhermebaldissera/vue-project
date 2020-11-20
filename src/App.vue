<template>
  <v-theme-provider>
  <v-card class="card">
    <v-app-bar
        color="#2A9D8F"
        shrink-on-scroll
        prominent
        class="appBar"
      >
        <div class="wrapper">
          <v-toolbar-title class="title">Enjoy your favorites songs...</v-toolbar-title>
          <v-tabs v-model="tab" class="tabs">
            <v-tab to="/">Home</v-tab>
            <v-tab to="/song/add">Add</v-tab>
          </v-tabs>
        </div>
      </v-app-bar>
    <v-container>
      <keep-alive>
        <router-view />
      </keep-alive>
      <v-footer absolute class="footer">
        <v-col class="col"> Music is art! </v-col>
      </v-footer>
    </v-container>
  </v-card>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'App',

  components: {
  },
  data () {
    return {
      tab: null
    }
  }
  // watch:{
  //   tab: (val)=>{
  //     console.log(val)
  //   }
  // }
}
</script>

<style>
  .v-item-group.theme--light.v-slide-group.v-tabs-bar.primary--text {
    background-color: transparent;
    display: flex;
    flex-flow: row-reverse;
  }
  .tabs{
    background-color: transparent;
    display: flex;
    flex-flow: row-reverse;
  }
  .card{
    background: #696969 !important;
    height: 100vh ;
    width: 100vw ;
    font-family: 'Nunito', sans-serif;
  }
  .appBar{
    display: flex;
    justify-content: center
  }
  .wrapper{
    width: 80vw !important;
    padding: 12px !important;
    margin-right: auto !important;
    margin-left: auto !important;
    display: flex !important;
  }
  .footer{
    background: #2a9d8f !important;
    display: flex;
    flex-flow: column;
  }
  .col{
    font-family: Nunito, sans-serif;
    font-size: 20px;
    text-align: left;
    width: 80vw;
    margin: auto;
  }
  .title{
    width: 100%;
  }
</style>
