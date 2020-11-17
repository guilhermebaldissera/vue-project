<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="item in headers" :key="item" class="text-left">
            {{item}}
          </th>
          <!-- <th class="text-left">
            Calories
          </th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in content" :key="item.name">  
          <td v-for="value in item" :key='value'>{{ value }}</td>
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
    }
  }
//   props: ['headers', 'content']
}
</script>

<style scoped>

</style>
