<template>
  <v-app>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        Enjoy your songs
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab to="/">Home</v-tab>
      <v-tab to="/song/add">Add</v-tab>
    </v-tabs>
  </v-card>
    <v-main>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-main>
    <v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col class="text-center" cols="12">Footer </v-col>
    </v-footer>
  </v-card>
  </v-app>
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

<style scoped>

</style>
