<template>
  <v-simple-table style="background: #696969;color:#FFFFFF;">
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="item in headers" :key="item"  class="thTable" >
            {{item}}
          </th>
          <th class="text-left"></th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in content" :key="item.id" class="tt">  
          <td v-for="value in item.body" :key='value'>{{ value }}</td>
          <td><v-btn @click="updateItem(item)" class="deleteAndUpdateButton">Update</v-btn></td>
          <td><v-btn @click="deleteItem(item.id)" class="deleteAndUpdateButton">Delete</v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'SimpleTable',
  props: {
    headers: {
      type: Array,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    deleteItem: {
      type: Function,
      required: true
    }
  },
//   props: ['headers', 'content']
  methods: {
    updateItem(item){
      this.$emit("updateElem", item)
    }
  }
}
</script>

<style scoped>
.tt {
  opacity: 70%;
  font-weight: bold;
}
.tt:hover {
  opacity: 100%;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: transparent;
}
.deleteAndUpdateButton{
  background:#a0e025 !important;
}
.thTable{
  font-family: 'Nunito', sans-serif !important;
  color:#edf6f9 !important;
  font-size:20px !important;
  text-align:left !important;
}

</style>
