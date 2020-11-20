<template>
  <v-theme-provider>
  <v-card style="
        background: #696969;
        height: 100vh;
        width: 100vw;
        font-family: 'Nunito', sans-serif;
      ">
    <v-app-bar
        color="#2A9D8F"
        shrink-on-scroll
        prominent
        style="display: flex; justify-content: center"
      >
        <div
          style="
            width: 80vw;
            padding: 12px;
            margin-right: auto;
            margin-left: auto;
            display: flex;
          "
        >
          <v-toolbar-title style="width: 100%;">Enjoy your favorites songs...</v-toolbar-title>

          <v-tabs v-model="tab" style="background-color: transparent;display: flex;flex-flow: row-reverse;">
            <v-tab to="/">Home</v-tab>
            <v-tab to="/song/add">Add</v-tab>
          </v-tabs>
        </div>
      </v-app-bar>
    <v-container>
      <keep-alive>
        <router-view />
      </keep-alive>
      <v-footer absolute style="background: #2a9d8f;display: flex;flex-flow: column;">
        <v-col style="font-family: Nunito, sans-serif;font-size: 20px;text-align: left;width: 80vw;margin: auto;"> Music is art! </v-col>
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
</style>
