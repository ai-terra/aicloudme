<template>
  <div>
    <div v-for="(row, rowIndex) in matrix" :key="'row-' + rowIndex" class="container">
      <Cell
        v-for="(col, colIndex) in row"
        :key="'col-' + colIndex"
        :initialValue="matrix[rowIndex][colIndex]"
      ></Cell>
    </div>
  </div>
</template>
<script>
import Cell from "./Cell";
export default {
  name: "Table",
  components: { Cell },
  props: ["matrix"]
};
</script>
<style scoped>
.container {
  display: flex;
  padding-left: 0;
}
</style>