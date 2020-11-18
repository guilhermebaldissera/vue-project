<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="item in headers" :key="item" class="text-left">
            {{item}}
          </th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in content" :key="item.id">  
          <td v-for="value in item.body" :key='value'>{{ value }}</td>
          <td><v-btn @click="deleteItem(item.id)" color="error">Delete</v-btn></td>
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
}
</script>

<style scoped>

</style>
